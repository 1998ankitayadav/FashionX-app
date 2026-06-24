function Wishlist({wishlist,cart,setCart}){


return(

<div className="
p-5

bg-pink-200
text-yellow-600

dark:bg-black
dark:text-pink-600
">


<h1 className="
text-3xl
font-bold
">
Wishlist
</h1>



<div className="
grid
grid-cols-2
md:grid-cols-4
gap-5
mt-5
">


{

wishlist.map((item)=>(


<div
key={item.id}
className="
bg-white
dark:bg-gray-900
p-3
rounded
shadow
"
>


<img
src={item.image}
className="
w-full
h-32
"
/>


<h2>
{item.name}
</h2>


<p>
{item.price}
</p>
<button
onClick={()=>{
    const alreadyInCart = 
    cart.some(
        (product)=>product.id===item.id)
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
 
className="mt-2
bg-pink-600
text-white
px-3
py-1
rounded
hover:bg-pink-700">
Add to Cart
</button>


</div>


))

}


</div>


</div>

)

}

export default Wishlist