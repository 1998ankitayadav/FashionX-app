import { useState,useEffect } from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Category from "./components/Category"
import Wishlist from "./pages/Wishlist"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Profile from "./pages/Profile"
import Notification from "./pages/Notification"
import Contact from "./pages/Contact"
import References from "./pages/References"
import Location from "./pages/Location"
import Product from "./components/Product"

import { Routes, Route } from "react-router-dom"
function App() {

   const [dark,setDark] = useState(false)
   const [category,setCategory] = useState("All")
   const [wishlist,setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || [])
   const [search, setSearch] = useState("")
   const [cart,setCart] = useState(
JSON.parse(localStorage.getItem("cart")) || []
)

   useEffect(()=>{

document.documentElement.classList.toggle(
"dark",
dark
)

},[dark])
useEffect(()=>{
  

localStorage.setItem(
  "wishlist",
  JSON.stringify(wishlist)
)
},[wishlist])

useEffect(()=>{

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  )
  },[cart])


  return (


 <div className={`

min-h-screen
flex
flex-col
bg-pink-100
text-yellow-600
dark:bg-black
dark:text-pink-600
`}> 


    <div className="
sticky
top-0">


    <Navbar 
    dark={dark}
     setDark={setDark}
     search={search}
     setSearch={setSearch}
     /> 
         </div>
 
    

    
    <Category  setCategory={setCategory}/>
      
    <main className="flex-1 ">
     <Routes>
      
           <Route 
path="/home" 
element={
<Home
category={category}
search={search}
wishlist={wishlist}
setWishlist={setWishlist}
cart={cart}
setCart={setCart}
/>
}
/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={
        <Wishlist
        wishlist={wishlist} 
        cart={cart} 
        setCart={setCart}/>}/>
        <Route path="/notification" element={<Notification/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/references" element={<References/>}/>
        <Route path="/location" element={<Location/>}/>

        
      </Routes>
       </main>
   

      
      <Footer />
       
     </div>
  
  )
}

export default App
