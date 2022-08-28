// import { HeroDisplay } from "../components/heroDisplay/HeroDisplay";
import { SearchBar } from "../components/searchBar/SearchBar";

// import { useContext } from "react";
// import { HeroContext } from "../context/heroContext";
// import Button from "react-bootstrap/Button";
// import { SavedHero } from "../components/savedHero/SavedHero";

export const Main = () => {
  // const [showModal, setShowModal] = useState(false);

  // const handleClose = () => setShowModal(false);
  // const handleShow = () => setShowModal(true);

  // const handleSubmit = async () => {
  //   handleShow();
  // };

  return (
    <div>
      <SearchBar />

      <div className="d-flex justify-content-center mt-3 ">
        {/* <Button className="rounded btn btn-secondary" onClick={handleSubmit}>
          Click me! If you wanna view your saved superheroes 😃
        </Button> */}
      </div>
    </div>
  );
};
