import { FaHeart, FaBell, FaUser,FaSearch,FaMapMarkerAlt } from "react-icons/fa"

import { Link } from "react-router-dom"
function Navbar({dark,setDark,setSearch}){
    return(
     <>
    <nav className="
      fixed
      top-0
      left-0
      w-full
      h-28
      z-50
      bg-pink-200
      dark:bg-black
      dark:text-pink-600
      shadow-md 
      flex 
      flex-col
    
      md:px-10
      shadow-md
      border-b
      border-pink-300
      dark:border-pink-600
      ">
          {/* Top Row */}
    <div
    className="
    flex
item-center
justify-start
    px-6
    pt-2
    text-yellow-600
    dark:text-pink-600
    text-sm
    "
    >

        <Link
        to="/location"
        className="flex items-center gap-2 hover:underline"
        >

            <FaMapMarkerAlt />

            <div>

                <p className="text-xs text-gray-600">
                    Deliver To
                </p>

                <h4 className="font-semibold">
                    Raebareli, Uttar Pradesh
                </h4>

            </div>

        </Link>

    </div>
        {/* Bottom Row */}
<div
className="
w-full
flex
items-center
justify-between
px-6
mt-2
"
>
  <div className=" text-2xl 
        font-bold
        text-white
         rounded-full 
         border-7
        shadow-lg 
        bg-pink-600
        hover:bg-pink-700
         hover:text-white 
        hover:scale-105 
        transition">
          F
          </div>
         {/* </Link> */}

            <div className="
            flex
                     items-center
           bg-white
           text-yellow-600
           dark:bg-black00
            dark:text-pink-600
            rounded-lg
            px-1
            w-1/3
            ">
              <FaSearch/>
              <input 
              onChange={(e)=>setSearch(e.target.value)}
               placeholder="Search products..." 
               className="

              bg-transparent
              outline-none
              px-3
              w-full
              placeholder-yellow-500
              dark:placeholder-pink-600
              "
              /> 
            </div>
            {/* Icons */}

           <div className="
            flex
             gap-5
             items-center
             text-xl
             text-yellow-600
            dark:text-pink-600
             ">

           <Link to="/wishlist">
           <FaHeart/>
          </Link>

            <Link to="/notification">
            <FaBell/>
            </Link>

            <Link to="/profile">
            <FaUser/>
            </Link>

                <button
                onClick={() => setDark(!dark)}
                 className="
                 hover:bg-pink-500
                 


hover:bg-pink-200
dark:hover:bg-pink-700
                 p-0
                 ">
                {dark ? "🌸" : "🌙"}
                </button>
                </div>
            </div>
          
    </nav>
    </> 
    )
}
export default Navbar