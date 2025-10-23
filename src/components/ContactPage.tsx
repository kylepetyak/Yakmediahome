import { ContactHero } from './ContactHero';
import { ContactForm } from './ContactForm';

export function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactForm />
    </div>
  );
}