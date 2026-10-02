import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn") === "true"
    );

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");

        setIsLoggedIn(false);

        navigate("/login");
    };

    return (
        <header className="bg-blue-500 text-white px-8 py-4">

            <div className="flex items-center justify-between">

                <h1 className="text-2xl font-bold">
                    WeatherData
                </h1>

                <nav className="flex gap-6 items-center">

                    <Link to="/">
                        Home
                    </Link>

                    {isLoggedIn && (
                        <Link to="/weather">
                            Weather
                        </Link>
                    )}

                    {!isLoggedIn && (
                        <>
                            <Link to="/login">
                                Login
                            </Link>

                            <Link to="/register">
                                Register
                            </Link>
                        </>
                    )}

                    {isLoggedIn && (
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
                        >
                            Logout
                        </button>
                    )}

                </nav>

            </div>

        </header>
    );
}

export default Header;