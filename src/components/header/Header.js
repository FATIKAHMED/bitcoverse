import "./header.css";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import Icon3 from "../../assets/icon3.png";
import Icon4 from "../../assets/icon4.png";
import Icon5 from "../../assets/icon5.png";
import HeaderLogo from "../../assets/headerlogo.png";

function Header({setToggle, toggle}) {
    return (
        <div className="header">
            <div className="top">
                <div className="container">
                    <select className="text-small language">
                        <option vlaue="1">English</option>
                        <option vlaue="1">Urdu</option>
                    </select>
                    <div className="links">
                        <Link link={Icon1}/>
                        <Link link={Icon2}/>
                        <Link link={Icon3}/>
                        <Link link={Icon4}/>
                        <Link link={Icon5}/>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <img src={HeaderLogo} alt="logo"/>
                    <div onClick={()=> {setToggle(!toggle) 
                    console.log({toggle})
                    }} className="toggler">
                        <i class="fas fa-bars"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Link({link}) {
    return (
        <img className="link" src={link} alt="link"/>
    )
}

export default Header;