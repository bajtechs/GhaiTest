import { useParams, useNavigate } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { getBranch } from "@/data/branches";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { z } from "zod";
import UpiPayment from "@/components/UpiPayment";
import { buildWhatsAppOrderUrl } from "@/utils/whatsapp";

const checkoutSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  phone: z.string().trim().min(10, "Valid phone number required").max(15),
  paymentMethod: z.enum(["upi", "cod"]),
});

const BranchCart = () => {
  const { branchId } = useParams<{ branchId: string }>();
  const navigate = useNavigate();
  const branch = getBranch(branchId || "");
  const { items, updateQuantity, removeItem, clearCart, totalPrice, totalItems } = useCart();

  const [step, setStep] = useState<"cart" | "checkout" | "done">("cart");
  const [form, setForm] = useState({ name: "", phone: "", paymentMethod: "upi" as "upi" | "cod" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [location, setLocation] = useState<string>("");
  const [locationLoading, setLocationLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!branch) return <div className="p-10 text-center">Branch not found.</div>;

  const detectLocation = () => {
    if (!navigator.geolocation) {
      setLocation("Geolocation not supported");
      return;
    }
    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const link = `https://maps.google.com/?q=${pos.coords.latitude},${pos.coords.longitude}`;
        setLocation(link);
        setLocationLoading(false);
      },
      () => {
        setLocation("Unable to detect location");
        setLocationLoading(false);
      }
    );
  };

  const handleCheckout = () => {
    const result = checkoutSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((e) => {
        if (e.path[0]) fieldErrors[e.path[0] as string] = e.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    const orderData = {
      orderId: `GH-${Date.now()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
      branch: branch.shortName,
      branchId: branchId,
      customer: {
        name: form.name,
        phone: form.phone,
        location: location || "Not provided",
      },
      items: items.map((i) => ({ name: i.name, price: i.price, qty: i.quantity, subtotal: i.price * i.quantity })),
      totalPrice,
      paymentMethod: form.paymentMethod === "upi" ? "Online (UPI)" : "Cash on Delivery / Pay at Shop",
      orderDate: new Date().toISOString(),
    };

    console.log("ORDER DATA (ready for backend):", JSON.stringify(orderData, null, 2));

    // Send WhatsApp notification to shop owner
    const whatsappUrl = buildWhatsAppOrderUrl(orderData);
    window.open(whatsappUrl, "_blank");

    setOrderPlaced(true);
    setStep("done");
    clearCart();
  };

  if (step === "done" && orderPlaced) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-warm px-4">
        <div className="max-w-md mx-auto text-center bg-card rounded-xl p-10 shadow-elevated border border-border animate-scale-in">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <ShoppingBag className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-3">Order Placed!</h2>
          <p className="font-body text-muted-foreground mb-2">
            Thank you for ordering from Ghai Biscuits, {branch.shortName}. We'll have your order ready soon!
          </p>
          <p className="font-body text-sm text-muted-foreground mb-6">
            📲 Order details have been sent to the shop via WhatsApp.
          </p>
          <button
            onClick={() => navigate(`/branch/${branchId}/menu`)}
            className="px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:opacity-90 transition-all"
          >
            Order More
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] bg-gradient-warm">
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-2">
              {branch.shortName}
            </p>
            <h1 className="font-display text-4xl font-bold text-foreground">
              {step === "cart" ? "Your Cart" : "Checkout"}
            </h1>
          </div>

          {items.length === 0 && step === "cart" ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="font-body text-muted-foreground text-lg mb-6">Your cart is empty</p>
              <button
                onClick={() => navigate(`/branch/${branchId}/menu`)}
                className="px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:opacity-90 transition-all"
              >
                Browse Menu
              </button>
            </div>
          ) : step === "cart" ? (
            <>
              <div className="space-y-3 mb-8">
                {items.map((item) => (
                  <div key={item.id} className="bg-card rounded-xl p-4 shadow-soft border border-border flex items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg font-semibold text-foreground">{item.name}</h3>
                      <p className="font-body text-primary font-bold">₹{item.price} each</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-md bg-muted flex items-center justify-center hover:bg-border transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-body font-bold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-md bg-muted flex items-center justify-center hover:bg-border transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="font-body font-bold text-foreground min-w-[60px] text-right">
                      ₹{item.price * item.quantity}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-destructive/60 hover:text-destructive transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-body text-muted-foreground">
                    {totalItems} item{totalItems !== 1 ? "s" : ""}
                  </span>
                  <span className="font-display text-2xl font-bold text-foreground">₹{totalPrice}</span>
                </div>
                <button
                  onClick={() => setStep("checkout")}
                  className="w-full py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:opacity-90 transition-all text-lg"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          ) : (
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="bg-card rounded-xl p-5 shadow-soft border border-border">
                <h3 className="font-display text-lg font-semibold mb-3">Order Summary</h3>
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between font-body text-sm py-1">
                    <span>{item.name} × {item.quantity}</span>
                    <span className="font-semibold">₹{item.price * item.quantity}</span>
                  </div>
                ))}
                <div className="border-t border-border mt-3 pt-3 flex justify-between font-body font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">₹{totalPrice}</span>
                </div>
              </div>

              {/* Customer Details */}
              <div className="bg-card rounded-xl p-5 shadow-soft border border-border space-y-4">
                <h3 className="font-display text-lg font-semibold">Your Details</h3>

                <div>
                  <label className="font-body text-sm text-muted-foreground mb-1 block">Full Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background font-body focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                    maxLength={100}
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="font-body text-sm text-muted-foreground mb-1 block">Phone Number *</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background font-body focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="+91 XXXXX XXXXX"
                    maxLength={15}
                  />
                  {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="font-body text-sm text-muted-foreground mb-1 block">Your Location</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-lg border border-input bg-background font-body focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                      placeholder="Auto-detect or paste Google Maps link"
                    />
                    <button
                      onClick={detectLocation}
                      disabled={locationLoading}
                      className="px-4 py-2.5 bg-secondary text-secondary-foreground font-body text-sm rounded-lg hover:opacity-80 transition-all whitespace-nowrap"
                    >
                      {locationLoading ? "Detecting..." : "📍 Detect"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-card rounded-xl p-5 shadow-soft border border-border space-y-4">
                <h3 className="font-display text-lg font-semibold">Payment Method</h3>

                <div className="flex gap-2">
                  <button
                    onClick={() => setForm({ ...form, paymentMethod: "upi" })}
                    className={`flex-1 py-3 rounded-lg font-body font-semibold text-sm border transition-all ${
                      form.paymentMethod === "upi"
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-foreground border-border hover:bg-muted"
                    }`}
                  >
                    💳 Online (UPI)
                  </button>
                  <button
                    onClick={() => setForm({ ...form, paymentMethod: "cod" })}
                    className={`flex-1 py-3 rounded-lg font-body font-semibold text-sm border transition-all ${
                      form.paymentMethod === "cod"
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-foreground border-border hover:bg-muted"
                    }`}
                  >
                    🏪 Cash / Pay at Shop
                  </button>
                </div>

                {form.paymentMethod === "upi" && (
                  <UpiPayment
                    amount={totalPrice}
                    onPaymentConfirmed={handleCheckout}
                  />
                )}

                {form.paymentMethod === "cod" && (
                  <p className="font-body text-sm text-muted-foreground p-3 bg-muted rounded-lg">
                    Pay in cash when you pick up your order from the shop.
                  </p>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => setStep("cart")}
                  className="flex-1 py-3 border border-border text-foreground font-body font-semibold rounded-lg hover:bg-muted transition-all"
                >
                  Back to Cart
                </button>
                {form.paymentMethod === "cod" && (
                  <button
                    onClick={handleCheckout}
                    className="flex-1 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:opacity-90 transition-all text-lg"
                  >
                    Place Order
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BranchCart;
