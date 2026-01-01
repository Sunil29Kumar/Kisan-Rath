import About from "../Components/public/About";
import Contact from "../Components/public/Contact";
import FAQ from "../Components/public/FAQ";
import Footer from "../Components/public/Footer";
import Hero from "../Components/public/Hero";
import Navbar from "../Components/public/NavBar";
import Services from "../Components/public/Services";


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
