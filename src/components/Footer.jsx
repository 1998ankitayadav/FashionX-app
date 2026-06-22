import { Link } from "react-router-dom"
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
p-2
">

<Link to="/home">
Home
</Link>


<Link to="/cart">
Bag
</Link>




<Link to="/contact">
Contact
</Link>


<Link to="/references">
References
</Link>
</div>

    </footer>
  )
}

export default Footer