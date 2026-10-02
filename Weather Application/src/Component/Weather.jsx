import { useState } from "react";

const API_KEY = "25ee7dd7ff9a4bd02fdcd5f0ad37141b";

function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const weatherData = async () => {
        const cityName = city.trim();
        if (!cityName) {
            setError("Please enter a city name.");
            setWeather(null);
            return;
        }
        try {
            setLoading(true);
            setError("");
            setWeather(null);

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(
                    data.message || "Unable to fetch weather data."
                );
            }
            console.log(data);
            setWeather(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6">

            <h1 className="text-3xl font-bold mb-6 text-center">
                Weather App
            </h1>
            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            weatherData();
                        }
                    }}
                    className="flex-1 p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
                />

                <button
                    onClick={weatherData}
                    disabled={loading}
                    className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
                >
                    {loading ? "Loading..." : "Search"}
                </button>

            </div>
            {error && (
                <p className="mt-4 text-red-500 text-center">
                    {error}
                </p>)}
            {weather && (
                <div className="mt-6 border-2 border-gray-300 rounded-xl p-6 shadow-lg">

                    <h2 className="text-2xl font-bold">
                        {weather.name}, {weather.sys.country}
                    </h2>

                    <p className="text-5xl font-bold mt-4">
                        {Math.round(weather.main.temp)}°C
                    </p>

                    <p className="capitalize text-gray-600 mt-2">
                        {weather.weather[0].description}
                    </p>

                    <div className="mt-5 space-y-2">

                        <p>
                            <strong>Feels Like:</strong>{" "}
                            {Math.round(weather.main.feels_like)}°C
                        </p>

                        <p>
                            <strong>Humidity:</strong>{" "}
                            {weather.main.humidity}%
                        </p>

                        <p>
                            <strong>Wind Speed:</strong>{" "}
                            {weather.wind.speed} m/s
                        </p>

                        <p>
                            <strong>Pressure:</strong>{" "}
                            {weather.main.pressure} hPa
                        </p>

                    </div>

                </div>
            )}

        </div>
    );
}

export default Weather;