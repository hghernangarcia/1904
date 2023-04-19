import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import findPollyFill from "core-js-pure/actual/array/find"
// // import findPollyFill from "core-js-pure/actual/array/find";

// console.log(Array.prototype.find);

// const array1 = [5, 12, 8, 130, 44];
// let found;
//   found = array1.findPollyFill((element) => element > 10);

// console.log(found);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// let arr = [1,2,3];
// let arr2 = [4, 5];

// Spread Operator ____________________________________
  //Ej 1 Concat array

  // const concat = arr.concat(arr2);
  // const concat =(arr = [...arr, ...arr2]);
  // console.log(concat);

  //EJ2 Clonar arr

  // let copyArr = arr; // No clona, afecta el original porque es referencia

  // const copyArrSpreadOP = [...arr]
  // copyArrSpreadOP.push(4);
  // console.log(arr);

  // Ej 3 Expandir Arr

  // const copyArrSpreadOPExp =[arr, 4];
  // console.log(copyArrSpreadOPExp);

  // Ej 4 Funciones mate

  // const min = Math.min(...arr);
  // console.log(min)

  // EJ 5 operador de propagacion con objetos

  // const usuario = {
  //   name: "Felipe",
  //   edad: 25,
  // }

  // const alumno= {
  //   clase: "react js",
  //   promedio: 5
  // }

  // const alumnoCh = {...usuario, ...alumno, idCh: 12};
  // console.log(alumnoCh);

//Propiedades dinamicas ______________________________

  // const obUsuarios = {
  //   usuario_5: "David"    
  // }

  // const nombres = ["jon", "irma", "miguel", "Sara"]

  // nombres.forEach(
  //   (nombre, index) =>(obUsuarios[`usuario_${index}`] = nombre)
  //   );
  //  console.log(obUsuarios)   

// Deep matching ________________________________________-

  // const usuario = {
  //   name: "Felipe",
  //   edad: 25,
  // }

  // let {name, edad} = usuario;

  // console.log(name, edad);

// ASignacion en desestructuracion ___________________________________

// let persona = [ "Jhon", "Smith"];

// let [nombre, apellido] = persona;

// let [nombre, apellido] = "Jhons Smiths".split(" ")
// console.log(nombre, apellido);




