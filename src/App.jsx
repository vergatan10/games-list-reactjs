import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  console.log(localStorage.getItem("theme"));
  return (
    <div
      className={`${theme} ${
        theme == "dark" ? "bg-[#121212]" : "bg-[#e0dede] text-black"
      } min-h-screen`} // min-h-[100vh] / min-h-screen
    >
      <Header theme={setTheme} />
      <Home />
    </div>
  );
}

export default App;
