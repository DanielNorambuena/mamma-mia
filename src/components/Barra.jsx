import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import ContextoGlobal from '../contexts/ContextoGlobal';

const Barra = () => {

  const { totalPedido } = useContext(ContextoGlobal);
  const totalPedidoMoneda = totalPedido.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });

  return (

    <div className="barra-container">
      <NavLink
        className={({ isActive }) => (isActive ? "viewActive" : "view")}
        to="/" >
        🍕 Pizzería Mamma Mia!
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "viewActive" : "view")}
        to="/carrito" >
        🛒 Mi Carrito {totalPedidoMoneda}
      </NavLink>
    </div>

  )
}

export default Barra