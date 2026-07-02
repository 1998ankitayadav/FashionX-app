
import Product from "../components/Product"


function Home({
    category,
    wishlist,
    setWishlist,
    search,
    cart,
    setCart,
    sort,
    setSort
})
{


return(

<div>



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