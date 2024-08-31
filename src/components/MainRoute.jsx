import Navbar from "./Navbar";
import ContentWrapper from "./ContentWrapper";
import Home from "./Home";
import TackStack from "./TackStack";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const MainRoute = () => {
   return (
      <div className={`bg-lightBg dark:bg-[#1a1a1a] dark:text-white`}>
         <Navbar />
         <ContentWrapper className="mx-5">
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

export default MainRoute;
