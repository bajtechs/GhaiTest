import { useParams } from "react-router-dom";
import { Plus, Check } from "lucide-react";
import { getBranchMenu, getBranch } from "@/data/branches";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const BranchMenu = () => {
  const { branchId } = useParams<{ branchId: string }>();
  const branch = getBranch(branchId || "");
  const menu = getBranchMenu(branchId || "");
  const { addItem, items } = useCart();
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());

  if (!branch) return <div className="p-10 text-center">Branch not found.</div>;

  // Group by category
  const categories = menu.reduce<Record<string, typeof menu>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const handleAdd = (item: typeof menu[0]) => {
    addItem({ id: item.id, name: item.name, price: item.price });
    setAddedIds((prev) => new Set(prev).add(item.id));
    setTimeout(() => {
      setAddedIds((prev) => {
        const next = new Set(prev);
        next.delete(item.id);
        return next;
      });
    }, 1200);
  };

  const getItemQty = (id: string) => items.find((i) => i.id === id)?.quantity || 0;

  return (
    <div className="min-h-[80vh] bg-gradient-warm">
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-2">
              {branch.shortName}
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
              Our Menu
            </h1>
            <p className="font-body text-muted-foreground">
              Freshly baked every day — prices in ₹ per pack
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(categories).map(([category, items]) => (
              <div key={category}>
                <h2 className="font-display text-2xl font-bold text-foreground mb-5 border-b border-border pb-2">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {items.map((item) => {
                    const qty = getItemQty(item.id);
                    const justAdded = addedIds.has(item.id);

                    return (
                      <div
                        key={item.id}
                        className="bg-card rounded-xl p-5 shadow-soft border border-border flex items-start justify-between gap-3 hover:shadow-card transition-shadow"
                      >
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display text-lg font-semibold text-foreground">
                            {item.name}
                          </h3>
                          <p className="font-body text-sm text-muted-foreground mb-2">
                            {item.description}
                          </p>
                          <p className="font-body text-xl font-bold text-primary">
                            ₹{item.price}
                          </p>
                          {qty > 0 && (
                            <p className="font-body text-xs text-muted-foreground mt-1">
                              {qty} in cart
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => handleAdd(item)}
                          className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            justAdded
                              ? "bg-green-500/20 text-green-700"
                              : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                          }`}
                          aria-label={`Add ${item.name} to cart`}
                        >
                          {justAdded ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BranchMenu;
