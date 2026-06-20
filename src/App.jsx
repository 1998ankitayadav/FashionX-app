import { useState } from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Profile from "./pages/Profile"
import { Routes, Route } from "react-router-dom"
function App() {
  // const [count, setCount] = useState(0)
   const [dark,setDark] = useState(false)
  return (

  <div className={
dark 
? "dark min-h-screen bg-black text-yellow-300"
: "min-h-screen bg-white text-yellow-600"
}>
    {/* <div className="min-h-screen
    bg-white
    
    dark:text-yellow-300
    dark:bg-black"> */}
 
    <Navbar dark={dark} setDark={setDark}/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
     </div>
    //  </div>
  )
}

export default App
