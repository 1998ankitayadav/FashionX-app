import { FaHeart, FaBell, FaUser,FaSearch,FaMapMarkerAlt } from "react-icons/fa"

import { Link } from "react-router-dom"
function Navbar({dark,setDark}){
    return(
     <>
     {/* Top Location Bar */}
     <div className="
      flex
      items-center
      gap-2
      px-4
      py-2
      bg-gray-100
      text-sm
      ">

<FaMapMarkerAlt/>

<span>
Location / Address
</span>

</div>
    <nav className="w-full
     h-20
     bg-pink-100
    shadow-md 
    flex 
    items-center
     justify-between
     md:px-10
      px-4 
      ">
        
<Link 
  to="/" 
  className="flex items-center gap-2 cursor-pointer"
>
  <div className=" text-2xl 
        font-bold
        text-white
         rounded-lg 
         border-1 
        shadow-lg 
        bg-pink-600
        hover:bg-pink-700
         hover:text-white 
        hover:scale-105 
        transition">
    F
  </div>
         {/* // removed absolute// */}
        {/* <h1>
         🛍FashionX</h1> */}
         {/* Search */}
         </Link>

            <div className="
            flex
            items-center
            bg-gray-100
            rounded-lg
            px-3
            w-1/3
            ">
              <FaSearch/>
              <input 
               placeholder="Search products..." 
               className="
              bg-transparent
              outline-none
              px-3
              w-full
              "
              /> 
            </div>
            {/* Icons */}

           <div className="
            flex
             gap-5
             items-center
             text-xl
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
                 p-0
                 ">
                {dark ? "🌸" : "🌙"}
                </button>
            </div>
          
    </nav>
    </> 
    )
}
export default Navbar