import React from 'react';
import './App.css';
import { GalleryWithInfo } from './components/galleryWithInfo/GalleryWithInfo';
import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';
import LogoCarousel from './components/logoCarousel/LogoCarousel';

const logos = [
  '/logos/andros.png',
  '/logos/canterbury.png',
  '/logos/edf.png',
  '/logos/mcdonalds.png',
  '/logos/nintendo.png',
  '/logos/orange.png',
  '/logos/parionsSport.png',
  '/logos/nike.png',
  '/logos/tcl.png',
];


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
      showButton: "false"
    },
    {
      imageUrl: galleryImages[1],
      eyebrow: "COMMUNAUTÉ",
      title: "Une vraie équipe",
      description: "Un réseau de sportifs et sponsors unis autour de projets dynamiques.",
      showButton: "false"
    },
    {
      imageUrl: galleryImages[2],
      eyebrow: "SOUTIEN",
      title: "Des partenaires engagés",
      description: "Nous connectons des marques ambitieuses avec des athlètes prometteurs.",
      showButton: "false"
    },


  ];

  return (
    <div className="App">
      <HeroSection  bgImage='./images/heroSection.webp'/>
      <LogoCarousel logos={logos} speed={65} height="100%" />
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
