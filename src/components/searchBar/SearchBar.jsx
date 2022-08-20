import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { fetchSuperHeros } from "../../utils/fetchSuperhero";

export const SearchBar = ({  setHeroInfo }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  // when button gets clicked
  const handleSubmit = async () => {
    setHeroInfo(await fetchSuperHeros(searchText));
  };



  return (
    <div className="searchBar">
      
      <InputGroup>
        <Form.Control
          placeholder="wut's ya fav superhero?"
          aria-label="Recipient's username with two button addons"
          value={searchText}
          onChange={handleChange}
        />
        <Button variant="outline-secondary" onClick={handleSubmit}>
          Search
        </Button>
      </InputGroup>
    
    </div>
  );
};
