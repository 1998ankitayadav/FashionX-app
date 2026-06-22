function Category({setCategory}){

const categories=[
"All",
"Men",
"Women",

]


return(

<div className="
flex
gap-6
justify-center
p-5
overflow-x-auto
">


{
categories.map((item)=>(

<div
key={item}

onClick={()=>setCategory(item)}

className="
font-medium
cursor-pointer
hover:text-pink-600
text-yellow-600
dark:text-pink-600
"
>

{item}

</div>

))
}


</div>

)

}

export default Category