import { useState } from "react"

function Weather() {
    const [userData, setUserData] = useState([])

    const userdata = async () => {
        const response = await fetch(
            "https://api.github.com/users/ArshTiwari08"
        )
        const data = await response.json()
        console.log(data)
        setUserData(data)
    }

    return (
        <>
            <button
                onClick={userdata}
                className="px-6 py-3 text-white font-semibold rounded-lg border-2 border-red-500 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all duration-300"
            >
                Click Me
            </button>
            {userData.map((key) => (
                <h1 key={key}>{key}</h1>
            ))}
        </>
    )
}

export default Weather