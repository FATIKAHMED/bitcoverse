import "./header.css";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import Icon3 from "../../assets/icon3.png";
import Icon4 from "../../assets/icon4.png";
import Icon5 from "../../assets/icon5.png";
import HeaderLogo from "../../assets/headerlogo.png";
import { useHref } from "react-router-dom";


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
                <div className="container sm:flex-row flex-col">
                    <img 
                       src={HeaderLogo} alt="logo"/>
                       <div className="flex gap-5 lg:pl-96 p-0 lg:pt-0 pt-2  lg:pb-0 pb-2 ">
                        <button className="bg-[#133b59] hover:bg-[#f2b31b] text-white p-2 rounded-lg text-sm">Connect Your Wallet</button>
                        <button className="bg-[#f2b31b] hover:bg-[#133b59] text-white p-2 rounded-lg text-sm">Demo Exchange</button>

                       </div>
                    <div onClick={()=> {setToggle(!toggle) 
                    }} className={`toggler  cursor-pointer ${toggle === true? " sticky top-0": ""}`}> 
                    {
                        !toggle?<i className="fas fa-bars"></i>:<i className="fas fa-times"></i>
                    }  
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