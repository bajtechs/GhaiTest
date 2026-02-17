import { useParams } from "react-router-dom";
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";
import { getBranch } from "@/data/branches";

const BranchContact = () => {
  const { branchId } = useParams<{ branchId: string }>();
  const branch = getBranch(branchId || "");

  if (!branch) return <div className="p-10 text-center">Branch not found.</div>;

  return (
    <div className="min-h-[80vh] bg-gradient-warm">
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-2">
              {branch.shortName}
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
              Contact Us
            </h1>
            <p className="font-body text-muted-foreground">
              We'd love to hear from you
            </p>
          </div>

          <div className="space-y-4">
            {/* Phone */}
            <a
              href={`tel:${branch.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-soft border border-border hover:shadow-card transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-foreground">Call Us</p>
                <p className="font-body text-muted-foreground">{branch.phone}</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${branch.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-soft border border-border hover:shadow-card transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-foreground">WhatsApp</p>
                <p className="font-body text-muted-foreground">Chat with us on WhatsApp</p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-soft border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-foreground">Address</p>
                <p className="font-body text-muted-foreground">{branch.address}</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-soft border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-foreground">Business Hours</p>
                <p className="font-body text-muted-foreground">{branch.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BranchContact;
