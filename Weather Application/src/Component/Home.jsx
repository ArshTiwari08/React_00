function Home() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center bg-white p-10 rounded-xl shadow-md">

                {isLoggedIn ? (
                    <>
                        <h1 className="text-3xl font-bold text-green-600 mb-4">
                            You are logged in!
                        </h1>

                        <p className="text-gray-500">
                            You can now check the weather report.
                        </p>
                    </>
                ) : (
                    <>
                        <h1 className="text-3xl font-bold text-blue-600 mb-4">
                            Login to Check the Weather
                        </h1>

                        <p className="text-gray-500">
                            Please login to check the current weather report.
                        </p>
                    </>
                )}

            </div>
        </div>
    );
}

export default Home;