import { useState } from 'react'
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

import { Routes, Route } from "react-router-dom"
function App() {

   const [dark,setDark] = useState(false)
  return (

//   <div className={
// dark 
// ? "dark min-h-screen bg-black text-yellow-300"
// : "min-h-screen bg-white text-yellow-600"
// }>
 <div className={`
${dark ? "dark bg-black text-yellow-700" : "bg-white text-yellow-600"}
min-h-screen
flex
flex-col
`}> 
 
    <Navbar dark={dark} setDark={setDark}/>
    <Category/>
    <main className="flex-1">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/notification" element={<Notification/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/references" element={<References/>}/>
      </Routes>
       </main>
      <Footer />
     </div>
  
  )
}

export default App
