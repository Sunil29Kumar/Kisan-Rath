import About from "../public/About";
import Contact from "../public/Contact";
import FAQ from "../public/FAQ";
import Footer from "../public/Footer";
import Hero from "../public/Hero";
import Navbar from "../public/NavBar";
import Services from "../public/Services";


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
