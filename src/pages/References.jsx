import {useNavigate} from "react-router-dom"


function References(){

const navigate=useNavigate()


return(

<div className="p-5 relative
dark:text-pink-600
text-yellow-600
">


<button
onClick={()=>navigate(-1)}
className="absolute right-5 top-5 text-2xl"
>
←
</button>


<h1 className="text-3xl font-bold">
References
</h1>


<p className="mt-5">
React.js
</p>

<p>
Tailwind CSS
</p>

<p>
React Icons
</p>


</div>

)

}


export default References