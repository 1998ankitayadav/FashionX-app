
import Product from "../components/Product"


function Home({
    category,
    wishlist,
    setWishlist,
    search,
    cart,
    setCart
})
{


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
cart={cart}
setCart={setCart}
/>


</div>

)

}

export default Home