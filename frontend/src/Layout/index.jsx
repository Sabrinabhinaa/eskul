import Container from "../components/Container";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/header";
import LandingSection from "../components/Landing/LandingSection";
import AboutSection from "../components/AboutSection/AboutSection";
import CTASection from "../components/CTASection/CTASection";

function Layout({ children }) {
    return (
        <>
            <Header />
            <LandingSection />
            <AboutSection />
            <CTASection />    
            <Footer />
        </>
    );
}

export default Layout;
