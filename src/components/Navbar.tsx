import { Terminal, FileUser } from "lucide-react";

const Navbar = () => {
  return (
    <div className=" flex justify-center md:justify-between items-center pd-4">
      <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
        <Terminal className="mr-2" />
        KEN<span className="text-accent">DEV</span>
      </a>
      <ul className="hidden md:flex space-x-4">
        <li><a  className="btn btn-sm btn-ghost" href="#Home">Acceuil</a></li>
        <li><a  className="btn btn-sm btn-ghost" href="#About">A propos</a></li>
        <li><a  className="btn btn-sm btn-ghost" href="#Experiences">Mes expériences</a></li>
        <li><a  className="btn btn-sm btn-ghost" href="#Project">Mes Projets</a></li>
        <li><a  className="btn btn-sm btn-ghost" href="#Contact">Contact</a></li>
      </ul>
      <div className="hidden md:block"><a href="cv/Kenneth.pdf" className="btn btn-accent md:w-fit" download>
          <FileUser className="w-5 h-5" />
          Mon CV
        </a></div>
    </div>
  );
};

export default Navbar;
