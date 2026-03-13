import { Link } from "react-router-dom";

export default function CTA() {
    return (
        <section className="section">
            <div className="container">
                <div className="cta-box">
                    <h2>Start Your Next Project With Confidence</h2>
                    <p>
                        Present your business professionally with a clean
                        website structure built to inspire trust.
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
