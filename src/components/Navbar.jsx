import { FaHeart, FaBell, FaUser,FaSearch,FaMapMarkerAlt } from "react-icons/fa"

import { Link } from "react-router-dom"
function Navbar({dark,setDark,setSearch}){
    return(
     <>
     {/* Top Location Bar */}
     <div className="
      flex
      items-center
      gap-2
      px-4
      py-2
      bg-pink-200
      text-yellow-600
      dark:bg-black
      dark:text-pink-600
      text-sm
      shadow-md
border-b
border-pink-300
dark:border-pink-600
      ">

<Link 
to="/location"
className="
flex
items-center
gap-2
hover:underline
"
>
<FaMapMarkerAlt/>

<span>
Location / Address
</span>

</Link>

</div>
    <nav className="w-full
     h-20
    bg-pink-200
    dark:bg-black
    dark:text-pink-600
    shadow-md 
    flex 
    items-center
     justify-between
     md:px-10
      px-4 
      shadow-md
border-b
border-pink-300
dark:border-pink-600
      ">
        
{/* <Link 
  to="/" 
  className="flex items-center gap-2 cursor-pointer"
> */}
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
            px-3
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
          
    </nav>
    </> 
    )
}
export default Navbar