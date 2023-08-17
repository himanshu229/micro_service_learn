import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Footer from "./components/header/Footer";
import Header from "./components/header/Header";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header/>
    <div>Name: home</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
