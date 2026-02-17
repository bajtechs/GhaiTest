import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, BookOpen } from "lucide-react";
import { branches } from "@/data/branches";
import heroImage from "@/assets/hero-bakery.jpg";
import branchModelTown from "@/assets/branch-model-town.jpg";
import branchLajpatNagar from "@/assets/branch-lajpat-nagar.jpg";
import branchBmcChowk from "@/assets/branch-bmc-chowk.jpg";
import branchNakodarRoad from "@/assets/branch-nakodar-road.jpg";

const branchImages: Record<string, string> = {
  "model-town": branchModelTown,
  "lajpat-nagar": branchLajpatNagar,
  "bmc-chowk": branchBmcChowk,
  "nakodar-road": branchNakodarRoad,
};

const Home = () => {
  const branchesRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToBranches = () => {
    branchesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Ghai Biscuits - Fresh baked goods on rustic table"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bakery-espresso/70 via-bakery-espresso/50 to-bakery-espresso/80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
          <p className="font-body text-bakery-wheat tracking-[0.3em] uppercase text-sm mb-4">
            Est. Jalandhar, Punjab
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-bakery-cream mb-4 leading-tight">
            Ghai Biscuits
          </h1>
          <p className="font-display text-xl md:text-2xl text-bakery-wheat/90 italic mb-2">
            A Taste of Tradition
          </p>
          <p className="font-body text-bakery-wheat/70 text-base md:text-lg max-w-xl mx-auto mb-10">
            Handcrafted with love since generations. Fresh biscuits, cookies & traditional treats baked daily in our ovens.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToBranches}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-lg rounded-lg hover:opacity-90 transition-all duration-300 shadow-elevated"
            >
              <MapPin className="w-5 h-5" />
              Our Branches
            </button>
            <button
              onClick={() => navigate("/our-story")}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-bakery-wheat/40 text-bakery-cream font-body font-semibold text-lg rounded-lg hover:bg-bakery-cream/10 transition-all duration-300"
            >
              <BookOpen className="w-5 h-5" />
              Our Story
            </button>
          </div>
        </div>

        {/* Decorative scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-bakery-wheat/40 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-bakery-wheat/60" />
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section ref={branchesRef} className="py-20 md:py-28 px-4 bg-gradient-warm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-3">
              Visit Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Branches
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
              Four locations across Jalandhar, each bringing you the same unmatched quality and freshness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch, index) => (
              <button
                key={branch.id}
                onClick={() => navigate(`/branch/${branch.id}`)}
                className="group text-left bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-full h-40 overflow-hidden">
                  <img
                    src={branchImages[branch.id]}
                    alt={`Ghai Biscuits ${branch.shortName} branch`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {branch.shortName}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-3">
                    {branch.description}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {branch.address}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-primary font-body font-semibold text-sm group-hover:gap-2 transition-all">
                    Visit Branch
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bakery-espresso text-bakery-cream/70 py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="font-display text-2xl text-bakery-cream mb-2">Ghai Biscuits</h3>
          <p className="font-body text-sm">Jalandhar, Punjab — Baked with love since generations</p>
          <p className="font-body text-xs mt-4 text-bakery-cream/40">
            © {new Date().getFullYear()} Ghai Biscuits. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
