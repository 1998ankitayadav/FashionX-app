import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa"
import { useState } from "react"
import { Link } from "react-router-dom"
function Navbar({dark,setDark}){
    return(
    <nav className="w-full
     h-20
     bg-pink 
    shadow-md 
    flex 
    items-center
     justify-between
     md:px-10
      px-4 ">
         {/* // removed absolute// */}
        <h1 className=" text-2xl 
        font-bold
        text-pink-600
         rounded-lg 
         border-1 
        shadow-lg 
        hover:bg-pink-700
         hover:text-white 
        hover:scale-105 
        transition">
         FashionX</h1>
            <div className="
            flex
             gap-4
             md:gap-6
             font-medium 
             items-center">
        <Link to="/">
          <FaHome />
        </Link>

        <Link to="/cart">
          <FaShoppingCart />
        </Link>

        <Link to="/profile">
          <FaUser />
        </Link>
                <button
                onClick={() => setDark(!dark)}
                 className="
                 hover:bg-pink-500
                 p-0
                 ">
                {dark ? "🌸" : "🌙"}
                </button>
            </div>
          
    </nav>
    )
}
export default Navbar