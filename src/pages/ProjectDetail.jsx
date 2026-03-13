import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((item) => item.id === id);

    if (!project) {
        return (
            <section className="page-section">
                <div className="container narrow">
                    <h1>Project Not Found</h1>
                    <Link to="/portfolio" className="btn btn-primary">
                        Back to Portfolio
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="page-section">
            <div className="container narrow">
                <span className="eyebrow">{project.category}</span>
                <h1>{project.title}</h1>
                <img
                    className="detail-image"
                    src={project.image}
                    alt={project.title}
                />
                <p className="top-space">{project.description}</p>
                <Link
                    to="/portfolio"
                    className="btn btn-secondary top-space-inline"
                >
                    Back to Portfolio
                </Link>
            </div>
        </section>
    );
}
