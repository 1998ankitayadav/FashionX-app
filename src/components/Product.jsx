import { FaHeart } from "react-icons/fa"
import womenDress from "../assets/women-dress.jpg"
import menTshirt from "../assets/Men-T-shirt.jpg"
import shoes from "../assets/adidas-shoes.jpg"
import kids from "../assets/kids-wear.jpg"
import homeDecor from "../assets/home-decor.jpg"
import bag from "../assets/pink-hand-bag.jpg"
import hoodie from "../assets/nike-hoodie.jpg"
import womenSaree from "../assets/saree.jpg"
import makeup from "../assets/beauty.jpg"
import plants from "../assets/plant.jpg"
import { useNavigate } from "react-router-dom"
function Product({
    category,
    search="",
    wishlist=[], 
    setWishlist,
    cart,
    setCart}){


const products=[
{
id:1,
name:"Men T-Shirt",
category:"Men",
price:"₹799",
image:menTshirt
},

{
id:2,
name:"Women Dress",
category:"Women",
price:"₹1299",
image:womenDress
},

{
id:3,
name:"Adidas Shoes",
category:"Women",
price:"₹1999",
image:shoes
},

{
id:4,
name:"Kids Wear",
category:"All",
price:"₹599",
image:kids
},

{
id:5,
name:"Home Decor",
category:"All",
price:"₹999",
image:homeDecor
},

{
id:6,
name:"Pink Handbag",
category:"Women",
price:"₹899",
image:bag
},

{
id:7,
name:"Nike Hoodie",
category:"Men",
price:"₹1499",
image:hoodie
},
{
id:8,
name:"Indoor plant",
category:"All",
price:"₹599",
image:plants
},
{
id:9,
name:"Makeup",
category:"Women",
price:"₹2999",
image:makeup
},
{
id:10,
name:"saree",
category:"Women",
price:"₹1999",
image:womenSaree
}

]
const navigate = useNavigate()
const filteredProducts = products.filter((item)=>{

const categoryMatch =
category === "All" ||
item.category === category


const searchMatch =
item.name
.toLowerCase()
.includes(
search.toLowerCase()
)


return categoryMatch && searchMatch

})

console.log("PRODUCT COMPONENT RUNNING")
console.log(filteredProducts)
return(

<div className="
grid
grid-cols-2
md:grid-cols-4
gap-5
p-5
">


{
filteredProducts.map((item)=>(


<div
key={item.id}
className="
rounded-lg
shadow-md
p-3

bg-white
text-yellow-600

dark:bg-gray-900
dark:text-pink-600

"
>


<img
src={item.image}
className="
w-full
h-40
object-cover
rounded
"
/>





<div className="
flex
justify-between
items-center
">

<h2 className="
font-bold
mt-3
">
{item.name}
</h2>


<button

onClick={()=>{

    const alreadyLiked = 
    wishlist.some(
        (product)=>product.id === item.id
    )
    if(alreadyLiked){

        setWishlist(
            wishlist.filter(
                (product) => product.id !== item.id
            )
        )
    } else{
        setWishlist([
            ...wishlist,item
        ])
    }
          
    }}
    className={`text-xl
        ${
            wishlist.some(
                (product)=>product.id === item.id 
            )
            ?
            "text-pink-600 dark:text-yellow-500"
            :
            "text-yellow-600 dark:text-pink-600"
        }`}

>

<FaHeart/>

</button>


</div>
<p>
{item.price}
</p>
<button

onClick={()=>{
 
    const alreadyInCart = 
    cart.some(
        (product)=>product.id === item.id
    )
    if(alreadyInCart){
        return
    }
    setCart([
        ...cart,
        {
            ...item,
            qty:1
        }
    ])
}}
className="
mt-2
bg-pink-600
text-white
px-3
py-1
rounded
hover:bg-pink-700
"
>
Add to Cart
</button>

<button

onClick={()=>{

setCart([
{
...item,
qty:1
}
])
navigate("/cart")

}}

className="
mt-2
ml-2
bg-yellow-500
text-white
px-3
py-1
rounded
"

>

Buy Now

</button>
</div>


))

}


</div>

)

}


export default Product