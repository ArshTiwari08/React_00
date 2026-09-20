import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="bg-blue-500 text-white px-8 py-4">
        <div className="flex items-center justify-between">

            <h1 className="text-2xl font-bold">
            WeatherData
            </h1>

            <nav className="flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/weather">Weather</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </nav>

        </div>
        </header>
    )
}

export default Header