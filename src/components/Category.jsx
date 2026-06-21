function Category(){

const categories=[
"All",
"Men",
"Women",
"Kids",
"Footwear",
"Home Living"
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
className="
font-medium
cursor-pointer
hover:text-pink-600
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