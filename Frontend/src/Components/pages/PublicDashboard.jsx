import About from "../PublicPages/About.jsx";
import Contact from "../PublicPages/Contact.jsx";
import FAQ from "../PublicPages/FAQ.jsx";
import Footer from "../PublicPages/Footer.jsx";
import Hero from "../PublicPages/Hero.jsx";
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
