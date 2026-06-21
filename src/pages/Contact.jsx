import {useNavigate} from "react-router-dom"


function Contact(){

const navigate=useNavigate()


return(

<div className="p-5 relative">


<button
onClick={()=>navigate(-1)}
className="absolute right-5 top-5 text-2xl"
>
←
</button>


<h1 className="text-3xl font-bold">
Contact Us
</h1>


<p className="mt-5">
Email: support@fashionx.com
</p>


<p>
Phone: +91 XXXXX XXXXX
</p>


</div>

)

}


export default Contact