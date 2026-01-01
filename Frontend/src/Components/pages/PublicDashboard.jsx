import About from "../public pages/About.jsx";
import Contact from "../public pages/Contact.jsx";
import FAQ from "../public pages/FAQ.jsx";
import Footer from "../public pages/Footer.jsx";
import Hero from "../public pages/Hero.jsx";
import Navbar from "../public pages/NavBar.jsx";
import Services from "../public pages/Services.jsx";


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
