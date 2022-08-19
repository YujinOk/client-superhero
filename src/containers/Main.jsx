import { HeroDisplay } from "../components/heroDisplay/HeroDisplay";
import { SearchBar } from "../components/searchBar/SearchBar";
import { useState } from "react";
import { useQuery, gql } from "@apollo/client";

export const Main = () => {
  const [heroInfo, setHeroInfo] = useState(null);
  const GET_SUPERHERO = gql`
    query Query {
      superhero {
        id
        name
        img
        powerstats {
          combat
          durability
          intelligence
          power
          speed
          strength
        }
      }
    }
  `;
  //   const { loading, error, data } = useQuery(GET_SUPERHERO);

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error :</p>;
  //   console.log(data);
  // store the fetch data

  return (
    <div>
      <SearchBar setHeroInfo={setHeroInfo} />
      {heroInfo !== null && (
        <HeroDisplay heroInfo={heroInfo} setHeroInfo={setHeroInfo} />
      )}
    </div>
  );
};
