import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Table from "./components/Table";

function App() {
  return (
    <div>
      <Navbar />
      <Search />
      <Table />
    </div>
  );
}

export default App;
