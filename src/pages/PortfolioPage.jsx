import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function PortfolioPage() {
    return (
        <section className="page-section">
            <div className="container">
                <span className="eyebrow">Portfolio</span>
                <h1>Our Projects</h1>

                <div className="project-grid top-space">
                    {projects.map((project) => (
                        <article className="project-card" key={project.id}>
                            <img src={project.image} alt={project.title} />
                            <div className="project-card-body">
                                <span className="project-category">
                                    {project.category}
                                </span>
                                <h3>{project.title}</h3>
                                <p>{project.summary}</p>
                                <Link
                                    to={`/portfolio/${project.id}`}
                                    className="text-link"
                                >
                                    View Project
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
