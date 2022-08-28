import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { gql, useMutation } from "@apollo/client";

import { useContext } from "react";
import { HeroContext } from "../../context/heroContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const HeroDisplay = () => {
  const POST_HERO = gql`
    mutation Mutation($heroInfo: SuperheroInput) {
      postHero(heroInfo: $heroInfo) {
        success
        message
      }
    }
  `;
  const [mutateHero] = useMutation(POST_HERO);
  const { heroInfo, setHeroInfo } = useContext(HeroContext);
  const notify = () =>
    toast("Your superhero has been saved!", { position: "top-center" });
  if (!heroInfo) {
    return <div>Loading...⚪️</div>;
  }
  

  const handleSubmit = async () => {
    const { combat, durability, intelligence, power, speed, strength } =
      heroInfo.powerstats;
    const updatedPowerstats = {
      combat: parseInt(combat),
      durability: parseInt(durability),
      intelligence: parseInt(intelligence),
      power: parseInt(power),
      speed: parseInt(speed),
      strength: parseInt(strength),
    };

    const updatedHeroInfo = {
      name: heroInfo.name,
      img: heroInfo.img,
      powerstats: updatedPowerstats,
    };

    await mutateHero({
      variables: { heroInfo: updatedHeroInfo },
    });

    notify();
  };

  // when editing input, i need to update that into my getter
  const handleChange = async (event) => {
    const copyPreState = JSON.parse(JSON.stringify(heroInfo));
    // e.g. heroInfo.powerstats "combat" =76
    copyPreState.powerstats[event.target.id] = event.target.value;

    setHeroInfo(copyPreState);
  };

  return (
    <div className="mt-4 d-flex align-items-center flex-column">
      <h4 className="font-weight-bold mb-3"> {heroInfo.name}</h4>

      <InputGroup className="d-flex justify-content-around border border-secondary rounded p-3">
        <ul>
          <li className="list-unstyled mb-3">
            Combat:{" "}
            <Form.Control
              value={heroInfo.powerstats.combat}
              onChange={handleChange}
              type="number"
              id="combat"
            />
          </li>
          <li className="list-unstyled mb-3">
            Durability:
            <Form.Control
              value={heroInfo.powerstats.durability}
              onChange={handleChange}
              type="number"
              id="durability"
            />
          </li>
          <li className="list-unstyled mb-3">
            Intelligence:
            <Form.Control
              value={heroInfo.powerstats.intelligence}
              onChange={handleChange}
              type="number"
              id="intelligence"
            />{" "}
          </li>
          <li className="list-unstyled mb-3">
            Power:
            <Form.Control
              value={heroInfo.powerstats.power}
              onChange={handleChange}
              type="number"
              id="power"
            />{" "}
          </li>
          <li className="list-unstyled mb-3">
            Speed:
            <Form.Control
              value={heroInfo.powerstats.speed}
              onChange={handleChange}
              type="number"
              id="speed"
            />{" "}
          </li>
          <li className="list-unstyled mb-3">
            Strength:{" "}
            <Form.Control
              value={heroInfo.powerstats.strength}
              onChange={handleChange}
              type="number"
              id="strength"
            />
          </li>

          <div className="justify-content-center mt-4">
            <Button
              onClick={handleSubmit}
              variant="outline-secondary"
              data-dismiss="toast"
            >
              {" "}
              Save
            </Button>
            <ToastContainer />
          </div>
        </ul>

        <img
          src={heroInfo.img}
          alt={heroInfo.name}
          className="w-50 h-50 rounded mt-3"
        ></img>
      </InputGroup>
    </div>
  );
};
