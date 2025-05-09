import React from 'react';
import './App.css';
import { GalleryWithInfo } from './components/galleryWithInfo/GalleryWithInfo';

function App() {
  const galleryImages = [
    "/images/cpsOne.webp",
    "/images/cpsTwo.webp",
    "/images/cpsThree.webp",
    "/images/cpsFour.webp"
  ];

  const contentItems = [
    {
      imageUrl: galleryImages[0],
      eyebrow: "VALEURS",
      title: "L'esprit de compétition",
      description: "Chez Papy Sponso soutient les passionnés de sport amateur avec énergie et engagement.",
      buttonText: "Découvrir",
      buttonLink: "#valeurs"
    },
    {
      imageUrl: galleryImages[1],
      eyebrow: "COMMUNAUTÉ",
      title: "Une vraie équipe",
      description: "Un réseau de sportifs et sponsors unis autour de projets dynamiques.",
      buttonText: "Rejoindre",
      buttonLink: "#communaute"
    },
    {
      imageUrl: galleryImages[2],
      eyebrow: "SOUTIEN",
      title: "Des partenaires engagés",
      description: "Nous connectons des marques ambitieuses avec des athlètes prometteurs.",
      buttonText: "Nos partenaires",
      buttonLink: "#partenaires"
    },


  ];

  return (
    <div className="App">
      <GalleryWithInfo
        gallery={galleryImages}
        items={contentItems}
        imageGap="0"
        cardBackgroundColor="#000000"
        buttonColor="#FFD700"
        hoverEffect={false}
      />
    </div>
  );
}

export default App;
