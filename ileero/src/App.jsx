import { useState } from "react";
import "./App.css";
import "./index";
import "./index.js"

import Hero from "./components/Hero";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
