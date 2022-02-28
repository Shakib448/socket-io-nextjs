import React from "react";
import { isBrowser } from "../utils";

const Testing = () => {
  if (isBrowser) {
    const connection = new WebSocket(
      "ws://alt-solutions-se.herokuapp.com/cable"
    );

    connection.onopen = function () {
      connection.send("hello world");
    };
    connection.onerror = function (error) {
      alert("WebSocket Error " + error);
    };
    connection.onmessage = function (e) {
      console.log(e.data);
    };
  }

  return <h1>Testing</h1>;
};

export default Testing;
