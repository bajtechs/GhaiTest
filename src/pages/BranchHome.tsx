import { useParams, useNavigate } from "react-router-dom";
import { UtensilsCrossed, ShoppingCart, Phone, MapPin, BookOpen } from "lucide-react";
import { getBranch } from "@/data/branches";

const BranchHome = () => {
  const { branchId } = useParams<{ branchId: string }>();
  const navigate = useNavigate();
  const branch = getBranch(branchId || "");

  if (!branch) return <div className="p-10 text-center">Branch not found.</div>;

  const links = [
    { to: `/branch/${branchId}/menu`, icon: UtensilsCrossed, label: "View Menu", desc: "Browse our fresh biscuits, cookies & snacks" },
    { to: `/branch/${branchId}/cart`, icon: ShoppingCart, label: "Cart / Order", desc: "Review your cart and place an order" },
    { to: `/branch/${branchId}/contact`, icon: Phone, label: "Contact Us", desc: "Get in touch via phone or WhatsApp" },
    { to: `/branch/${branchId}/location`, icon: MapPin, label: "Our Location", desc: "Find us on the map" },
    { to: "/our-story", icon: BookOpen, label: "Our Story", desc: "Learn about Ghai Biscuits' legacy" },
  ];

  return (
    <div className="min-h-[80vh] bg-gradient-warm">
      {/* Branch Hero */}
      <section className="py-16 md:py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-3">
            Ghai Biscuits
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            {branch.shortName}
          </h1>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto mb-2">
            {branch.description}
          </p>
          <p className="font-body text-sm text-muted-foreground">
            {branch.address}
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="pb-20 px-4">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((link, i) => (
            <button
              key={link.to}
              onClick={() => navigate(link.to)}
              className="group text-left bg-card rounded-xl p-5 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5 border border-border"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-0.5">
                    {link.label}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {link.desc}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BranchHome;
