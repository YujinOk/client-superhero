import { HeroDisplay } from "../components/heroDisplay/HeroDisplay";
import { SearchBar } from "../components/searchBar/SearchBar";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { getHeroGraphql } from "../utils/getHeroGraphql";
import { SavedHeroModal } from "../components/savedHeroModal/SavedHeroModal";

export const Main = () => {
  const [heroInfo, setHeroInfo] = useState(null);


  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = async () => {
    handleShow();
    await getHeroGraphql();
  };


  

  return (
    <div>
      <SavedHeroModal
        showModal={showModal}
        handleClose={handleClose}
        setHeroInfo={setHeroInfo}
      />
      <SearchBar setHeroInfo={setHeroInfo} />
      {heroInfo !== null && (
        <>
          <HeroDisplay heroInfo={heroInfo} setHeroInfo={setHeroInfo} />

          <div className="d-flex justify-content-center mt-3 ">
            <Button
              className="rounded btn btn-secondary"
              onClick={handleSubmit}
            >
              Click me! If you wanna view your saved superheroes? 😃
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
