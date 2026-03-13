import stats from "../data/stats";

export default function Stats() {
    return (
        <section className="section stats-section">
            <div className="container stats-grid">
                {stats.map((item) => (
                    <div className="stat-box" key={item.id}>
                        <h3>{item.value}</h3>
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
