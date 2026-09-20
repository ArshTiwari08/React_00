import { useState } from "react"

function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

    if (password !== confirmPassword) {
        alert("Passwords do not match")
        return
    }

    alert(`Welcome ${username}! You registered successfully`)
}

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">

            <h1 className="text-3xl font-bold text-center mb-6">
            Register
            </h1>

            <form onSubmit={handleSubmit}>

            {/* Username */}
            <div className="mb-4">
                <label className="block mb-2 font-medium">
                Username
                </label>

                <input
                type="text"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500"
                />
            </div>

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
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500"
                />
            </div>

            {/* Password */}
            <div className="mb-4">
                <label className="block mb-2 font-medium">
                Password
                </label>

                <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500"
                />
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
                <label className="block mb-2 font-medium">
                Confirm Password
                </label>

                <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500"
                />
            </div>

            {/* Register Button */}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
                Register
            </button>

            </form>

            <p className="text-center text-gray-500 mt-5">
            Already have an account?{" "}
            <span className="text-blue-500 cursor-pointer">
                Login
            </span>
            </p>

        </div>
        </div>
    )
}

export default Register