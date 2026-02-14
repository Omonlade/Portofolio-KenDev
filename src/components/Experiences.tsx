import Title from "./Title";
import imageHtml from "../assets/techno/html.png";
import imageCss from "../assets/techno/css.png";
import imagePhp from "../assets/techno/php.png";
import imageJs from "../assets/techno/js.png";
import imageSymfony from "../assets/techno/symfony.png";
import imageMySql from "../assets/techno/mysql.png";
import imageReact from "../assets/techno/react.png";
import imageGithub from "../assets/techno/github.png";
import imageCanva from "../assets/techno/canva.jpeg";


// import google from "../assets/google.png"
// import amazon from "../assets/amazon.png"
import XodoEvents_weloveya from "../assets/companies/XodoEvents_weloveya.png";
import TakaTechInnov from "../assets/companies/TakaTechInnov.jpeg";
import CitechSarl from "../assets/companies/CitechSarl.jpeg";
import ESCAE from "../assets/companies/ESCAE.png";
import E4afrika from "../assets/companies/e4afrika.jpeg";
import LePremier from "../assets/companies/LePremier.jpeg";
const skills = [
  { id: 1, name: "HTML", image: imageHtml },
  { id: 2, name: "CSS", image: imageCss },
  { id: 3, name: "PHP", image: imagePhp },
  { id: 4, name: "JAVASCRIPT", image: imageJs },
  { id: 5, name: "MySQL", image: imageMySql },
  { id: 6, name: "GITHUB", image: imageGithub },
  { id: 7, name: "SYMFONY", image: imageSymfony },
  { id: 8, name: "REACT", image: imageReact },
  {id:9, name:"CANVA" , image:imageCanva}
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
      "Afin de concretiser mes connaissances en programmation, J'ai travaillé sur un projets web et mobile pour Taka Teck Innov, une entreprise Spécialisée dans la formation en Electronique et Programmation. Le projet consistait à fournir une solution pouvant permettre aux apprenants de s'initier à l'electronics et à la programmation à travers des cours en ligne et des exercies.",
    images: TakaTechInnov,
  },
  {
    id: 4,
    role: "Formation Professionnelle en Développeur web ",
    company: "E4afrika",
    period: " Fevrier 2024 -novembre 2024",
    description: "Apprentisage des concepts clés du développement web (back-end) avec le framework symfony.",
    images: E4afrika,
  },
  {
    id: 4,
    role: "Développeur web ",
    company: "XoboEvents",
    period: " Fevrier 2025",
    description: "Conception d'une application web de billeterie pour l'évènement Weloveya pour la gestion des tickets et packs. Cette application permettait aux utilisateurs de s'inscrire à l'évènement, de choisir leurs places et de payer leur billet en ligne.",
    images: XodoEvents_weloveya,
  },
  {
    id: 5,
    role:"Développeur web",
    company: "LePremier",
    period: " Decembre 2025 - Fevrier 2026",
    description: "Developpement d'une application web pour la plateforme LePremier, une plateforme de location de voitures, d'appartements, de billets et de tickets d'évènements en Afrique de l'Ouest Francophone. J'était chargé de la refonte de la plateforme web et de l'integration de nouvelle module comme la gestion des Évènement et la gestion des tickets d'évènements.",
    images: LePremier,
  }
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
