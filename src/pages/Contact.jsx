import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import FAQSection from "../components/Contact/FAQSection";
import QuickContactCards from "../components/Contact/QuickContactCards";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ContactForm />
        <QuickContactCards />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}