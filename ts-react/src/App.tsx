import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPageComponent from "./components/MainPage";
import NavBarComponent from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "./components/DetailsPage";

function App() {
  return (
    <div className="main-body">

    <BrowserRouter>
      <NavBarComponent />
      <div>
        <Routes>
          <Route path="/" element={<MainPageComponent />} />
          <Route path="/:id" element={<DetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
