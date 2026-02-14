import Title from "./Title";
import imageHtml from "../assets/techno/html.png";
import imageCss from "../assets/techno/css.png";
import imagePhp from "../assets/techno/php.png";
import imageJs from "../assets/techno/js.png";
import imageSymfony from "../assets/techno/symfony.png";
import imageMySql from "../assets/techno/mysql.png";
import imageReact from "../assets/techno/react.png";
import imageGithub from "../assets/techno/github.png";

// import google from "../assets/google.png"
// import amazon from "../assets/amazon.png"
import XodoEvents_weloveya from "../assets/companies/XodoEvents_weloveya.png";
import TakaTechInnov from "../assets/companies/TakaTechInnov.jpeg";
import CitechSarl from "../assets/companies/CitechSarl.jpeg";
import ESCAE from "../assets/companies/ESCAE.png";
import E4afrika from "../assets/companies/e4afrika.jpeg";
const skills = [
  { id: 1, name: "HTML", image: imageHtml },
  { id: 2, name: "CSS", image: imageCss },
  { id: 3, name: "PHP", image: imagePhp },
  { id: 4, name: "GITHUB", image: imageGithub },
  { id: 5, name: "JAVASCRIPT", image: imageJs },
  { id: 6, name: "MySQL", image: imageMySql },
  { id: 7, name: "SYMFONY", image: imageSymfony },
  { id: 8, name: "REACT", image: imageReact },
];

const experiences = [
  {
    id: 1,
    role: "Licence Professionnelle en Systèmes d'Informatique et logiciels (SIL)",
    company: "ESCAE",
    period: "septembre 2022 - juin 2024",
    description:
      "Apprentissage des différents langages de programmation et des différentes technologies de l'informatique.",
    images: ESCAE,
  },
  {
    id: 2,
    role: "Développeur web, mobile & graphisme",
    company: "Citech Sarl",
    period: "juin 2023 - Aout 2023",
    description:
      "Formation Professtionelle et pratique en Developpement Web, Mobile et Graphisme.",
    images: CitechSarl,
  },
  {
    id: 3,
    role: "Stage Académique en Développeur web & mobile",
    company: "Taka Teck Innov",
    period: "Mars 2024 - juin 2025",
    description:
      "Afin de concretiser mes connaissances en programmation, J'ai travaillé sur un projets web et mobile pour Taka Teck Innov, une entreprise de l'industrie de l'electronique qui consistait à fournir une solution pouvant permettre aux apprenants de s'initier à l'electronics et à la programmation.",

    images: TakaTechInnov,
  },
  {
    id: 4,
    role: "Formation Professionnelle en Développeur web ",
    company: "E4afrika",
    period: " Fevrier 2024 -novembre 2024",
    description: "Apprentisage des concepts clés de la développement web plus precisement back-end avec le framework symfony.",
    images: E4afrika,
  },
  {
    id: 4,
    role: "Développeur web ",
    company: "XoboEvents",
    period: " Fevrier 2025",
    description: "Une application web de billeterie pour l'évènement Weloveya",
    images: XodoEvents_weloveya,
  },
];

const Experiences = () => {
  return (
    <div id="Experiences">
      <Title title="Formations & Expériences" />
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex justify-center items-center flex-col  "
            >
              <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                <img
                  className="object-cover rounded-full h-full w-full"
                  src={skill.image}
                  alt={skill.name}
                />
              </div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="md:ml-4 flex flex-col space-y-4">
          {experiences.map((experiences) => (
            <div
              key={experiences.id}
              className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
            >
              <div className="flex items-center">
                <img
                  className="object-cover w-16 h-16 rounded-full"
                  src={experiences.images}
                  alt={experiences.company}
                />
                <div className="ml-4">
                  <h1 className="ext-xl text-accent font-bold">
                    {experiences.role} , {experiences.company}
                  </h1>
                  <span className="text-sm">{experiences.period}</span>
                </div>
              </div>
              <ul className="list-disc ml-16 mt-2">
                {experiences.description.split("\n").map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
