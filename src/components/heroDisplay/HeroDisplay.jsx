import Button from "react-bootstrap/Button";
import { postHero } from "../../utils/postHero";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
// import { useState } from "react";
export const HeroDisplay = ({ heroInfo, setHeroInfo }) => {
  // const [curHeroInfo, setCurHeroInfo] = useState(heroInfo);

  if (!heroInfo) {
    return <div>Loading...⚪️</div>;
  }

  const handleSubmit = async () => {
    await postHero(heroInfo);
  };

  // due to setter being async
  const handleChange = async (event) => {
    setHeroInfo((preState) => {
      const copyPreState = { ...preState };
      copyPreState.powerstats[event.target.id] = event.target.value;

      return copyPreState;
    });
  };

  // needs another button to save ->call postHero function (heroInfo)
  return (
    <div className="mt-4 d-flex align-items-center flex-column">
      <h5 className="font-weight-bold mb-3"> {heroInfo.name}</h5>
      {/* <p>Powerstats:</p> */}
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
            <Button onClick={handleSubmit} variant="outline-secondary">
              {" "}
              Save
            </Button>
          </div>
        </ul>

        <img
          src={heroInfo.image.url}
          alt={heroInfo.name}
          className="w-50 h-50 rounded mt-3"
        ></img>
      </InputGroup>
    </div>
  );
};
