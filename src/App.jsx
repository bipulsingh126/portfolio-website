import { Toaster } from "react-hot-toast"
import About from "./Components/About.jsx"
import Contact from "./Components/Contact.jsx"
import Experience from "./Components/Experience.jsx"
import Footer from "./Components/Footer.jsx"
import Home from "./Components/Home.jsx"
import Navbar from "./Components/Navbar.jsx"
import Portfolio from "./Components/Portfolio.jsx"



function App() {

  return (
    <>
     <div>
     <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Footer/>
     </div>
      <Toaster/>    
    </>
  )
}

export default App
