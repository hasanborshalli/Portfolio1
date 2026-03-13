import SectionTitle from "./SectionTitle";
import services from "../data/services";

export default function ServicesPreview() {
    return (
        <section className="section">
            <div className="container">
                <SectionTitle
                    eyebrow="Our Services"
                    title="Solutions Designed For Modern Businesses"
                    text="A clean way to present what the business offers and how it helps clients."
                />

                <div className="card-grid">
                    {services.map((service) => (
                        <article className="info-card" key={service.id}>
                            <div className="info-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
