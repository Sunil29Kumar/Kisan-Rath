import About from "../public pages/About";
import Contact from "../public pages/Contact";
import FAQ from "../public pages/FAQ";
import Footer from "../public pages/Footer";
import Hero from "../public pages/Hero";
import Navbar from "../public pages/NavBar";
import Services from "../public pages/Services";


const PublicDashboard = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <FAQ />
            <Contact />
            <Footer />
        </>
    );
};

export default PublicDashboard;
