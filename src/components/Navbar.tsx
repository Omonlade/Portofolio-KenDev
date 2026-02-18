import { useState } from "react";
import { Terminal, FileUser, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#Home", label: "Accueil" },
  { href: "#About", label: "A propos" },
  { href: "#Experiences", label: "Mes expériences" },
  { href: "#Visuels", label: "Mes visuels" },
  { href: "#Project", label: "Mes Projets" },
  { href: "#Contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-40 bg-base-100/95 backdrop-blur-sm border-b border-base-300">
      <div className="flex justify-between md:justify-center md:gap-4 items-center p-4 w-full">
        <a
          href="#Home"
          className="flex items-center font-bold text-2xl sm:text-3xl md:text-xl shrink-0"
          onClick={closeMenu}
        >
          <Terminal className="mr-2 w-8 h-8 sm:w-9 sm:h-9 md:w-5 md:h-5" />
          KEN<span className="text-accent">DEV</span>
        </a>

        {/* Liens desktop */}
        <ul className="hidden md:flex flex-wrap justify-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a className="btn btn-sm btn-ghost" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center shrink-0">
          <a
            href="/cv/CurriculumVitae-D%27AMEIDA-kennett.pdf"
            className="btn btn-accent btn-sm"
            download
          >
            <FileUser className="w-4 h-4" />
            Mon CV
          </a>
        </div>

        {/* Bouton menu mobile */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="/cv/CurriculumVitae-D%27AMEIDA-kennett.pdf"
            className="btn btn-accent btn-sm"
            download
          >
            <FileUser className="w-4 h-4" />
            <span className="hidden min-[420px]:inline ml-1">CV</span>
          </a>
          <button
            type="button"
            className="btn btn-ghost btn-square"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-base-300 bg-base-100 py-2 px-4 shadow-lg"
          role="dialog"
          aria-label="Menu de navigation"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="btn btn-ghost btn-block justify-start"
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
