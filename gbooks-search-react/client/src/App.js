import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import TitleCard from "./components/TitleCard";
import Search from "./components/SearchBox";
import Books from "./components/Books";
import Saved from "./pages/Saved";
import Search from "./pages/Search";


function App() {
  return (
    <Router>
    <div>
      <Header>
    </ Header>
    </div>
  </Router>
  );
}

export default App;