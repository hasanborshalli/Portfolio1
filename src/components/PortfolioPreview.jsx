import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import projects from "../data/projects";

export default function PortfolioPreview() {
    return (
        <section className="section section-soft">
            <div className="container">
                <SectionTitle
                    eyebrow="Portfolio"
                    title="Selected Work"
                    text="Showcase real projects in a professional and organized way."
                />

                <div className="project-grid">
                    {projects.slice(0, 3).map((project) => (
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
