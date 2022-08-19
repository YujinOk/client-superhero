import { HeroDisplay } from "../components/heroDisplay/HeroDisplay";
import { SearchBar } from "../components/searchBar/SearchBar";
import { fetchSuperHeros } from "../utils/fetchSuperhero";
import { useState } from "react";

export const Main = () => {
  // store the fetch data
  const [heroInfo, setHeroInfo] = useState(null);
  return (
    <div>
      <SearchBar setHeroInfo={setHeroInfo} />
      {heroInfo !== null && (
        <HeroDisplay heroInfo={heroInfo} setHeroInfo={setHeroInfo} />
      )}
    </div>
  );
};
