import Title from "./Title";
import img1 from "../assets/projects/dashboard.png";
import LePremier from "../assets/projects/LePremier.png";
import { Github, Video } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Tableau de bord Administrateur KidSparkLabs",
    description: "Une application web de gestion des apprenants et des cours en electronique ( KidSparkLabs )",
    technologies: ["Symfony", "Bootstrap", "Chart.js", "MySQL"],
    demoLink: "",
    githubLink: "https://github.com/Omonlade/Application-Educative.git",
    images: img1,
  },
  {
    id: 2,
    title: "Developpement Web frontend de LePremier",
    description: "Plateforme de gestion d’appartements, de voitures, de billets et de tickets d’évènement en Afrique de l’Ouest Francophone.",
    technologies: ["Next.js", "Node.js", "Tailwind CSS", "MySQL"],
    demoLink: "https://lepremier.net/",
    githubLink: "https://github.com/LePremier-dev/LePremier-Web.git",
    images: LePremier,
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
            <div className="relative">
              <img
                src={project.images}
                alt={project.title}
                className="w-full h-full rounded-xl cursor-pointer"
                onClick={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  const modal = document.createElement("div");
                  modal.className =
                    "fixed z-10 inset-0 w-full h-full bg-black bg-opacity-50";
                  const img = document.createElement("img");
                  img.src = target.src;
                  img.className = "m-auto max-w-[90vw] max-h-[90vh] mt-10";
                  modal.appendChild(img);
                  document.body.appendChild(modal);
                  modal.addEventListener("click", () => {
                    modal.remove();
                  });
                }}
              />
            </div>
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
                <a href={project.demoLink} className="btn btn-accent w-2/3">
                  {project.demoLink === "" ? "Offline" : "Demo"}
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
