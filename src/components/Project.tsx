import Title from "./Title";
import img1 from "../assets/projects/dashboard.png";
import { Github, Video } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Dashboard Admin KidSparkLabs",
    description: "Dashboard Admin pour une application éducative pour enfants.",
    technologies: ["Symfony", "Bootstrap", "Chart.js", "MySQL"],
    demoLink: "#",
    githubLink: "#",
    images: img1,
  },
];
const Project = () => {
  return (
    <div className="mt-10" id="Project">
      <Title title="Mes Projets" />
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-base-300 p-5 h-fit rounded-xl shadow-lg"
          >
            <img
              className="w-full rounded-xl h-56 object-cover"
              src={project.images}
              alt={project.title}
            />
            <div className="">
              <h1 className="my-2 font-bold">{project.title}</h1>
              <p className="text-sm">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 my-2">
              {project.technologies.map((tech) => (
                <span className="badge badge-accent badge-sm">{tech}</span>
              ))}
            </div>
            <div className="flex">
                <a href={project.demoLink} className="btn btn-accent w-2/3">Demo
                    <Video className="w-4"/>
                </a>
                <a href={project.githubLink} className="btn btn-neutral w-1/3 ml-2">
                    <Github className="w-4"/>
                </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
