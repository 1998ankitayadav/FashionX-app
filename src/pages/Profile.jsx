import {useState} from "react";
function Profile() {
  const [login, setlogin] = useState(true);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [from,setFrom] = useState({
    name:"",
    emial:"",
    phone:"",
    password:""

  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value})
    }
  const handleSubmit =(e) => {
    e.preventDefault();
if(login){
  const savedUser = JSON.parse(localStorage.getItem("user"));
  if(savedUser?.email === form.email && 
    savedUser?.password === form.password){
      setUser(savedUser);

    }else{
      alert("wrong email or password");

    }
}else{
  localStorage.setItem(
    "user",
    JSON.stringify(form)

  )
  setUser(form)
}
}
const logout = () => {
  localStorage.removeItem("user");
  setUser(null);

}
  
  return (
  <div className="
  min-h-screen
  
  justify-center
  items-center
p-5
dark:text-pink-600
text-yellow-600
">{
  user?(
    <div className="
    bg-white
    dark:bg-black
    p-6
    rounded-lg
    shadow">
      <h1 className= "text-3xl font-bold">
        Profile
      </h1>
      <p>Name:{user.name}</p>
      <p>Email:{user.Email}</p>
      <p>Phone:{user.phone}</p>

      <button
      onClick={logout}
      className="bg-red-500 
      text-white
       px-4
       py-2
        mt-5 
        rounded">
        Logout
      </button>
      </div>
      ):(
    <div className=" 
    bg-white
    dark:bg-black
    p-6
    rounded-lg
    shadow
    w-full
    max-w-md
    ">
      <h1 className="text-3xl mb-5">
        {login ? "Login" : "Signup"}
      </h1>
      <form onSubmit= {handleSubmit}
      className="space-y-3">

      {!login&&

        <input
        className="border p-2 block"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        />

      }
      <input
      className = "border p-2 block"
      name="email"
      placeholder="email"
      onChange={handleChange}
      />
      {!login &&
      <input 
      className="border p-2 block"
      name="phone"
      placeholder="phone Number"
      onChange={handleChange}
      /> 
      }
        <input
      className="border p-2 block"
      type="password"
      name="password"
      placeholder="Password"
      onChange={handleChange}
      />
        <button
      className="bg-pink-600
      text-white
       px-5
        py-2
        rounded">
        {login ? "Login" : "Signup"}
      </button>

      </form>

      <button
      onClick={()=>setLogin(!login)}
      className="mt-4 underline">

        {login 
        ? "Create new account"
        : "Already have account"}

      </button>
      </div>
  )

}
</div>
  )
}

export default Profile