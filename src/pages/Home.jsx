
import Product from "../components/Product"


function Home({category,wishlist,setWishlist,search}){


return(

<div>

{/* <h1>
Home
</h1> */}


<Product

category={category}
wishlist={wishlist}
setWishlist={setWishlist}
search={search}
/>


</div>

)

}

export default Home