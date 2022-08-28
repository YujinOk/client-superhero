import { useQuery, gql, useMutation } from "@apollo/client";
import React from "react";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { HeroContext } from "../../context/heroContext";
import { useNavigate } from "react-router-dom";

export const HeroList = () => {
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
  const DELETE_HERO = gql`
    mutation Mutation($heroID: DeleteSuperheroInput) {
      deletehero(heroID: $heroID) {
        success
        message
      }
    }
  `;

  const { setHeroInfo } = useContext(HeroContext);
  const [deleteHero] = useMutation(DELETE_HERO);
  const navigate = useNavigate();
  // to find the curHero has been clicked = whats saved in DB
  const handleSubmit = (event) => {
    const chosenHero = data.superhero.find(
      (curHero) => curHero.id === event.target.id
    );
    setHeroInfo(chosenHero);
    navigate("/display", { replace: true });
  };
  // As the delete button gets clicked-> call my graphql mutation
  const handleClick = async (event) => {
    const deleteHeroID = event.target.getAttribute("data-hero-id");

    await deleteHero({
      variables: { heroID: { id: deleteHeroID } },
    });
    // to reflect the deleted item
    await refetch();
  };

  // because it automatically caches the default -> what has been edited did not render/reflect right away
  const { data, loading, refetch } = useQuery(GET_SUPERHERO, {
    fetchPolicy: "network-only",
  });

  if (loading) {
    return <div className="text-center">loading....⚪️</div>;
  }

  return (
    <ul className="list-unstyled">
      {data?.superhero?.map((cur, index) => {
        return (
          <div
            className="d-flex justify-content-between align-items-center"
            key={index}
          >
            <li
              className="text-primary text-center d-flex justify-content-between p-3"
              id={cur.id}
              onClick={handleSubmit}
            >
              {cur.name}
            </li>
            <Button
              className="h-50"
              data-hero-id={cur.id}
              onClick={handleClick}
            >
              {" "}
              Delete
            </Button>
          </div>
        );
      })}
    </ul>
  );
};
