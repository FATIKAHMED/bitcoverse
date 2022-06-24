import "./header.css";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import Icon3 from "../../assets/icon3.png";
import Icon4 from "../../assets/icon4.png";
import Icon5 from "../../assets/icon5.png";
import HeaderLogo from "../../assets/headerlogo.png";
import { useHref } from "react-router-dom";
import { useState } from "react";
import { ethers } from "ethers";



function Header({setToggle, toggle}) {

    const [data, setdata] = useState({
        address: "",
        Balance: null,
      });

      const btnhandler = () => {
  
        // Asking if metamask is already present or not
        if (window.ethereum) {
      
          // res[0] for fetching a first wallet
          window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((res) => accountChangeHandler(res[0]));
        } else {
          alert("install metamask extension!!");
        }
      };

        // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
  
    // Requesting balance method
    window.ethereum
      .request({ 
        method: "eth_getBalance", 
        params: [address, "latest"] 
      })
      .then((balance) => {
        // Setting balance
        setdata({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };
      const accountChangeHandler = (account) => {
        // Setting an address data
        setdata({
          address: account,
        });
      
        // Setting a balance
        getbalance(account);
      };

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
                        <button onClick={()=>{
                            btnhandler();
                        }} className="bg-[#133b59] hover:bg-[#f2b31b] text-white p-2 rounded-lg text-sm">Connect Your Wallet</button>
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