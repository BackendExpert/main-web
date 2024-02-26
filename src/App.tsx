import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
// import CountUp from "./components/countupdiv/CountUp";
import Contact from "./components/contact/Contact";
import Scientist from "./components/Scientist/Scientist";
import TestArray from "./components/testArry/TestArray";
import SciencPub from "./components/Science_Pub/SciencPub";
import PubInfo from "./components/Science_Pub/PubInfo";


export default function App() {
  return (
    <div>
      <NavBar />
        {/* <CountUp /> */}

        <BrowserRouter>
          <Routes>
            <Route path="/contact" element={<Contact />} ></Route>
            <Route path="/scientist" element={<Scientist />} ></Route>
            <Route path="/testArry" element={<TestArray />} ></Route>
            <Route path="/SciencePub" element={<SciencPub />} ></Route>
            <Route path="/SciencePub/PubInfo" element={<PubInfo />} ></Route>
            
          </Routes>
        </BrowserRouter>
      <Footer />
    </div>
  )
}