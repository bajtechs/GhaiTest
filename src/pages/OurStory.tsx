import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import storyImage from "@/assets/our-story.jpg";

const OurStory = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={storyImage}
            alt="Inside the Ghai Biscuits bakery — glass display cases with golden biscuits"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-bakery-espresso/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="font-body text-bakery-wheat tracking-[0.2em] uppercase text-sm mb-3">
            Since Generations
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-bakery-cream">
            Our Story
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-primary font-body font-semibold mb-10 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <div className="space-y-8 font-body text-foreground/85 text-lg leading-relaxed">
            <p>
              In the heart of Jalandhar, Punjab, there is a name that evokes warmth, trust, and the irresistible 
              aroma of freshly baked biscuits — <strong className="text-foreground font-semibold">Ghai Biscuits</strong>.
            </p>

            <p>
              What began as a small family bakery has grown into one of the most beloved local brands in the city. 
              For generations, the Ghai family has poured their heart and soul into perfecting every recipe, 
              every batch, and every bite. From the classic <em>Atta Biscuit</em> to the rich <em>Kaju Pista Cookies</em>, 
              each product carries forward a legacy of authentic taste.
            </p>

            <div className="border-l-4 border-primary pl-6 py-2 my-10 bg-card rounded-r-lg">
              <p className="font-display text-xl italic text-foreground">
                "We don't just bake biscuits — we bake memories that families share over cups of chai."
              </p>
              <p className="text-sm text-muted-foreground mt-2">— The Ghai Family</p>
            </div>

            <h2 className="font-display text-3xl font-bold text-foreground pt-4">
              A Family-Run Heritage
            </h2>
            <p>
              The secret behind Ghai Biscuits is simple: real ingredients, time-honoured recipes, and an 
              unwavering commitment to quality. Every morning, our ovens light up before dawn, and our skilled 
              bakers — many of whom have been with us for decades — begin crafting the day's fresh batch.
            </p>

            <h2 className="font-display text-3xl font-bold text-foreground pt-4">
              Quality You Can Trust
            </h2>
            <p>
              We believe that great taste starts with great ingredients. We source the finest wheat flour, 
              pure desi ghee, premium dry fruits, and fresh spices. Our bakery maintains the highest standards 
              of hygiene and food safety, ensuring that every product that leaves our counter is something we'd 
              proudly serve to our own family.
            </p>

            <h2 className="font-display text-3xl font-bold text-foreground pt-4">
              Known for Consistency
            </h2>
            <p>
              Ask any Jalandhar local about Ghai Biscuits, and they'll tell you — the taste has remained 
              unchanged for years. Whether you're buying our <em>Nankhatai</em> for a festival celebration 
              or our <em>Suji Rusk</em> for your daily chai, you can count on the same delicious, consistent 
              quality every single time.
            </p>

            <h2 className="font-display text-3xl font-bold text-foreground pt-4">
              Freshness Guaranteed
            </h2>
            <p>
              Unlike mass-produced alternatives, Ghai Biscuits are baked fresh every day. We don't store 
              products for days or weeks — what you buy today was baked today. That's our promise to every 
              customer who walks through our doors.
            </p>

            <div className="mt-12 p-8 bg-card rounded-xl shadow-card text-center border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Visit Us Today
              </h3>
              <p className="text-muted-foreground mb-6">
                Experience the warmth and taste at any of our four branches across Jalandhar.
              </p>
              <button
                onClick={() => navigate("/")}
                className="px-8 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:opacity-90 transition-all shadow-soft"
              >
                Find a Branch
              </button>
            </div>
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

export default OurStory;
