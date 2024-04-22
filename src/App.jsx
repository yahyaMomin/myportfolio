import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import TackStack from './components/TackStack'
import ContentWrapper from './components/ContentWrapper'
import Projects from './components/Projects'

const App = () => {
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

export default App
