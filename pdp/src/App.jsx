import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Footer from "home/Footer";
import Header from "home/Header";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header/>
    <div>Name: pdp</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
