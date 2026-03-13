import services from "../data/services";

export default function ServicesPage() {
    return (
        <section className="page-section">
            <div className="container">
                <span className="eyebrow">Services</span>
                <h1>Our Services</h1>

                <div className="card-grid top-space">
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
