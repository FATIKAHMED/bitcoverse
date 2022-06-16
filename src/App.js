import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header";
import {
  Routes,
  BrowserRouter as Browser,
  Route,
  Link,
} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Education from "./components/education/Education";
import ConsultingInvestment from "./components/ConsultingInvestment/ConsultingInvestment";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/login/login";
import Overview from "./components/overview/overview";
import Founder from "./components/founder/Founder";
import Footer from "./components/footer/Footer";
import Prices from "./components/prices/Prices";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Browser>
      <div className="overflow-hidden relative w-[100vw] h-[100vh]">
        <div style={{transition: "right 0.8s ease"}} className={`absolute z-10 top-0 bottom-0 ${toggle === true? " right-0": "right-[-150%]"}`}>
          <NavBar toggle={toggle} setToggle={setToggle} />
        </div>
        <div className="h-full scroll-css overflow-auto">
        <Header toggle={toggle} setToggle={setToggle}/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/companyoverview" element={<Overview />} />
          <Route path="/consultingandinvestment" element={<ConsultingInvestment />} />
          <Route path="/educationcourse" element={<Education />} />
          <Route path="/foundingdetails" element={<Founder />} />
        </Routes>
        <Prices/>
        <Footer/>   
        </div>
      </div>
      </Browser> 
    </>
  );
}
function NavBar({ toggle, setToggle }) {
  return (
    <div 
      style={{

        cursor:"pointer",
        boxShadow: " 0 0 3px 3px #133d59",
        backgroundColor: "#133d59",
      }}
      onClick={()=>{
        setToggle(false)
      }}
      className="flex items-left relative font-semibold text-sm p-10 pt-[90px] gap-3 h-full flex-col"  
    >
      <div className={`absolute top-10 left-10 toggler cursor-pointer }`}  onClick={()=> {setToggle(!toggle) }}> 
                    {
                        !toggle?<i className="fas fa-bars"></i>:<i className="fas fa-times text-white text-xs"></i>
                    }
      </div>
      <Link
        className="text-white hover:text-amber-300 sm:text-[2.075rem] text-[1.375rem] font-[300] leading-10"
        to="/"
        onClick={() => {
          setToggle(false);
        }}
      >
        Home <br />
      </Link>
      <Link
        className="text-white hover:text-[#f2b31b] sm:text-[2.075rem] text-[1.375rem] font-[300] leading-10"
        to="/signup"
        onClick={() => {
          setToggle(false);
        }}
      >
        Sign Up
      </Link>
      <Link
        className="text-white hover:text-[#f2b31b] sm:text-[2.075rem] text-[1.375rem] font-[300] leading-10"
        to="/login"
        onClick={() => {
          setToggle(false);
        }}
      >
        Login
      </Link>
      <Link
        className="text-white hover:text-[#f2b31b] sm:text-[2.075rem] text-[1.375rem] font-[300] leading-10"
        to="/consultingandinvestment"
        onClick={() => {
          setToggle(false);
        }}
      >
        Consulting And Investment
      </Link>
      <Link
        className="text-white hover:text-[#f2b31b] sm:text-[2.075rem] text-[1.375rem] font-[300] leading-10"
        to="/companyoverview"
        onClick={() => {
          setToggle(false);
        }}
      >
        Company Overview
      </Link>
      <Link
        className="text-white hover:text-[#f2b31b] sm:text-[2.075rem] text-[1.375rem] font-[300] leading-10"
        to="/educationcourse"
        onClick={() => {
          setToggle(false);
        }}
      >
        Education Courses
      </Link>
      <Link
        className="text-white hover:text-[#f2b31b] sm:text-[2.075rem] text-[1.375rem] font-[300] leading-10"
        to="/foundingdetails"
        onClick={() => {
          setToggle(false);
        }}
      >
        Founding Details
      </Link>
    </div>
  );
}

export default App;
