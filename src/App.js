import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import {
  Navigate,
  Routes,
  Router,
  BrowserRouter as Browser,
  Route,
} from "react-router-dom";

// import Projects from './components/projects/Projects';
// // import ChoseUs from './components/choseUs/ChoseUs';
// // import Work from './components/work/Work';
// // import How from './components/how/How';
// // import Feature from './components/feature/Feature';
// // import Token from './components/token/Token';
// // import Arts from './components/arts/Arts';
// //  import Faq from './components/faq/Faq';
// // import Prices from './components/prices/Prices';
//    import Footer from './components/footer/Footer';
import LandingPage from "./components/LandingPage/LandingPage";
import Overview from "./components/overview/overview";
import Education from "./components/education/Education";
import ConsultingInvestment from "./components/ConsultingInvestment/ConsultingInvestment";
import ContactUs from "./components/ContactUs/ContactUs";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/login/login";
import Founder from "./components/founder/Founder";
import Footer from "./components/footer/Footer"
import Prices from "./components/prices/Prices";
// import Aside from "./components/sidebar/Aside";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
    <div className="">
          <div className="hero">
            <Header toggle={toggle} setToggle={setToggle} />
            <NavBar toggle={toggle} />
          </div>
        
      <Browser>
        <Routes>
        <Route path="/" element={<LandingPage />} />

          <Route path="/companyoverview" element={<Overview />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/consultingandinvestment"
            element={<ConsultingInvestment />}
          />
          <Route path="/educationcourse" element={<Education />} />
          <Route path="/foundingdetails" element={<Founder />} />
        </Routes>
      </Browser>

      <Prices />
        <Footer />
        </div>
    </>
  );
}
function NavBar({toggle}) {
  
  return (
    <div style={{boxShadow : " 0 0 5px 5px #133d59", backgroundColor: "#133d59", transition:"margin-right 0.5s ease"}} className={`flex items-center absolute z-10 right-0 bottom-0  items-baseline top-0 font-semibold text-sm  p-10 gap-3  transition:m justify-center flex-col ${toggle === true? "ease-linear" : " hidden"} `}>
      <a className="text-white hover:text-amber-300 text-3xl" href="/">
        Home <br />
      </a>
      <a className="text-white hover:text-[#f2b31b] text-3xl" href="/signup">Sign Up</a>
      <a className="text-white hover:text-[#f2b31b] text-3xl" href="/login">Login</a>
      <a className="text-white hover:text-[#f2b31b] text-3xl" href="/consultingandinvestment">Consulting And Investment</a>
      <a className="text-white hover:text-[#f2b31b] text-3xl" href="/companyoverview">Comapny Overview</a>
      <a className="text-white hover:text-[#f2b31b] text-3xl" href="/educationcourse">Education Course</a>
      <a className="text-white hover:text-[#f2b31b] text-3xl" href="/foundingdetails">Founding Details</a>
    </div>
  );
}

export default App;
