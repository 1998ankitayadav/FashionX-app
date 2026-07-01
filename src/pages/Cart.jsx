import{FaTrash} from "react-icons/fa"
function Cart({cart,setCart}) {
  const totalPrice = cart.reduce(
(total,item)=>
total + Number(item.price.replace("₹","")) * item.qty,
0
)
  return (
    <div className="
p-5
dark:text-pink-600
text-yellow-600
dark:bg-black
dark:text-pink-600
min-h-screen
">
      <h1
      className="
      text-2xl
      font-bold
      mb-5">Cart</h1>
      {
        cart.length === 0 ?
        <p>
          your cart is empty
        </p>
        :
        cart.map((item)=>(
          <div
          key={item.id}
          className="
          flex
          items-center
          justify-between
          
          border-2
          border-pink-600
          
          bg-pink-100
          
          dark:bg-black
          p-3
          mb-3
          rounded-lg
          text-sm">
            <div className="
            flex
            items-center
            gap-3">
            
            <img
            src={item.image}
            className="
            w-16
            h-16
            object-cover
            rounded"/>
            <div>
            <h2 className="font-bold">
            {item.name}
            </h2>
            <p>
              {item.price}
            </p>
            </div>
            </div>
            <div className="flex
            items-center
            gap-3">
               <button
               onClick={()=>{
                 setCart(
                  cart.map(product=>
                    product.id===item.id
                    ?
                    {
                      ...product,qty:product.qty+1
                    }:
                    product)
                  )
                }}
               className="
               bg-pink-600
               text-white
               px-2
               rounded">
                 +
               </button>
  <span>
    {item.qty}
  </span>

  <button
  onClick={()=>{
setCart(
  cart.map(product=>
    product.id===item.id
    ?
  
  {
        ...product,
        qty:product.qty-1
      }
      :
      product
    )
    .filter(product=>product.qty>0)
  )
  }}
    
   className="
  bg-pink-600
  text-white
  px-2
  rounded
  ">
    -
    </button>
  <button 
  onClick={()=>{
    setCart(
      cart.filter(
        (product)=>product.id!==item.id
      )
    )
  }}
  className="
  text-pink-600
  font-bold">
    <FaTrash/>
  </button>
      
    </div>
  </div>
  ))
}

{
cart.length>0 &&

<div className="
mt-5
border-t
pt-5
">


<h2 className="
text-xl
font-bold
">

Price Details

</h2>


<p>
Product Total : ₹{totalPrice}
</p>


<p>
GST (18%) : ₹{Math.round(totalPrice*0.18)}
</p>


<p>
Delivery : ₹50
</p>


<h2 className="
text-2xl
font-bold
mt-3
">

Total Amount : ₹
{
totalPrice +
Math.round(totalPrice*0.18)
+
50
}

</h2>


<button
className="

bg-pink-600
text-white
dark:text-black
px-5
py-2
mt-5
rounded
">

Proceed To Payment

</button>


</div>

}
    </div>
  ) 
}

export default Cart