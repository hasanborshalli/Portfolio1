import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview";
import PortfolioPreview from "../components/PortfolioPreview";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";
import site from "../data/site";

export default function Home() {
    return (
        <>
            <Hero />

            <section className="section">
                <div className="container split-grid">
                    <div>
                        <span className="eyebrow">About Us</span>
                        <h2>
                            Professional Presentation For Serious Businesses
                        </h2>
                        <p>{site.aboutPreview}</p>
                        <Link to="/about" className="btn btn-secondary">
                            Learn More
                        </Link>
                    </div>

                    <div className="about-preview-image">
                        <img
                            src="/src/assets/images/about.jpg"
                            alt="About business"
                        />
                    </div>
                </div>
            </section>

            <ServicesPreview />
            <PortfolioPreview />
            <Stats />
            <Testimonials />
            <CTA />
        </>
    );
}
