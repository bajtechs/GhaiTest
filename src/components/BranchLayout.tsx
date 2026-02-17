import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { Home, UtensilsCrossed, ShoppingCart, Phone, MapPin, BookOpen, ArrowLeft } from "lucide-react";
import { getBranch } from "@/data/branches";
import { CartProvider, useCart } from "@/context/CartContext";
import { useState } from "react";

function BranchNav() {
  const { branchId } = useParams<{ branchId: string }>();
  const location = useLocation();
  const { totalItems } = useCart();
  const branch = getBranch(branchId || "");
  const [menuOpen, setMenuOpen] = useState(false);

  if (!branch) return null;

  const basePath = `/branch/${branchId}`;
  const navItems = [
    { to: basePath, icon: Home, label: "Home", exact: true },
    { to: `${basePath}/menu`, icon: UtensilsCrossed, label: "Menu" },
    { to: `${basePath}/cart`, icon: ShoppingCart, label: "Cart", badge: totalItems },
    { to: `${basePath}/contact`, icon: Phone, label: "Contact" },
    { to: `${basePath}/location`, icon: MapPin, label: "Location" },
    { to: "/our-story", icon: BookOpen, label: "Our Story" },
  ];

  const isActive = (to: string, exact?: boolean) => {
    if (exact) return location.pathname === to;
    return location.pathname.startsWith(to);
  };

  return (
    <>
      {/* Desktop / Tablet Nav */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors mr-2">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <Link to={basePath} className="font-display text-lg font-bold text-foreground">
              Ghai <span className="text-primary">Biscuits</span>
            </Link>
            <span className="hidden sm:inline text-xs font-body bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              {branch.shortName}
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg font-body text-sm font-medium transition-colors ${
                  isActive(item.to, item.exact)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
                {item.badge ? (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-bold">
                    {item.badge}
                  </span>
                ) : null}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-foreground transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`w-5 h-0.5 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-foreground transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-card px-4 py-3 space-y-1 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-body text-sm font-medium transition-colors ${
                  isActive(item.to, item.exact)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
                {item.badge ? (
                  <span className="ml-auto w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-bold">
                    {item.badge}
                  </span>
                ) : null}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <Outlet />

      {/* Footer */}
      <footer className="bg-bakery-espresso text-bakery-cream/70 py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="font-display text-2xl text-bakery-cream mb-2">Ghai Biscuits</h3>
          <p className="font-body text-sm">{branch.shortName} — Jalandhar, Punjab</p>
          <p className="font-body text-xs mt-4 text-bakery-cream/40">
            © {new Date().getFullYear()} Ghai Biscuits. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default function BranchLayout() {
  const { branchId } = useParams<{ branchId: string }>();

  if (!branchId) return null;

  return (
    <CartProvider branchId={branchId}>
      <BranchNav />
    </CartProvider>
  );
}
