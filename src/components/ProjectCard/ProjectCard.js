import "./style.css";

function ProjectCard({ project }) {
    return (
        <div className="col-md-6 col-lg-6 col-xl-4 overlay-img">
            <img className="cropped"
                src={project.screenshot}
                alt={project.alt}
            />

            <div className="overlay">
                <div className="overlay-text">
                    <a href={project.url} style={{ color: "white" }}>
                        {project.description}
                    </a>
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;