import React from "react";

//component
import DeliveryFoodCategory from "./DeliveryFoodCategory";

const DeliveryCarousal = () => {
    return (
        <>
            <h1 className="text-xl font-semibold m-2">Eat what make you happy!</h1>
            <div className="flex flex-wrap justify-between gap-3">
                <DeliveryFoodCategory />
                <DeliveryFoodCategory />
                <DeliveryFoodCategory />
                <DeliveryFoodCategory />
                <DeliveryFoodCategory />
                <DeliveryFoodCategory />
            </div>
        </>
    );
};

export default DeliveryCarousal;