import { Header } from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Main } from "./containers/Main.jsx";

function App() {
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <Header />
      <Main />
    </div>
  );
}

export default App;
