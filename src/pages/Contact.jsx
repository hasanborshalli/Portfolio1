import site from "../data/site";

export default function Contact() {
    return (
        <section className="page-section">
            <div className="container contact-grid">
                <div>
                    <span className="eyebrow">Contact</span>
                    <h1>Let’s Talk About Your Business</h1>
                    <p>
                        This template uses a static contact form layout. You can
                        later connect it to EmailJS, Formspree, Web3Forms, or a
                        custom backend if needed.
                    </p>

                    <div className="contact-info">
                        <p>
                            <strong>Email:</strong> {site.email}
                        </p>
                        <p>
                            <strong>Phone:</strong> {site.phone}
                        </p>
                        <p>
                            <strong>Address:</strong> {site.address}
                        </p>
                    </div>
                </div>

                <form className="contact-form">
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="text" placeholder="Subject" />
                    <textarea rows="6" placeholder="Message"></textarea>
                    <button type="button" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
