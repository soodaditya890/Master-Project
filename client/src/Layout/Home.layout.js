import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";

//components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";

//redux
import { getRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";

const HomeLayout = (props) => {
const dispatch=useDispatch();

useEffect(()=>{
    dispatch(getRestaurant());
},[]);


    return <>
        <div className="container mx-auto  lg:px-20">
            <Navbar />
          
            {props.children}
            
        </div>
        
        <FoodTab/>
    </>

};

export default HomeLayout;