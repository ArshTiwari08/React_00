function Card(
    {
    name,
    description = "This is a simple working of props with the shortest description",
    button = "Click me!"
}) {
    console.log("description:", description)
return (
    <div>
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/7c/d9/76/caption.jpg?w=1400&h=-1&s=1"
        alt="Card"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
            {name}
            </h2>
            <p className="text-gray-400">
            {description}
            </p>
        </div>
        <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
        >
            {button}
        </button>
        </div>
    </div>
    </div>
)
}

export default Card