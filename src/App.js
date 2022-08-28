import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navbar/Nav.jsx";
import { SavedHero } from "./components/savedHero/SavedHero.jsx";
import { HeroProvider } from "./context/heroContext.jsx";
import { HeroDisplay } from "./components/heroDisplay/HeroDisplay.jsx";
import { SearchBar } from "./components/searchBar/SearchBar.jsx";

function App() {
  return (
    <BrowserRouter>
      <HeroProvider>
        <NavBar />
        <div className="d-flex flex-column align-items-center mt-5">
          <Routes>
            <Route path="/" element={<SearchBar />} />{" "}
            <Route path="/saved" element={<SavedHero />} />
            <Route path="/display" element={<HeroDisplay />} />
          </Routes>
        </div>
      </HeroProvider>
    </BrowserRouter>
  );
}

export default App;

// 1. As viewLater btn gets clicked -> (react router)it redirects to another page (superHeroList )
// 2. Delete btn / ability of clicking each superhero names
// 3.This superHero component will do query (GET) e.g. <Link to ={/superhero/id} -> renders that superhero's powerstats and img url
