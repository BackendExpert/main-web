import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
// import CountUp from "./components/countupdiv/CountUp";
import Contact from "./components/contact/Contact";
import SciencPub from "./components/Science_Pub/SciencPub";
import PubInfo from "./components/Science_Pub/PubInfo";
import NewsEvent from "./components/NewsEvent/NewsEvent";


export default function App() {
  return (
    <div>
      {/* include Nav bar */}
      <NavBar />
        {/* <CountUp /> */}

        <BrowserRouter>
          <Routes>
            {/* Route for contact page */}
            <Route path="/contact" element={<Contact />} ></Route>

            {/* Route for Science Publication page */}
            <Route path="/SciencePub" element={<SciencPub />} ></Route>

            {/* Route for Science Publication more infor page */}
            <Route path="/SciencePub/PubInfo" element={<PubInfo />} ></Route>   

            {/* Route for News and Events page */}
            <Route path="/NewsEvent" element={<NewsEvent />} ></Route>         
          </Routes>
        </BrowserRouter>

        {/* include Footer */}
      <Footer />
    </div>
  )
}