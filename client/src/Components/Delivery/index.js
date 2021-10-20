import React ,{useEffect,useState} from "react";

import { useSelector } from "react-redux";

//components
import DeliveryCarousal from "./DeliveryCarousal";


const Delivery=()=>{
    const [restaurantList,setRestaurantList]=useState([]);

    const reduxState=useSelector(
        (globalStore)=>globalStore.restaurant.restaurants
    );
    useEffect(()=>{
        setRestaurantList(reduxState.restaurant);
    },[reduxState.restaurants]);
    return (
        <>
        <DeliveryCarousal/>
        </>
    );
};


export default Delivery;