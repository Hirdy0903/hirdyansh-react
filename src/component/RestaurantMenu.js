
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const RestaurantMenu=()=>{
    const[resInfo,setResInfo]= useState(null);
    useEffect(()=>{
        fetchMenu();

    },[])
    const fetchMenu=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7030425&lng=77.430373&restaurantId=336714&catalog_qa=undefined&submitAction=ENTER");
    const json=await data.json();
    console.log(json);
    setResInfo(json.data);
    
    
    };
    if(resInfo===null){
        return <Shimmer/>

    }
    return (
        <div className="menu">
<h1>{resInfo?.data?.cards[0]?.card?.card?.text}</h1>
<h2> Menu</h2>
<ul>
    <li>Biryani</li>
    <li> Burgers</li>
    <li>Diet Coke</li>
</ul>



        </div>
    );
};
export default RestaurantMenu;