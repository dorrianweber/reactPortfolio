import projects from "../projects.json";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function Portfolio() {
    return (
        <section className="container">

            <header className="row">
                <h1 className="center-mobile">Portfolio</h1>
            </header>

            <hr className="solid" />

            <section className="portfolioImages">

                <section className="row">
                    {projects.map(project => (
                        <ProjectCard project={project} key={project.id} />
                    ))}
                </section>
            </section>
        </section>
    );
};

export default Portfolio;