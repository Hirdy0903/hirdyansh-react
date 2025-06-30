import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);
    const{resId}=useParams();

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(
    //       MENU_API  +resId
    //     );
    //     const json = await data.json();
    //     console.log(json);
    //     setResInfo(json.data);
    //     // If you want to see the heading text in console:
    //     console.log(json.data.cards[0]?.card?.card?.text);
    // };
    const resInfo=useRestaurantMenu(resId) ;

    if (resInfo === null) {
        return <Shimmer />;
    }
    const {name,cuisines,costForTwoMessage,cloudinaryImageId}=resInfo?.cards[2]?.card?.card?.info||{};
    const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card||{};
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(',')}</h2>
            <ul>
                {itemCards.map(item=><li  key={item?.card?.info?.id} >{item?.card?.info?.name}-{(item?.card?.info?.finalPrice|| item?.card?.info?.defaultPrice
)/100}</li>)}


            </ul>
        </div>
    );
};

export default RestaurantMenu;