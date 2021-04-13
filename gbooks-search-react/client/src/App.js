import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import TitleCard from "./components/TitleCard";
// import TitleCard from "./components/TitleCard";
// import SearchBox from "./components/SearchBox";
// import Books from "./components/Books";
// import Saved from "./pages/Saved";
// import Search from "./pages/Search";


function App() {
  return (
    <Router>
    <div>
      <div>
      <Header>
    </ Header>
    </div>
    <div>
      <TitleCard>
      </TitleCard>
    </div>
    </div>
  </Router>
  );
}

export default App;
