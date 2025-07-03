import { LOGO_URL } from "../utils/constants";
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
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img
          src={LOGO_URL}
          alt="App Logo"
          className="w-32 "
        />
      </div>
      <div className= "flex">
        <ul className="flex   "> 
          <li className="px-14"><Link to ="/">Home</Link></li>
          <li className="px-14"><Link to ="/about">About us</Link></li>
          <li className="px-14"><Link to ="/contact">Contact Us</Link></li>
          <li className="px-14"><Link to ="/Grocery">Grocery</Link></li>
          <li className="px-14">Cart</li>
          
          <button
            className="border border-black h-7 rounded-sm m-5 "
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
