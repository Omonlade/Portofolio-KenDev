import Title from "./Title";
import { Send } from "lucide-react";
import { useState } from "react";

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
    <div className="bg-base-300 mt-10 p-10 mb-5 md:mb-32" id="Contact">
      <Title title="Contact" />
      <form onSubmit={onSubmit} className="flex flex-col space-y-4">
        <label className="flex items-center space-x-4">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            className="border border-gray-300 rounded-lg p-2 w-full"
            required
          />
        </label>
        <label className="flex items-center space-x-4">
          <input
            type="email"
            name="email"
            placeholder="Adresse e-mail"
            className="border border-gray-300 rounded-lg p-2 w-full"
            required
          />
        </label>
        <label className="flex items-center space-x-4">
          <textarea
            name="message"
            placeholder="Message"
            className="border border-gray-300 rounded-lg p-2 w-full h-40"
            required
          />
        </label>
        <div className="flex justify-center">
          <button type="submit" className="btn btn-accent ">
            Envoyer
            <Send className="w-4" />
          </button>
        </div>
      </form>
      {result && (
        <p className="text-sm text-accent text-center mt-5">{result}</p>
      )}
    </div>
  );
}
