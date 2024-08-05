import React from 'react';

function Contacto (){
    return (
        <div>
            <h2>Contacto</h2>
            <form>
                <input type="text" placeholder="Nombre" required />
                <input type="email" placeholder="Correo electrónico" required />
                <textarea placeholder="Escribe tu mensaje" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
export default Contacto;