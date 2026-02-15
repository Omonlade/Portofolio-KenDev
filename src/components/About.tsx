import Title from "./Title";
import img from "../assets/ken2.jpeg";
import {AlignEndHorizontal,TableProperties } from "lucide-react";

const about = [
  {
    id: 1,
    title: "Mon Parcours ",
    description: "Diplômé d'un baccalauréat Scientifique Serie D (2020 - 2021), Mon choix d'études s'est porté vers l'informatique et la programmation, un domaine qui me passionnait depuis mon enfance. Je me suis donc inscrit à l'ESCAE (Ecole Supérieure du Commerce et d'Administration des Entreprises) pour obtenir une licence professionnelle en Systèmes d'Informatique et logiciels (SIL). J'ai également suivi une formation professionnelle en Développement Web (Citech Sarl) et un stage académique en Développement Web & Mobile (Taka Teck Innov). Ce qui m'a permis d'obtenir mon diplôme de licence professionnelle en Systèmes d'Informatique et logiciels (SIL) avec une mention très bien pour mon projet KidSpakLabs.",
    icons: <AlignEndHorizontal className="text-accent scale-150" />,
    // link : "https://kenneth-dev.github.io/cv/"
  },
  {
    id: 2,
    title: "Mes Objectifs",
    description: "Alliant expertise technique et créativité, j'accompagne les entreprises à donner vie à leurs projets digitaux. Chaque solution place l'expérience utilisateur au cœur du design pour des produits qui convertissent et fidélisent.",
    icons: <TableProperties  className="text-accent scale-150" />,
    // link : "https://kenneth-dev.github.io/cv/experiences/"
  },
  // {
  //   id: 3,
  //   title: "Mes projets",
  //   description: "J'ai développé plusieurs projets en tant que développeur web",
  //   icons: <Paintbrush className="text-accent scale-150" />,
  //   // link : "https://kenneth-dev.github.io/cv/projects/"
  // },
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
              <div className="md:ml-4 text-center md:text-left w-full">
                <div className="flex gap-2 items-center justify-center md:justify-start mb-2">
                  <div>{section.icons}</div>
                  <h2 className="text-xl font-bold">{section.title}</h2>
                </div>
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
