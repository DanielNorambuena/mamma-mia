import React, { useContext } from 'react'
import ContextoGlobal from '../contexts/ContextoGlobal';
import { Button, Container } from 'react-bootstrap';
import { calculaTotalPedido } from '../utils/utils.js';

const Carrito = () => {

  const { pizzasPedidas, totalPedido, setPizzasPedidas, setTotalPedido } = useContext(ContextoGlobal);

  const disminuirCantidad = (id) => {
    const idx = pizzasPedidas.findIndex((p) => p.id === id);

    if (idx >= 0) {
      if (pizzasPedidas[idx].cant > 0) {
        pizzasPedidas[idx].cant -= 1;
        if (pizzasPedidas[idx].cant === 0) {
          pizzasPedidas.splice(idx, 1);
        }

        setPizzasPedidas([...pizzasPedidas]);
      }
    }
    setTotalPedido(calculaTotalPedido(pizzasPedidas));
  }

  const aumentarCantidad = (id) => {
    const idx = pizzasPedidas.findIndex((p) => p.id === id);

    if (idx >= 0) {
      pizzasPedidas[idx].cant += 1;
      setPizzasPedidas([...pizzasPedidas]);
    }
    setTotalPedido(calculaTotalPedido(pizzasPedidas));
  }

  return (
    <div >
      <Container>
        <h2 style={{ marginTop: "40px" }}> Detalle del Pedido:</h2>
        {
          pizzasPedidas.map((p) =>
            <>
              <div key={p.id} className='cantidades-container'>
                <div className='pedido-container'>
                  <img src={p.img} alt="" width={"100px"} />
                  <h5 style={{ marginLeft: "20px" }}>{p.name}</h5>
                </div>
                <div className='pedido'>
                  <strong style={{ marginRight: "15px", color: "green" }}>$ {(p.price * p.cant)}</strong>
                  <Button variant="danger" style={{ height: "35px" }} onClick={() => disminuirCantidad(p.id)} >-</Button>
                  <strong style={{ margin: "20px" }}>{p.cant}</strong>
                  <Button variant="primary" style={{ height: "35px" }} onClick={() => aumentarCantidad(p.id)} >+</Button>
                </div>
              </div>
              <hr />
            </>
          )
        }

        <h3>Total: ${totalPedido.toLocaleString('es-CL')}</h3>
        <Button variant='success'>Ir a pagar</Button>
      </Container>
    </div>
  )
}

export default Carrito