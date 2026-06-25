import { Link } from "react-router-dom"
import { 
FaHome,
FaShoppingCart,
FaPhone,
FaBook
} from "react-icons/fa"
function Footer() {
  return (
    <footer className="bg-pink-800
     text-center 
     dark:bg-black
     dark:text-pink-600
     text-yellow-600
     border-t
     border-pink-300
     dark:border-pink-600
     mt-10
     shadow-md">

      <div className="
flex
justify-around
bg-pink-100
text-yellow-600
dark:bg-black
dark:text-pink-600
p-1
">

<Link to="/"
classNAme="text-xl">
  <FaHome className="text-xl"/>

</Link>


<Link to="/cart"
className="flex flex-col items-center">

<FaShoppingCart className="text-xl"/>



</Link>



<Link 
to="/contact"
className="flex flex-col items-center">

<FaPhone className="text-xl"/>



</Link>


<Link 
to="/references"
className="flex flex-col items-center">

<FaBook className="text-xl"/>

{/* <span>
References
</span> */}

</Link>
</div>

    </footer>
  )
}

export default Footer