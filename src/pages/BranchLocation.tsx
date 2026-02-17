import { useParams } from "react-router-dom";
import { Navigation, MapPin } from "lucide-react";
import { getBranch } from "@/data/branches";

const BranchLocation = () => {
  const { branchId } = useParams<{ branchId: string }>();
  const branch = getBranch(branchId || "");

  if (!branch) return <div className="p-10 text-center">Branch not found.</div>;

  return (
    <div className="min-h-[80vh] bg-gradient-warm">
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 animate-fade-in-up">
            <p className="font-body text-primary tracking-[0.2em] uppercase text-sm mb-2">
              {branch.shortName}
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
              Our Location
            </h1>
            <p className="font-body text-muted-foreground">{branch.address}</p>
          </div>

          {/* Map Embed */}
          <div className="bg-card rounded-xl overflow-hidden shadow-card border border-border mb-6">
            <iframe
              src={branch.mapEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map location of ${branch.name}`}
              className="w-full"
            />
          </div>

          {/* Navigate Button */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={branch.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:opacity-90 transition-all shadow-soft text-lg"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </a>
            <div className="flex-1 flex items-center gap-3 px-6 py-4 bg-card rounded-lg border border-border">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="font-body text-sm text-muted-foreground">{branch.address}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BranchLocation;
