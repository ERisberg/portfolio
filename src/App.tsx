import React from "react";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col overflow-hidden">
      <Sidebar />
      <section className="w-full h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold">Landing page</h1>
      </section>
    </div>
  );
}

export default App;
