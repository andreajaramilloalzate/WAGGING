import logo from '../images/logo.png';
import React from 'react';
import './Layaut.css'
import { Link}  from 'react-router-dom';
function Layaut (){
    return(
        <header className='header'>
        <nav className='nav'>
          <div className='container nav_container'>
            <div className='nav_left'>
              <Link to='/' className='nav_logo'>
                <img src={logo} alt="img" />
              </Link>
            <ul className='nav_list'>
               <li className='nav_item'><Link to='/'className='nav_link'>Casa</Link></li>
               <li className='nav_item'><Link to= './categoria'className='nav_link'>Categoria</Link></li>
              <li className='nav_item'><Link to='./acerca'className='nav_link'>Acerca de</Link></li>   
              <li className='nav_item'><Link to='./contacto'className='nav_link'>Contacto</Link></li>
            </ul>
            </div>
            <div className="nav_right">
              <Link to="/comunidad" className="btn nav_btn ">Sigue Nuestra Comunidad</Link>
            </div>
          </div>
        </nav>
        
        <div className="container header_wrapper_container">
            <div className="header_wrapper">
              <h1 className="header_main_title">Recuerda que todos los peludos merecen una oportunidad</h1>
              <div className="header_btn">
                <Link to="./categoria" className="btn header_btn_outlined">Quiero Adoptar</Link>
              </div>
            </div>
          </div>
      </header>
    );
}
export default Layaut; 