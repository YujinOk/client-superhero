import { useQuery, gql } from "@apollo/client";
import React from "react";

import { HeroListItem } from "../heroListItem/HeroListItem";
export const HeroList = ({ setHeroInfo, handleClose }) => {
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

  // to find the curHero has been clicked = whats saved in DB
  const handleSubmit = (event) => {
    const chosenHero = data.superhero.find(
      (curHero) => curHero.id === event.target.id
    );
    setHeroInfo(chosenHero);
    handleClose();
  };

  // because it automatically caches the default -> what has been edited did not render/reflect right away
  const { data, loading } = useQuery(GET_SUPERHERO, {
    fetchPolicy: "network-only",
  });

  if (loading) {
    return <div className="text-center">loading....⚪️</div>;
  }

  return (
    <ul className="list-unstyled">
      {data?.superhero?.map((cur, index) => {
        return (
          <HeroListItem handleSubmit={handleSubmit} hero={cur} key={index} />
        );
      })}{" "}
    </ul>
  );
};
