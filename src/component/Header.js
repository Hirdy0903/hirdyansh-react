import LOGO_URL from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [btnNameReact, setbtnamereact] = useState("Login");
  console.log("Header render")
  //if no dependency array useeffect called on every render
  useEffect(()=>{
    console.log("useeffect called");
  },[btnNameReact])
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={LOGO_URL}
          alt="App Logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/about">About us</Link></li>
          <li><Link to ="/contact">Contact Us</Link></li>
          <li>Cart</li>
          
          <button
            className="login"
            onClick={() => {
              btnNameReact==="Login"?setbtnamereact("Logout"):
              setbtnamereact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
