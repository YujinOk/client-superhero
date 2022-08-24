import React from "react";
// import { gql, useMutation } from "@apollo/client";
import { Button } from "react-bootstrap";
import { deleteSuperhero } from "../../utils/deleteSuperhero";
export const HeroListItem = ({ handleSubmit, hero }) => {
  //   const DELETE_HERO = gql`
  //     mutation Mutation($heroID: DeleteSuperheroInput) {
  //       deletehero(heroID: $heroID) {
  //         success
  //         message
  //       }
  //     }
  //   `;
  //   const [deleteHero] = useMutation(DELETE_HERO);
  // As the delete button gets clicked-> call my graphql mutation
  const handleClick = async (event) => {
    const deleteHeroID = event.target.getAttribute("data-hero-id");

    const variables = { heroID: { id: deleteHeroID } };
    const deleteResult = await deleteSuperhero(variables);
    console.log(deleteResult)
  };
  return (
    <React.Fragment>
      <li
        className="text-primary text-center d-flex justify-content-between p-3"
        id={hero.id}
        onClick={handleSubmit}
      >
        {hero.name}
        <Button data-hero-id={hero.id} onClick={handleClick}>
          {" "}
          Delete
        </Button>
      </li>
    </React.Fragment>
  );
};
