// import { useState } from 'react'
import "./App.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
        <Outlet />
      </main>
      <h4>This is a Footer</h4>
    </>
  );
}

export default App;
