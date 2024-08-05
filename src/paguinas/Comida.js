import React from 'react';
import { Link } from 'react-router-dom';
import './categoria.css';
import ComidaData from './ComidaData'; // Asegúrate de que este archivo exporte los datos del perro
import logo from '../images/logo.png';
function Comida () {
  return (
    <div>
      <header className='header header_category'>
        <nav className='nav nav_category'>
          <div className='container nav_container'>
            <div className='nav_left'>
              <Link to='/' className='nav_logo'>
                <img src={logo} alt="img" />    
              </Link>
              <ul className='nav_list'>
                <li className='nav_item'><Link to='/' className='nav_link'>Casa</Link></li>
                <li className='nav_item'><Link to='./categoria' className='nav_link'>Categoria</Link></li>
                <li className='nav_item'><Link to='./acerca' className='nav_link'>Acerca de</Link></li>
                <li className='nav_item'><Link to='./contacto' className='nav_link'>Contacto</Link></li>
              </ul>
            </div>
            <div className="nav_right">
              <Link to="/comunidad" className="btn nav_btn">Sigue Nuestra Comunidad</Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="row row_category">
        {ComidaData.map((comida, index) => (
          <div className="column" key={index}>
            <Link to={`/comida/${index}`} className="comida-link">
              <div className="card card_category">
                <img src={comida.image} alt={comida.name} />
                <div className="card_body">
                  <h3 className="card_body_title card_name">{comida.name}</h3>
                  <div className="card_body_details">
                    <div className="card_body_details_gender">Género: {comida.gender}</div>
                    <div className="card_body_details_age">Edad: {comida.age} Años</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comida;
