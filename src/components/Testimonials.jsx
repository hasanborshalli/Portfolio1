import SectionTitle from "./SectionTitle";
import testimonials from "../data/testimonials";

export default function Testimonials() {
    return (
        <section className="section">
            <div className="container">
                <SectionTitle
                    eyebrow="Testimonials"
                    title="What Clients Say"
                    text="Trust-building feedback for stronger credibility."
                />

                <div className="card-grid">
                    {testimonials.map((item) => (
                        <article className="testimonial-card" key={item.id}>
                            <p className="quote">“{item.quote}”</p>
                            <h4>{item.name}</h4>
                            <span>{item.company}</span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
