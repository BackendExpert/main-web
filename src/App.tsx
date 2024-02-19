import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
// import CountUp from "./components/countupdiv/CountUp";
import Contact from "./components/contact/Contact";
import Scientist from "./components/Scientist/Scientist";


export default function App() {
  return (
    <div className="">
      <NavBar />
        {/* <CountUp /> */}

        <BrowserRouter>
          <Routes>
            <Route path="/contact" element={<Contact />} ></Route>
            <Route path="/scientist" element={<Scientist />} ></Route>
          </Routes>
        </BrowserRouter>
      <Footer />
    </div>
  )
}