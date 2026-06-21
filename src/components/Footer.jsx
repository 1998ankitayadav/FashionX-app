import { Link } from "react-router-dom"
function Footer() {
  return (
    <footer className="bg-pink-100
     text-center 
     p-1 
     mt-10">

      <div className="
flex
justify-around
bg-gray-100
p-5
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