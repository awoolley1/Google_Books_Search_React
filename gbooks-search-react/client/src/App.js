import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./components/Books";
import Header from "./components/Header";
import TitleCard from "./components/TitleCard";
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
    <div>
      <Books>
      </Books>
    </div>
    </div>
  </Router>
  );
}

export default App;
