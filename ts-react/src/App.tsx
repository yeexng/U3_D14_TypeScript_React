import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPageComponent from "./components/MainPage";
import NavBarComponent from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <div>
        <Routes>
          <Route path="/" element={<MainPageComponent />} />
          <Route path="/:id" element={<MainPageComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
