import { FileUser } from "lucide-react";
import img from "../assets/ken1.jpeg";

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10" id="Home">
      <div className="flex flex-col w-full md:w-1/2 px-5">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          Bienvenu(e)
          <br /> je suis <span className="text-accent">Kendev</span>
        </h1>
        <p className="my-4 text-md text-center md:text-left">
          Developpeur fullstack passionné ,je concois des solutions web modernes et efficaces,
           alliant performance et simplicité pour les utilisateurs.
        </p>
        <a href="cv/Kenneth.pdf" className="btn btn-accent md:w-fit" download>
          <FileUser className="w-5 h-5" />
          Mon CV
        </a>
      </div>
      <div className="md:ml-60">
        <img src={img} alt="" className="w-96 h-96 object-cover border-8 border-accent shadow-xl" style={{ borderRadius: "50% 50% 30% 30% / 30% 50% 20% 40%" }} />
      </div>
    </div>
  );
};

export default Home;
