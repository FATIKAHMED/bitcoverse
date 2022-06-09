import './App.css';
import Header from "./components/header/Header";
// import Slider from './components/slider/Slider';
// import Projects from './components/projects/Projects';
// import ChoseUs from './components/choseUs/ChoseUs';
// import Work from './components/work/Work';
// import How from './components/how/How';
// import Feature from './components/feature/Feature';
// import Token from './components/token/Token';
// import Arts from './components/arts/Arts';
//  import Faq from './components/faq/Faq';
// import Prices from './components/prices/Prices';
   import Footer from './components/footer/Footer';
import Overview from './components/overview/overview';
// import Education from './components/education/Education';
// import ConsultingInvestment from './components/ConsultingInvestment/ConsultingInvestment';
// import ContactUs from './components/ContactUs/ContactUs';
// import SignUp from './components/SignUp/SignUp';
// import Login from './components/login/login';
//import Founder from './components/founder/Founder';

function App() {
  return (
    <>
      <div className="hero">
        <Header />
        {/* <Slider /> */}
      </div>
      {/* <How />
      <Projects />
      <ChoseUs />
      <Feature />
      <Work />
      <Token />
       <Arts /> */}
      {/* <Faq /> */}
      {/* <Founder /> */}
      {/* <Prices /> */}
      {/* <Login /> */}
      {/* <Education /> */}
      {/* <ConsultingInvestment/> */}
      {/* <ContactUs/> */}
      {/* <SignUp/> */}
      <Overview />
      <Footer />
    </>
  );
}

export default App;
