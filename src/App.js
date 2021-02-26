import React, { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const refX = useRef(0);
  const items = [
    { id: "item1" },
    { id: "item2" },
    { id: "item3" },
    { id: "item4" },
    { id: "item5" }
  ];
  const item = document.querySelector(".carousel");
  const back = () => {
    if (refX.current > -400 * (items.length - 1)) {
      refX.current -= 400;
      console.log("refX.current:", refX.current);
      return (document.querySelector(
        ".carousel"
      ).style.transform = `translateX(${refX.current}px)`);
    } else {
      return;
    }
  };
  const next = () => {
    if (refX.current < 0) {
      refX.current += 400;
      console.log("refX.current:", refX.current);
      console.log(refX.current);
      return (document.querySelector(
        ".carousel"
      ).style.transform = `translateX(${refX.current}px)`);
    } else {
      return;
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <div className="container">
        <div className="carousel">
          {items.map((item, index) => {
            return (
              <div id={item.id} className="item">
                {item.id}
              </div>
            );
          })}
        </div>
      </div>

      <div className="gButton">
        <button className="btn" onClick={next}>{`<=`}</button>
        <button className="btn" onClick={back}>{`=>`}</button>
      </div>
    </div>
  );
}
