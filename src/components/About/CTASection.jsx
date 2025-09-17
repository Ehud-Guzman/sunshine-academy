import { Link } from "react-router-dom";

export default function CTASection({ text, link }) {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-[#002B5B] to-[#001F3B] text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{text}</h2>
      <Link
        to={link}
        className="bg-[#FFD700] text-[#002B5B] px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform"
      >
        Apply Now
      </Link>
    </section>
  );
}
