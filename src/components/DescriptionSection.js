import React from "react";
import '../styles/DescriptionSection.css';

const DescriptionSection = () => {
  return (
    <section className="description-section">
      <div className="description-content">
        <p>
          Découvrez des images de différentes villes dans le monde, accompagnées
          de leurs informations météorologiques. Profitez de l'exploration de
          chaque ville et n'oubliez pas de partager avec nous votre avis !
        </p>
      </div>
      <div className="tabs">
        <button className="tab active">Coups de cœur de la rédaction</button>
        <button className="tab">Plus récents</button>
        <button className="tab">Tendance</button>
      </div>
    </section>
  );
};

export default DescriptionSection;
