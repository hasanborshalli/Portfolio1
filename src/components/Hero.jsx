import { Link } from "react-router-dom";
import site from "../data/site";

export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-grid">
                <div className="hero-content">
                    <span className="eyebrow">
                        Professional Portfolio Template
                    </span>
                    <h1>{site.heroTitle}</h1>
                    <p>{site.heroDescription}</p>
                    <div className="hero-actions">
                        <Link to="/contact" className="btn btn-primary">
                            {site.ctaText}
                        </Link>
                        <Link to="/portfolio" className="btn btn-secondary">
                            View Work
                        </Link>
                    </div>
                </div>

                <div className="hero-card">
                    <img src="/images/hero.jpg" alt="Business portfolio hero" />
                </div>
            </div>
        </section>
    );
}
