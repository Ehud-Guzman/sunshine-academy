// src/context/TierContext.jsx
import { createContext, useState } from "react";
import featuresData from "../config/features.json"; // make sure path is correct

export const TierContext = createContext();

export const TierProvider = ({ children }) => {
  const [currentTier, setCurrentTier] = useState(featuresData.premium); // default tier

  return (
    <TierContext.Provider value={{ currentTier, setCurrentTier }}>
      {children}
    </TierContext.Provider>
  );
};
