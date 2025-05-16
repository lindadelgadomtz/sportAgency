import React from 'react';
import './App.css';
import { GalleryWithInfo } from './components/galleryWithInfo/GalleryWithInfo';
import HeroSection from './components/heroSection/HeroSection';
import LogoCarousel from './components/logoCarousel/LogoCarousel';
import HeaderBurger from './components/headerBurger/HeaderBurger';
import DiagonalComponent from './components/diagonalComponent/DiagonalComponent';
import FlyingText from './components/flyingText/FlyingText';
import FlyingTextVideo from './components/flyingTextVideo/FlyingTextVideo'


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
    "/images/cpsThree.webp",
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
      <HeaderBurger
        links={[
          { label: 'Présentation', href: '#presentation' },
          { label: 'Nos sportifs', href: '#sportifs' },
          { label: 'Nos influenceurs', href: '#influenceurs' },
          { label: 'Nos collabs', href: '#collabs' },
          { label: 'Nous contacter', href: '#contact' },
        ]}
        languages={['fr', 'en']}
      />
      <HeroSection bgImage='./images/heroSection.webp' />
      <LogoCarousel logos={logos} speed={65} height="100%" />
      <GalleryWithInfo
        gallery={galleryImages}
        items={contentItems}
        imageGap="0"
        cardBackgroundColor="#000000"
        buttonColor="#FFD700"
        hoverEffect={true}
      />
      {/* <DiagonalComponent
        imageUrl='./images/heroSection.webp'
        phrase="Push Beyond the Limits"
        theme="dark"
        height="60vh"
      /> */}

      <FlyingText
        title="Des partenariats uniques et performants"
        description="Chez Papy Sponso, nous créons des liens uniques et puissants entre ambassadeurs et marques. Nous transformons chaque partenariat en une opportunité de succès inégalé."
        imageUrl='./images/heroSection.webp'
        backgroundColor="#000000"
        textColor="#ffffff"
        titleColor="#FFCC00"
        showButton={true}
        buttonText="Découvrez plus"
        onButtonClick={() => alert('Bouton cliqué !')} />

      <FlyingTextVideo
        title="Regardez notre histoire"
        description="Chez Papy Sponso, nous créons des liens puissants entre ambassadeurs et marques. Regardez comment."
        imageUrl="/images/video-cover.jpg"
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        backgroundColor="#000000"
        textColor="#ffffff"
        titleColor="#FFCC00"
        showButton
        buttonText="En savoir plus"
        onButtonClick={() => alert("CTA clicked")}
      />

      <main>
        <section id="presentation">...</section>
        <section id="sportifs">...</section>
        <section id="influenceurs">...</section>
        <section id="collabs">...</section>
        <section id="contact">...</section>
      </main>
    </div>
  );
}

export default App;
