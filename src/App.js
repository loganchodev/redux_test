import React, {useState} from "react";
import "./Style.css";

export default function App() {
  const [number, setNumber] = useState(1);
  return (
    <div id="container">
      <h1>Root : {number}</h1>
      <div id="grid">
        <Lefimport number={number}></Lefimport React, { useState } from 'react';
import './style.css';

export default function App() {
  const [number, setNumber] = useState(1);
  return (
    <div id="container">
      <h1>Root : {number}</h1>
      <div id="grid">
        <Left1></Left1>
        <Right1></Right1>
      </div>
    </div>
  );
}
function Left1(props) {
  return (
    <div>
      <h1>Left1 </h1>
      <Left2></Left2>
    </div>
  );
}
function Left2(props) {
  return (
    <div>
      <h1>Left2 : </h1>
      <Left3></Left3>
    </div>
  );
}
function Left3(props) {
  return (
    <div>
      <h1>Left3 : </h1>
    </div>
  );
}
function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}
function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}
function Right3(props) {
  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onClick={() => {}}></input>
    </div>
  );
}
t1>
        <Right1 onIncrease={()=>{
          setNumber(number + 1);
        }}></Right1>
      </div>
    </div>
  );
};

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 onIncrease={()=>{props.onIncrease();}}></Right2>
    </div>
  );
};

function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3 onIncrease={()=>{props.onIncrease();}}></Right3>
    </div>
  );
};

function Right3(props) {
  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onClick={()=>{props.onIncrease();}}></input>
    </div>
  );
};

function Left1(props) {
  return (
    <div>
      <h1>Left1 : {props.number}</h1>
      <Left2 number={props.number}></Left2>
    </div>
  );
};

function Left2(props) {
  return (
    <div>
      <h1>Left2 : {props.number}</h1>
      <Left3 number={props.number}></Left3>
    </div>
  );
};

function Left3(props) {
  return (
    <div>
      <h1>Left3 : {props.number}</h1>
    </div>
  );
};

