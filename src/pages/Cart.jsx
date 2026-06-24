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
  cart.legth>0 &&
  <h2 classNAme="
  mt-5
  text-xl
  font-bold">
    Total: ₹{totalPrice}
  </h2>
}
    </div>
  ) 
}

export default Cart