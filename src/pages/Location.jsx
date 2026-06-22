import {useNavigate} from "react-router-dom"

function Location(){

const navigate = useNavigate()

return(

<div className="
p-5
min-h-screen
relative
bg-pink-200
text-yellow-600
dark:text-pink-600
text:yellow-600
border-t
border-pink-300
dark:border-pink-600
shadow-md
">

<button
onClick={()=>navigate(-1)}
className="
absolute
right-5
top-5
text-2xl
"
>
←
</button>


<h1 className="text-3xl font-bold">
Select Location
</h1>


<p className="mt-5">
Enter your delivery address
</p>


<input
placeholder="Enter Address"
className="
mt-5
border
p-3
rounded
w-full
dark:bg-black-800
"
/>


</div>

)

}

export default Location