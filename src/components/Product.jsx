import { FaHeart } from "react-icons/fa"
function Product({category,search="", wishlist=[], setWishlist}){


const products=[
{
id:1,
name:"Men T-Shirt",
category:"Men",
price:"₹799",
image:"https://via.placeholder.com/200"
},

{
id:2,
name:"Women Dress",
category:"Women",
price:"₹1299",
image:"https://via.placeholder.com/200"
},

{
id:3,
name:"Adidas Shoes",
category:"Women",
price:"₹1999",
image:"https://via.placeholder.com/200"
},

{
id:4,
name:"Kids Wear",
category:"All",
price:"₹599",
image:"https://via.placeholder.com/200"
},

{
id:5,
name:"Home Decor",
category:"Home Living",
price:"₹999",
image:"https://via.placeholder.com/200"
},

{
id:7,
name:"Pink Handbag",
category:"Women",
price:"₹899",
image:"https://via.placeholder.com/200"
},

{
id:8,
name:"Nike Hoodie",
category:"Men",
price:"₹1499",
image:"https://via.placeholder.com/200"
},
// {
// id:number,
// name:"product name",
// category:"Men/Women/All",
// price:"₹price",
// image:"image link"
// }
]

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




{/* <p>
{item.price}
</p> */}

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

setWishlist([
...wishlist,
item
])

}}

>

<FaHeart/>

</button>


</div>
<p>
{item.price}
</p>
<button
className="
mt-2
bg-pink-600
text-white
px-3
py-1
rounded
"
>
Add to Cart
</button>


</div>


))

}


</div>

)

}


export default Product