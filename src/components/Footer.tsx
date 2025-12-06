import { Terminal } from "lucide-react";

const footer = () => {
  return (
    <footer className="footer footer-center p-10">
      <aside>
        <Terminal className="w-10 h-10" />
        <p className="font-bold">
          KEN<span className="text-accent">DEV</span>
        </p>
        <p>Copyright © {new Date().getFullYear()} - Tout les droits réservés</p>
      </aside>
      <nav>
        {/* <div className="grid grid-flow-col gap-4">
          <a href="" target="_blank" rel="noopener noreferrer">
            <Mail className="w-6 h-6 text-current" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-6 h-6 text-current"/>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 text-current" />
          </a>
        </div> */}
      </nav>
    </footer>
  );
};

export default footer;
