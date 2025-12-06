import Title from "./Title";
import img from "../assets/ken2.jpeg";
import { Download, CalendarSync, Paintbrush } from "lucide-react";

const about = [
  {
    id: 1,
    title: "Mon CV",
    description: "J'ai un CV à jour, je vous invite à le consulter",
    icons: <Download className="text-accent scale-150" />,
    // link : "https://kenneth-dev.github.io/cv/"
  },
  {
    id: 2,
    title: "Mes expériences",
    description: "J'ai une expérience de 5 ans en développement web",
    icons: <CalendarSync className="text-accent scale-150" />,
    // link : "https://kenneth-dev.github.io/cv/experiences/"
  },
  {
    id: 3,
    title: "Mes projets",
    description: "J'ai développé plusieurs projets en tant que développeur web",
    icons: <Paintbrush className="text-accent scale-150" />,
    // link : "https://kenneth-dev.github.io/cv/projects/"
  },
];
const About = () => {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
      <Title title="A propos " />
      <div className="md:h-screen flex justify-center items-center">
        <div className="hidden md:block">
          <img src={img} alt="images" className="w-96 object-cover rounded-xl" />
        </div>
        <div className="md:ml-4 space-y-4">
          {about.map((section) => (
            <div className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl" key={section.id}>
              <div className="mb-2 md:mb-0">{section.icons}</div>
              <div className="md:ml-4 text-center md:text-left">
                <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                <p className="text-sm">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
