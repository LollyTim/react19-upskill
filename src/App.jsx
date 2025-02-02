import React from "react";
import Search from "./components/Search";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header className=" ">
            <img src="./hero.png" alt="hero banner" />

            <h1>
              Find <span className="text-gradient">Movies</span> you'll enjoy
              without the Hassle
            </h1>
          </header>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <h1 className="text-white text-3xl">{searchTerm} </h1>
        </div>
      </div>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </main>
  );
};

export default App;
