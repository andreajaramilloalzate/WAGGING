import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import './App.css';
import MyComponent from './components/MyComponent.js';
import Twocomponent from './components/Twocomponent.js';
import logo1 from './images/logos/logo1.png';
import logo2 from './images/logos/logo2.png';
import logo3 from './images/logos/logo3.png';
import logo4 from './images/logos/logo4.png';
import logo5 from './images/logos/logo5.jpg';
import logo6 from './images/logos/logo6.png';
import logo7 from './images/logos/logo7.png';
import Layaut from './paguinas/Layaut.js';
import Contacto from './paguinas/Contacto.js';
import Categoria from './paguinas/Categoria.js';
import Acerca from './paguinas/Acerca.js';
import Comunidad from './paguinas/Comunidad.js';
  import PerroDetail from './paguinas/PerroDetail.js';
import ComidaDetail from './paguinas/ComidaDetail.js';
import Comida from './paguinas/Comida.js';

function App() {
  const location = useLocation();
  const [showExtraContent, setShowExtraContent] = useState(true);

  useEffect(() => {
    // Si la ruta no es la raíz, ocultar el contenido extra
    if (location.pathname !== '/') {
      setShowExtraContent(false);
    } else {
      setShowExtraContent(true);
    }
  }, [location]);

  return (
    <div>
      {location.pathname === '/' && <Layaut />}
      <Routes>
        <Route path="/" element={<HomePage showExtraContent={showExtraContent} />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="categoria" element={<Categoria />} />
        <Route path="acerca" element={<Acerca />} />
        <Route path="comunidad" element={<Comunidad />} />
        <Route path="comida" element={<Comida />} />
        <Route path="/perro/:id" element={<PerroDetail />} /> 
        <Route path="/comida/:id" element={<ComidaDetail />} /> 

      </Routes>
    </div>
  );
}

function HomePage({ showExtraContent }) {
  return (
    <>
      {showExtraContent && (
        <>
          <section className="section">
            <div className="container">
              <div className="section_header">
                <div className="section_header_left">
                  <p className="section_header_p">¿Qué hay de nuevo?</p>
                  <h2 className="section_header_h2">Echa un vistazo a algunas de nuestras mascotas</h2>
                </div>
                <div className="section_header_right">
                  <Link to="/categoria" className="btn btn_outlined">Ver más &rarr;</Link>
                </div>
              </div>
            </div>
          </section>

          <MyComponent />

          <section className="section_2">
            <div className="container_2">
              <div className="section_header">
                <div className="section_header_left">
                  <p className="section_header_p_2">Te recomendamos</p>
                  <h4 className="section_header_h2">Echa un vistazo a algunas opciones para tu perro</h4>
                </div>
                <div className="section_header_right">
                  <Link to="/comida" className="btn_segundo btn">Ver más &rarr;</Link>
                </div>
              </div>
            </div>
          </section>

          <Twocomponent />

          <section className="section_3">
            <div className="container_3">
              <div className="section_header">
                <div className="section_header_left">
                  <p className="section_header_p">Orgulloso de ser parte de los</p>
                  <h2 className="section_header_h2">adoptadores de mascotas</h2>
                </div>
                <div className="section_header_right">
                  <a href="." className="btn btn_outlined">Ver más &rarr;</a>
                </div>
              </div>
              <div className="logos_container">
                <img src={logo1} alt="" className="logos_logo" />
                <img src={logo2} alt="" className="logos_logo" />
                <img src={logo3} alt="" className="logos_logo" />
                <img src={logo4} alt="" className="logos_logo" />
                <img src={logo5} alt="" className="logos_logo" />
                <img src={logo6} alt="" className="logos_logo" />
                <img src={logo7} alt="" className="logos_logo" />
              </div>
            </div>
          </section>

          <footer className="footer">
            <div className="container footer_container">
              <div className="footer_top">
                <h2 className="footer_top_heading">Regístrate ahora para no perderte nuestros programas</h2>
                <form action="." className="footer_top_form">
                  <input type="text" className="footer_top_form_input" />
                  <button className="btn footer_top_form_btn">Regístrate</button>
                </form>
              </div>
              <div className="footer_middle">
                <div className="footer_middle_menu">
                  <nav className="nav">
                    <div className="container nav_container footer_nav_container">
                      <div className="nav_left">
                        <ul className="nav_list">
                          <li className="nav_item"><a href="." className="nav_link">Casa</a></li>
                          <li className="nav_item"><a href="." className="nav_link">Categoría</a></li>
                          <li className="nav_item"><a href="." className="nav_link">Acerca de</a></li>
                          <li className="nav_item"><a href="." className="nav_link">Contacto</a></li>
                        </ul>
                      </div>
                      <div className="nav_right_2">
                        <svg className="logo_face" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z"/>
                        </svg>
                      </div>
                    </div>
                  </nav>
                  <div className="footer_middle_social"></div>
                </div>
                <div className="footer_bottom">
                  <div className="footer_copyright">Copyright © 2024 Company, Inc. All rights reserved.</div>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
}

export default App;
