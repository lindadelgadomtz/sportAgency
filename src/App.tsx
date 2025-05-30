import React from 'react';
import './App.css';
import { GalleryWithInfo } from './components/galleryWithInfo/GalleryWithInfo';
import HeroSection from './components/heroSection/HeroSection';
import LogoCarousel from './components/logoCarousel/LogoCarousel';
import HeaderBurger from './components/headerBurger/HeaderBurger';
import DiagonalComponent from './components/diagonalComponent/DiagonalComponent';
import FlyingText from './components/flyingText/FlyingText';
import FlyingTextVideo from './components/flyingTextVideo/FlyingTextVideo';
import StatsSection from './components/statsSection/StatsSection';
import StatsPercentageSection from './components/statsSection/StatsPercentageSection';
import SportifGrid from './components/sportifGrid/SportifGrid';
import Footer from './components/footer/Footer';
import CenteredPicturePhraseText from './components/centeredPicturePhraseText/CenteredPicturePhraseText';
import BigTitleTwoColumns from './components/bigTitleTwoColumns/BigTitleTwoColumns';
import ThreePicturesTitle from './components/threePicturesTitle/ThreePicturesTitle';


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

const statsData = [
  { label: "Athletes", count: 16170, link: "/athlete", icon: '/icons/running.png' },
  { label: "Teams & Clubs", count: 13103, link: "/clubs", icon: '/icons/group.png' },
  { label: "Associations", count: 1093, link: "/associations", icon: '/icons/users-linked.png' },
  { label: "Sponsors", count: 5672, link: "/sponsor", icon: '/icons/sponsor.png' },
  //{ label: "Football", count: 6100, percentage: 75, link: "/sports/football-soccer" },
  //{ label: "Motor Sports", count: 2700, percentage: 45, link: "/sports/motor-sports" },
  //{ label: "eSports", count: 1500, percentage: 30, link: "/sports/esports" },
  //{ label: "Other", count: 21500, percentage: 95, link: "/sports/other" }
];

const statsPercentageData = [
  { label: "Football", count: 6100, percentage: 75, link: "/sports/football-soccer" },
  { label: "Motor Sports", count: 2700, percentage: 45, link: "/sports/motor-sports" },
  { label: "eSports", count: 1500, percentage: 30, link: "/sports/esports" },
  { label: "Other", count: 21500, percentage: 95, link: "/sports/other" }
];

const sportifs = [
  {
    name: 'Camille Dubois',
    sport: 'Natation synchronisée',
    image: '/images/cpsFour.webp',
    showButton: true,
    onClick: () => alert('Voir plus sur Camille'),
  },
  {
    name: 'Léo Martin',
    sport: 'Basketball',
    image: '/images/cpsTwo.webp',
    showButton: true,
    onClick: () => alert('Voir plus sur Léo'),
  },
  {
    name: 'Thomas Ramos',
    sport: 'Rugby',
    image: '/images/cpsFive.webp',
    showButton: true,
    onClick: () => alert('Voir plus sur Léo'),

  },
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

      <StatsSection
        title="Nos chiffres clés"
        stats={statsData}
        theme="dark" // or "light"
      />

      <FlyingText
        title="Des partenariats uniques et performants"
        description="Chez Papy Sponso, nous créons des liens uniques et puissants entre ambassadeurs et marques. Nous transformons chaque partenariat en une opportunité de succès inégalé."
        imageUrl='./images/heroSection.webp'
        backgroundColor="#000000"
        textColor="#ffffff"
        titleColor="#999999"
        buttonColor='#FFD700'
        showButton={true}
        buttonText="Découvrez plus"
        onButtonClick={() => alert('Bouton cliqué !')} />

      <StatsPercentageSection
        title="Répartition par sport"
        stats={statsPercentageData}
        theme="dark"
      />

      {/* <DiagonalComponent
        imageUrl='./images/heroSection.webp'
        phrase="Push Beyond the Limits"
        theme="dark"
        height="60vh"
      /> */}



      <FlyingTextVideo
        title="Regardez notre histoire"
        description="Chez Papy Sponso, nous créons des liens puissants entre ambassadeurs et marques. Regardez comment."
        imageUrl="/images/video-cover.jpg"
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        backgroundColor="#000000"
        textColor="#ffffff"
        titleColor="#999999"
        buttonColor='#FFD700'
        showButton
        buttonText="En savoir plus"
        onButtonClick={() => alert("CTA clicked")}
      />


      <SportifGrid title="Nos Sportifs" sportifs={sportifs} theme="dark" />

      <CenteredPicturePhraseText
  imageUrl="/images/cpsFive.webp"
  imageHeight="800px"
  imageWidth="480px"
  phrase="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  details="Thomas Ramos, A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  buttonText="Nous contacter"
  onButtonClick={() => alert('Profil de Thomas Ramos')}
/>

<BigTitleTwoColumns
  eyebrow="NOTRE VISION"
  title="Construire des ponts entre les marques et les sportifs"
  leftText="Chez Papy Sponso, nous croyons que chaque athlète mérite d’être soutenu. Nous nous engageons à créer des connexions authentiques et durables entre les talents du sport amateur et les marques engagées. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  rightText="Notre objectif est de valoriser les efforts, les parcours et les passions. Grâce à notre plateforme, nous facilitons des collaborations où chacun trouve une voix, une visibilité, et un avenir plus prometteur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  buttonText="Rejoignez-nous"
  onButtonClick={() => alert('Clique sur le bouton !')}
  theme="dark"          // or "light"
  showButton={true}     // or false
/>

<ThreePicturesTitle
  mainImage="/images/cpsSix.webp"
  topTitle="ATHLETES"
  bottomTitle="Ensemble, vers la victoire"
  sideImageOne="/images/cpsEight.webp"
  sideImageTwo="/images/cpsTwo.webp"
  imageOnLeft={true}
  titleAboveImages={true}
  theme="dark"
/>

      <Footer
  companyName="CHEZ PAPY SPONSO"
  links={[
    { label: 'Mentions légales', href: '/legal' },
    { label: 'Politique de confidentialité', href: '/privacy' },
    { label: 'Cookies', href: '/cookies' },
  ]}
  social={{
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/',
  }}
/>
      {/* <main>
        <section id="presentation">...</section>
        <section id="sportifs">...</section>
        <section id="influenceurs">...</section>
        <section id="collabs">...</section>
        <section id="contact">...</section>
      </main> */}
    </div>
  );
}

export default App;
