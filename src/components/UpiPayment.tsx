import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Smartphone, QrCode, CheckCircle2, Clock, ExternalLink } from "lucide-react";

const UPI_ID = "7696904810@fam";
const PAYEE_NAME = "Ghai Biscuits";

interface UpiPaymentProps {
  amount: number;
  onPaymentConfirmed: () => void;
}

function buildUpiUrl(amount: number): string {
  const params = new URLSearchParams({
    pa: UPI_ID,
    pn: PAYEE_NAME,
    am: amount.toFixed(2),
    cu: "INR",
    tn: `Order at ${PAYEE_NAME}`,
  });
  return `upi://pay?${params.toString()}`;
}

const UpiPayment = ({ amount, onPaymentConfirmed }: UpiPaymentProps) => {
  const [status, setStatus] = useState<"idle" | "pending" | "success">("idle");
  const upiUrl = buildUpiUrl(amount);

  const handleOpenUpiApp = () => {
    setStatus("pending");
    window.location.href = upiUrl;
  };

  const handleConfirmPayment = () => {
    setStatus("success");
    // Small delay so the user sees the success state before the parent handles it
    setTimeout(() => onPaymentConfirmed(), 1200);
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center animate-scale-in">
        <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-3" />
        <h4 className="font-display text-xl font-bold text-green-800 mb-1">
          Payment Successful!
        </h4>
        <p className="font-body text-sm text-green-700">
          Your payment of <span className="font-semibold">₹{amount}</span> has been confirmed.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Pay via UPI App Button (mobile deep link) */}
      <a
        href={upiUrl}
        onClick={(e) => {
          // On desktop the link won't resolve, so we set pending anyway
          setStatus("pending");
        }}
        className="flex items-center justify-center gap-3 w-full py-3.5 bg-[#5F259F] text-white font-body font-semibold rounded-lg hover:opacity-90 transition-all text-lg no-underline"
      >
        <Smartphone className="w-5 h-5" />
        Pay ₹{amount} with UPI / GPay / PhonePe
        <ExternalLink className="w-4 h-4 opacity-70" />
      </a>
      <p className="font-body text-xs text-muted-foreground text-center -mt-2">
        Opens your UPI app on mobile (GPay, PhonePe, Paytm, etc.)
      </p>

      {/* QR Code Section */}
      <div className="bg-muted/50 rounded-xl p-5 border border-border">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <QrCode className="w-5 h-5 text-primary" />
          <h4 className="font-display text-base font-semibold text-foreground">
            Or scan QR code to pay
          </h4>
        </div>

        <div className="bg-white rounded-lg p-4 w-fit mx-auto shadow-sm">
          <QRCodeSVG
            value={upiUrl}
            size={200}
            level="H"
            includeMargin={false}
            bgColor="#ffffff"
            fgColor="#1a1a1a"
          />
        </div>

        <div className="mt-3 text-center space-y-1">
          <p className="font-body text-sm text-foreground">
            UPI ID: <span className="font-semibold text-primary select-all">{UPI_ID}</span>
          </p>
          <p className="font-body text-sm text-foreground">
            Amount: <span className="font-semibold">₹{amount}</span>
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Scan with any UPI app — Google Pay, PhonePe, Paytm, BHIM
          </p>
        </div>
      </div>

      {/* Payment Status / Confirmation */}
      {status === "pending" && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-amber-600 animate-pulse" />
            <h4 className="font-display text-base font-semibold text-amber-800">
              Payment Pending
            </h4>
          </div>
          <p className="font-body text-sm text-amber-700 mb-4">
            Complete the payment in your UPI app, then confirm below.
          </p>
          <button
            onClick={handleConfirmPayment}
            className="w-full py-3 bg-green-600 text-white font-body font-semibold rounded-lg hover:bg-green-700 transition-all text-base"
          >
            ✓ I Have Paid — Confirm Order
          </button>
        </div>
      )}

      {status === "idle" && (
        <button
          onClick={() => setStatus("pending")}
          className="w-full py-2.5 border border-border text-foreground font-body text-sm rounded-lg hover:bg-muted transition-all"
        >
          I already paid via UPI — Confirm
        </button>
      )}
    </div>
  );
};

export default UpiPayment;
