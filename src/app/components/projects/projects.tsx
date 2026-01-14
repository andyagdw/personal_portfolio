// Components
import ProjectCarousel from "../carousel/carousel";

export default function Projects() {
  return (
    <section
      aria-labelledby="projects"
      className="pt-10 pb-20 bg-(--smart-blue)"
    >
      <div className="max-w-(--max-width) mx-auto px-4">
        <h2 id="projects" className="mb-20">
          Projects
        </h2>
        <ProjectCarousel />
      </div>
    </section>
  );
}
