import { useContext } from "react";
import { TierContext } from "../context/TierContext";

const newsData = [
  { title: "New Library Opens", date: "2025-09-20", snippet: "Our new library is ready for students!" },
  { title: "Art Competition Winners", date: "2025-09-15", snippet: "Congratulations to our art champs!" },
];

export default function News() {
  const { currentTier } = useContext(TierContext);
  const f = currentTier?.features || {};
  if (!f.news?.enabled) return null;

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#002B5B] mb-12">News</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {newsData.map((n, i) => (
            <div key={i} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">{n.title}</h3>
              <p className="text-gray-500 mb-2">{new Date(n.date).toDateString()}</p>
              <p>{n.snippet}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
