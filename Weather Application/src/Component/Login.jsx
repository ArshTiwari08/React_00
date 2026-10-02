import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Login() {

    const[ email, setEmail] = useState("")
    const[password,setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault();

        // checkt the correct credentials
        const userdata = localStorage.getItem("user")
        if(userdata){
            const user = JSON.parse(userdata)

            if(user.email === email
                &&
                user.password === password){
                    localStorage.setItem("isLoggedIn", "true")
                    alert("You are successFully Login")
                    navigate("/weather")
                }
            else{
                alert("invalid Credential")
            }
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
            
            <h1 className="text-3xl font-bold text-center mb-6">
            Login
            </h1>

            <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="mb-4">
                <label className="block mb-2 font-medium">
                Email
                </label>

                <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
            </div>

            {/* Password */}
            <div className="mb-6">
                <label className="block mb-2 font-medium">
                Password
                </label>

                <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
            </div>

            {/* Button */}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
                Login
            </button>

            </form>

        </div>
        </div>
    )
}
export default Login