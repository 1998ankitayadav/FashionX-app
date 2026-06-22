import { useNavigate } from "react-router-dom"

function Notification(){

const navigate = useNavigate()


return(

<div className="p-5 
relative
dark:text-pink-600
text-yellow-600
">


{/* <button
onClick={()=>navigate(-1)}
className="
absolute
left-1
-top-13
text-2xl
"
>
←
</button> */}


<h1 className="text-3xl font-bold">
Notifications 
</h1>


<p className="mt-5">
No new notifications
</p>


</div>

)

}

export default Notification