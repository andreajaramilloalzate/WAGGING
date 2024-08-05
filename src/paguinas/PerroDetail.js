import React from 'react';
import { useParams } from 'react-router-dom';
import perroData from './PerroData'; // Asegúrate de que la ruta sea correcta
import './PerroDetail.css'; 
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
function PerroDetail() {
  const { id } = useParams(); // Obtén el parámetro de la URL
  const perro = perroData[parseInt(id)]; // Convierte el parámetro en un número entero para buscar el perro correspondiente

  if (!perro) {
    return <div>Perro no encontrado</div>; // Maneja el caso en que no se encuentra el perro
  }

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


    <div className="section">
        <div className="container product">
            <div className="product_card">
                <div className='product_gallery'>
                     <img src={perro.image} alt={perro.name} />
                </div>
                <div className="product_details">
                     <div className='card_body_title card_name_2'> <h2>{perro.name}</h2></div>

                     <div className='products_btns'>
                        <Link to='/contacto' className='btn btn_outlined_2'>Contactanos</Link>
                     </div>
                     <ul className='product_list'>
                        <li className='product_item'>
                             <p className='product_item_key'>Género</p>
                             <p className='product_item_value'>:{perro.gender}</p>
                        </li>
                        <li className='product_item'>
                             <p className='product_item_key'>Edad</p>
                             <p className='product_item_value'>:{perro.age} años</p>
                        </li>
                        <li className='product_item'>
                             <p className='product_item_key'>Color</p>
                             <p className='product_item_value'>:{perro.color}</p>
                        </li>
                        <li className='product_item'>
                             <p className='product_item_key'>Ubicación</p>
                             <p className='product_item_value'>:{perro.location}</p>
                        </li>
                        <li className='product_item'>
                             <p className='product_item_key'>informacion adicional</p>
                             <p className='product_item_value'>:{perro.info}</p>
                        </li>

                     </ul>



                </div>
            </div>
      

      {/* Añade más detalles si es necesario */}
      </div>
    </div>
    </div>
  );
}

export default PerroDetail;
