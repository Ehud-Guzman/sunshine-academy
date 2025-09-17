import { useContext } from "react";
import { TierContext } from "../context/TierContext";
import tiers from "../config/features.json";

export default function TierSwitcher() {
  const { currentTier, setCurrentTier } = useContext(TierContext);

  return (
    <div className="fixed top-4 right-4 bg-white shadow-lg rounded p-2 z-50 flex gap-2">
      {Object.keys(tiers).map((t) => (
        <button
          key={t}
          className={`px-3 py-1 rounded ${
            currentTier.name === t ? "bg-[#002B5B] text-white" : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => setCurrentTier(tiers[t])}
        >
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </button>
      ))}
    </div>
  );
}
