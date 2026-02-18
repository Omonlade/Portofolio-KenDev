import Title from "./Title";
import { Send, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { useState } from "react";

// Modifiez ces informations avec vos coordonnées
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "almeidakenneth250@gmail.com",
    href: "mailto:almeidakenneth250@gmail.com"
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+229 0153733705",
    href: "tel:+2290153733705",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Abomey-Calavi, Bénin",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Mon profil",
    href: "https://www.linkedin.com/in/kennett-dalmeida-255a112b2/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Mon profil",
    href: "https://github.com/Omonlade/",
  },
];

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "5b68d169-a914-4408-88ba-3682a216fc75");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(
      data.success
        ? "Votre message a été envoyé avec succès !"
        : "Une erreur est survenue. Veuillez réessayer."
    );
  };

  return (
    <div
      className="bg-gradient-to-br from-base-300 via-base-200 to-base-300 mt-10 px-4 py-10 mb-5 md:mb-32"
      id="Contact"
    >
      <Title title="Contact" />
      <p className="text-center text-base-content/80 mb-8 max-w-xl mx-auto">
        Une question ou un projet ? Envoyez-moi un message ou contactez-moi directement.
      </p>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start max-w-4xl mx-auto bg-base-100/80 rounded-2xl p-6 md:p-8 shadow-2xl border border-base-200">
        {/* Informations de contact */}
        <div className="w-full lg:w-80 shrink-0 bg-base-200/80 rounded-xl p-6 shadow-md">
          <h3 className="font-bold text-lg mb-1 text-accent">Me contacter</h3>
          <p className="text-sm text-base-content/70 mb-4">
            Je réponds rapidement par e-mail et sur LinkedIn.
          </p>
          <ul className="space-y-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-base-300">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-sm text-base-content/60 block">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-base-content font-medium hover:text-accent break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-base-content font-medium">{item.value}</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Formulaire */}
        <form onSubmit={onSubmit} className="flex flex-col space-y-4 flex-1 w-full">
          <label className="block">
            <input
              type="text"
              name="name"
              placeholder="Nom"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="block">
            <input
              type="email"
              name="email"
              placeholder="Adresse e-mail"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="block">
            <textarea
              name="message"
              placeholder="Message"
              className="textarea textarea-bordered w-full h-40"
              required
            />
          </label>
          <div className="flex justify-center">
            <button type="submit" className="btn btn-accent gap-2">
              <Send className="w-4 h-4" />
              Envoyer
            </button>
          </div>
        </form>
      </div>

      {result && (
        <p className="text-sm text-accent text-center mt-5">{result}</p>
      )}
    </div>
  );
}
