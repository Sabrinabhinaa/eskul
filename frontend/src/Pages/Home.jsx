import LandingSection from "../components/Landing/LandingSection";
import AboutSection from "../components/AboutSection/AboutSection";
import CTASection from "../components/CTASection/CTASection";
import EskulSection from "../components/Eskul/EskulSection";


function Home() {
  return (
    <>
      <LandingSection id="beranda" />
      <AboutSection id="tentang" />
      <EskulSection id="eskul" />
      <CTASection id="kontak" />
    </>
  );
}

export default Home;