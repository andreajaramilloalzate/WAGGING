// src/App.js

import React from 'react';
import './Twocomponent.css';
import { Link } from 'react-router-dom';
import comida1 from '../images/comida 1.jpeg';
import comida2 from '../images/comida 2.jpg';
import comida3 from '../images/comida 3.jpg';
import comida4 from '../images/comida 4.jpeg';
import comida5 from '../images/comida 5.webp';
import comida6 from '../images/comida 6.jpeg';
import comida7 from '../images/comida 7.webp';
import comida8 from '../images/comida 8.jpeg';

const ComidaData = [
  { id:1, name: "Max Professional Performance", peso: "2Kg", image: comida1,    tipo:"Adulto",raza: 'Grande' ,linea:'Standard' ,info:'El control y la prevención de la obesidad son fundamentales para el bienestar y la salud de los perros.'},
  { id:2,name: "Chunky Cachorro Pollo",         peso: "3Kg", image: comida2,    tipo:"Pequeño",raza: 'Mediana,Grande',linea:'Standard',info:'Verdadera carne de pollo como fuente principal de proteina y nuggets rellenos con pollo. '},
  { id:3,name: "Hill's Science Diet",           peso: "1kg", image: comida3 ,   tipo:"Adulto",raza: 'Grande',linea:'Standard',info:'es un alimento seco para perros con alto contenido de fibra que ha demostrado clínicamente ayudar a reafirmar las heces sueltas en 24 horas y reducir el riesgo de recurrencia'},
  { id:4,name: "Hill's Prescription Diet r/d",  peso: "2Kg", image: comida4 ,   tipo:"Pequeño",raza: 'Mediana,Grande',linea:'Standard',info:'es un alimento ideal para controlar o reducir el exceso de peso en perros con problemas de obesidad.'},
  { id:5,name: "Agility Gold",                  peso: "1.5Kg", image: comida5 , tipo:"Adulto",raza: 'Mediana',linea:'Standard',info:'Alimento super premium, formulado para el desarrollo completo de razas grandes, las cuales tienen un crecimiento lento, las fibras prebióticas favorecen la salud digestiva, suplementado con taurina para un adecuado funcionamiento cardíaco.'},
  { id:6,name: "Nutra-Nuggets Maintenance",     peso: "1Kg", image: comida6 ,   tipo:"Adulto",raza: 'Mediana,Grande',linea:'Standard',info:'La fórmula de mantenimiento Nutra-Nuggets, para perros adultos con niveles normales de actividad física y perros de rendimiento durante los períodos de descanso, está diseñada para ayudar a satisfacer las demandas nutricionales mientras ayuda a mantener un peso saludable.'},
  { id:7,name: "Monello",                       peso: ":1Kg", image: comida7 ,  tipo:"Adulto",raza: 'Mediana,Grande',linea:'Standard',info:'es un alimento premium especial que atiende todas las necesidades nutricionales de perros adultos'},
  { id:8,name: "Dog Chow",                      peso: "2KG", image: comida8 ,    tipo:"Pequeño",raza: 'Mediana',linea:'Standard',info:'ncuentras una alimentación completa para tu mascota, para más años de vida juntos.'},
]
function Twocomponent() {
  return (
    <div className="row">
          {ComidaData.map((comida, index) => (
              <div className="column" key={index}>
                <Link to={`/comida/${index}`} className="comida-link">
                <div className="card_2">
                  <img src={comida.image} alt={comida.image} />
                  <div className="card_body">
                    <h3 className="card_body_title">{comida.name}</h3>
                    <div className="card_body_details">
                      <div className="card_body_details_gender_2">{comida.gender} </div>
                      <div className="card_body_details_size">tamaño: {comida.peso}</div>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
  );
}

export default Twocomponent;
