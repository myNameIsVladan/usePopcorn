import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import Star from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// <Star />
// <Star size={24} color="red" />
// <Star
//   messages={["terrible", "bad", "okay", "good", "amazing"]}
//   defaultRating={3}
// />
