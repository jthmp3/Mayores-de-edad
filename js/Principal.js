/*Sea el nombre y la edad de varias personas. 
Se necesita un programa que lea estos datos y reporte al final el porcentaje de personas que son mayores 
de edad.
Se tienen las siguientes personas: 
Luis (15), Ana (19), José (21), Carmen (17), Rosa (18), José (22), 
María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16);*/

import Cl_personas from "./Cl_personas.js";
import Cl_datos from "./Cl_datos.js";

let personas = new Cl_personas();

let datos = new Cl_datos("Luis", 15);
let datos2 = new Cl_datos("Ana", 19);
let datos3 = new Cl_datos("Jose", 21);
let datos4 = new Cl_datos("Carmen", 17);
let datos5 = new Cl_datos("Rosa", 18);
let datos6 = new Cl_datos("Jose", 22);
let datos7 = new Cl_datos("Maria", 17);
let datos8 = new Cl_datos("Luz", 19);
let datos9 = new Cl_datos("Rafael", 23);
let datos10 = new Cl_datos("Liz", 15);
let datos11 = new Cl_datos("Marcos", 20);
let datos12 = new Cl_datos("Leo", 16);

personas.procesarDatos(datos);
personas.procesarDatos(datos2);
personas.procesarDatos(datos3);
personas.procesarDatos(datos4);
personas.procesarDatos(datos5);
personas.procesarDatos(datos6);
personas.procesarDatos(datos7);
personas.procesarDatos(datos8);
personas.procesarDatos(datos9);
personas.procesarDatos(datos10);
personas.procesarDatos(datos11);
personas.procesarDatos(datos12);

let salida = document.getElementById("salida");
salida.innerHTML += "El porcentaje de mayores de edad es de: " + personas.porcentajeMayores() + " %";