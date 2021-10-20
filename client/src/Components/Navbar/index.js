import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";


const MobileNav = () => {
    return (
        <>
            <div className="flex items-center justify-between w-full md:hidden">
                <div className="w-28">
                    <img
                        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                        alt="logo"
                        className="w-full h-full"
                    />
                </div>
                <div className="flex itmes-center gap-3">
                    <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
                    <span className="border p-3 border-gray-300 text-zomato-400 rounded-full">
                        <FaPizzaSlice />
                    </span>
                </div>
            </div>

        </>
    )
};

const MediumNav = () => {
    return (
        <>
            <div className="hidden md:flex w-full items-center justify-between  gap-4 ">
                <div className="w-28">
                    <img
                        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                        alt="logo"
                        className="w-full h-full"
                    />
                </div>
                <div className=" flex items-center gap-3 w-full bg-white shadow-md px-3 py-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
                        <span className="text-zomato-400">
                            <HiLocationMarker />
                        </span>
                        <input type="text" placeholder="patiala" />
                        <IoMdArrowDropdown />
                    </div>
                    <div className="flex  itmes-center gap-2">
                        <RiSearch2Line />
                        <input type="search " placeholder="Search for Restaurant" />
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="text-gray-500 text-xl">Login</button>
                    <button className="text-gray-500 text-xl">Signup</button>
                </div>
            </div>
        </>
    )
}





const Navbar = () => {
    return (
        <>
            <nav className="p-4 flex bg-white  items-center shadow-md  ">
                <MobileNav />
                <MediumNav />

            </nav>
        </>
    )
};

export default Navbar;