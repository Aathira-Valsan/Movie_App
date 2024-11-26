import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/movie/:imdbID" Component={MovieDetail} />
            <Route path="/*" Component={PageNotFound} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
