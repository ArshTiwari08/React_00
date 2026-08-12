import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const themes = {
    light: {
      backgroundColor: "white",
      color: "black",
    },
    black: {
      backgroundColor: "black",
      color: "white",
    },
    red: {
      backgroundColor: "red",
      color: "white",
    },
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingBottom: "50px",
        boxSizing: "border-box",
        ...themes[theme],
      }}
    >
      <div
        style={{
          backgroundColor: "aquamarine",
          width: "300px",
          padding: "10px",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => setTheme("black")}
          style={{
            padding: "10px 15px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#333",
            color: "white",
            cursor: "pointer",
          }}
        >
          Dark
        </button>

        <button
          onClick={() => setTheme("light")}
          style={{
            padding: "10px 15px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "white",
            color: "black",
            cursor: "pointer",
          }}
        >
          Light
        </button>

        <button
          onClick={() => setTheme("red")}
          style={{
            padding: "10px 15px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "red",
            color: "white",
            cursor: "pointer",
          }}
        >
          Red
        </button>
      </div>
    </div>
  );
}

export default App;