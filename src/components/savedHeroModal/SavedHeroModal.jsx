import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { HeroList } from "../heroList/HeroList";
export const SavedHeroModal = ({ showModal, handleClose, setHeroInfo }) => {
  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-secondary">
            <strong className="text-primary">Click </strong>to view image and
            powerstats!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showModal && (
            <HeroList setHeroInfo={setHeroInfo} handleClose={handleClose} />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
