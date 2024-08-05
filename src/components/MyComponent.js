// src/components/MyComponent.js

import React from 'react';
import './Mycomponent.css';
import perro1 from '../images/perro 1.jpg';
import perro2 from '../images/perro 2.jpg';
import perro3 from '../images/perro 3.jpeg';
import perro4 from '../images/perro 4.jpg';
import perro5 from '../images/perro 5.jpeg';
import perro6 from '../images/perro 6.jpeg';
import perro7 from '../images/perro 7.jpg';
import perro8 from '../images/perro 8.webp';
import { Link } from 'react-router-dom';

const perroData = [
  {image: perro1, name: 'Doberman',gender: 'Macho',age:'5'},
  {image: perro2, name: 'Pog',gender: 'Macho',age:'3'},
  {image: perro3, name: 'Golde Retriver',gender: 'Macho',age:'7'},
  {image: perro4, name: 'Shih Tzu',gender: 'hembra',age:'2'},
  {image: perro5, name: 'Pastor Aleman',gender: 'Macho',age:'4'},
  {image: perro6, name: 'Pomerania',gender: 'hembra',age:'2'},
  {image: perro7, name: 'Schnauzer Estandar',gender: 'Macho',age:'5'},
  {image: perro8, name: 'Bulldog',gender: 'hembra',age:'3'},
];
function MyComponent() {
  return (  
    <div className="row row_category">
    {perroData.map((perro, index) => (
      <div className="column" key={index}>
        <Link to={`/perro/${index}`} className="perro-link">
          <div className="card card_category">
            <img src={perro.image} alt={perro.name} />
            <div className="card_body">
              <h3 className="card_body_title card_name">{perro.name}</h3>
              <div className="card_body_details">
                <div className="card_body_details_gender">Género: {perro.gender}</div>
                <div className="card_body_details_age">Edad: {perro.age} Años</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>
  );
}

export default MyComponent;
