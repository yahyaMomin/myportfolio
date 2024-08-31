import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import TackStack from "./components/TackStack";
import ContentWrapper from "./components/ContentWrapper";
import Projects from "./components/Projects";
import { Route, Routes } from "react-router-dom";
import MainRoute from "./components/MainRoute";
import Private from "./components/Private";

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<MainRoute />} />
         <Route path="/admin" element={<Private />} />
      </Routes>
   );
};

export default App;
