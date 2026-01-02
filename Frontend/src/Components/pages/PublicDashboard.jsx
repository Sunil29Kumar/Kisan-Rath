import About from "../PublicPages/About.jsx";
import Contact from "../PublicPages/Contact.jsx";
import FAQ from "../PublicPages/FAQ.jsx";
import Footer from "../PublicPages/Footer.jsx";
import Hero from "../PublicPages/Hero.jsx";
import Navbar from "../PublicPages/Navbar.jsx";
import Services from "../PublicPages/Services.jsx";


// const PublicDashboard = () => {
//     return (
//         <>
//             <Navbar />
//             <Hero />
//             <About />
//             <Services />
//             <FAQ />
//             <Contact />
//             <Footer />
//         </>
//     );
// };


const PublicDashboard = () => {
    return (
        <>
            <Navbar />
            <div id="home"><Hero /></div>
            <div id="about"><About /></div>
            <div id="services"><Services /></div>
            <div id="faq"><FAQ /></div>
            <div id="contact"><Contact /></div>
            <Footer />
        </>
    );
};
export default PublicDashboard;
