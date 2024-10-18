// import { useState } from 'react'
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is a Header</h1>
      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
        <Outlet />
      </main>
      <h4>This is a Footer</h4>
    </>
  );
}

export default App;
