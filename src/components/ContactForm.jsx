import { useContext, useState } from "react";
import { TierContext } from "../context/TierContext";

export default function ContactForm() {
  const { currentTier } = useContext(TierContext);
  const f = currentTier?.features || {};
  if (!f.contact?.enabled) return null;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); alert("Message sent!"); setForm({ name: "", email: "", message: "" }); }

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#002B5B] mb-12">Contact Us</h2>
        <form className="bg-white p-8 rounded shadow space-y-6" onSubmit={handleSubmit}>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="w-full p-3 border rounded" />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-3 border rounded" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" className="w-full p-3 border rounded"></textarea>
          <button type="submit" className="px-6 py-3 bg-[#002B5B] text-white rounded hover:scale-105 transition">Send</button>
        </form>
      </div>
    </section>
  );
}
