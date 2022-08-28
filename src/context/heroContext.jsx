import { createContext, useState } from "react";

const HeroContext = createContext();

const HeroProvider = ({ children }) => {
  const [heroInfo, setHeroInfo] = useState(null);

  const data = { heroInfo, setHeroInfo };

  return <HeroContext.Provider value={data}>{children}</HeroContext.Provider>;
};

export { HeroProvider, HeroContext };
