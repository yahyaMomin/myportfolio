import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import TackStack from "./components/TackStack";
import ContentWrapper from "./components/ContentWrapper";
import Projects from "./components/Projects";

const App = () => {
<<<<<<< HEAD
   return (
      <div className={`bg-lightBg dark:bg-darkGray dark:text-white`}>
         <Navbar />
         <ContentWrapper>
            <Home />
            <TackStack />
            <About />
            <Projects />
            <Contact />
         </ContentWrapper>
         <Footer />
      </div>
   );
};
=======
  return (
    <div className={`bg-lightBg dark:bg-[#1a1a1a] dark:text-white`}>
      <Navbar />
      <ContentWrapper>
        <Home />
        <TackStack />
        <About />
        <Projects />
        <Contact />
      </ContentWrapper>
      <Footer />
    </div>
  )
}
>>>>>>> c9f2497fcce63b0f59839ac2d61e02467044a782

export default App;
