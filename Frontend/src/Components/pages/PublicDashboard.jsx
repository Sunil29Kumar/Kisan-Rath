import About from "../PublicPages/About.js";
import Contact from "../PublicPages/Contact.js";
import FAQ from "../PublicPages/FAQ.js";
import Footer from "../PublicPages/Footer.js";
import Hero from "../PublicPages/Hero.js";
import Navbar from "../PublicPages/NavBar.jsx";
import Services from "../PublicPages/Services.jsx";


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
