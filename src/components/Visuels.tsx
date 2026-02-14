import { useState } from "react";
import Title from "./Title";
import { X, Expand } from "lucide-react";

import flyers from "../assets/creation/flyers.jpeg";
import flyersCoiffure from "../assets/creation/flyersCoiffure.jpeg";
import flyersEglise from "../assets/creation/flyersEglise.jpeg";
import flyersLivraison from "../assets/creation/flyersLivraison.jpeg";
import flyersReparateur from "../assets/creation/flyersReparateur.jpeg";
import flyersLePremier from "../assets/creation/flyersLePremier.png";


type VisuelItem = {
  id: number;
  title: string;
  description?: string;
  image: string;
};

const visuels: VisuelItem[] = [
    { id: 1, title: "Flyers LePremier", description: "Maquette mobile.", image: flyersLePremier },
  { id: 2, title: "Flyers", description: "Création graphique.", image: flyers },
  { id: 3, title: "Flyers Livraison", description: "Visuel pour service de livraison.", image: flyersLivraison },
  { id: 4, title: "Flyers Réparateur", description: "Visuel pour service de réparation.", image: flyersReparateur },
  { id: 5, title: "Flyers Coiffure", description: "Visuel pour salon de coiffure.", image: flyersCoiffure },
  { id: 6, title: "Flyers Église", description: "Visuel pour événement religieux.", image: flyersEglise },
];

const Visuels = () => {
  const [selectedVisuel, setSelectedVisuel] = useState<VisuelItem | null>(null);

  return (
    <div className="mt-10" id="Visuels">
      <Title title="Mes visuels" />
      <p className="text-center text-base-content/80 mb-6 max-w-xl mx-auto">
        Quelques créations graphiques et visuelles que j’ai réalisées.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visuels.map((visuel) => (
          <div
            key={visuel.id}
            className="bg-base-200 rounded-xl shadow-lg overflow-hidden group cursor-pointer transition transform hover:scale-[1.02] hover:shadow-xl"
            onClick={() => setSelectedVisuel(visuel)}
          >
            <div className="relative aspect-[4/3] bg-base-300">
              <img
                src={visuel.image}
                alt={visuel.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Expand className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">{visuel.title}</h3>
              {visuel.description && (
                <p className="text-sm text-base-content/80 mt-1 line-clamp-2">
                  {visuel.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modale de visionnage en grand */}
      {selectedVisuel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedVisuel(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Voir le visuel en grand"
        >
          <button
            type="button"
            className="absolute top-4 right-4 btn btn-circle btn-ghost text-white hover:bg-white/20 z-10"
            onClick={() => setSelectedVisuel(null)}
            aria-label="Fermer"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedVisuel.image}
              alt={selectedVisuel.title}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain mx-auto rounded-lg shadow-2xl"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="font-bold text-xl">{selectedVisuel.title}</h3>
              {selectedVisuel.description && (
                <p className="text-sm opacity-90 mt-1">{selectedVisuel.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Visuels;
