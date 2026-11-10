import { Suspense } from "react";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <Suspense fallback={<main className="px-4 py-16 text-center">Chargement du formulaire…</main>}>
      <ContactForm />
    </Suspense>
  );
}
