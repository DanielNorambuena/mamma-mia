import React, { useContext } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import ContextoGlobal from '../contexts/ContextoGlobal';
import CardPizza from './CardPizza.jsx';

const Galeria = () => {

  const { pizzas } = useContext(ContextoGlobal);

  return (
    <Container>
      <Row md={3}>
        {
          pizzas.map((pizza) => {
            return <Col key={pizza.id}><CardPizza pizza={pizza}></CardPizza></Col>
          })
        }
      </Row>
    </Container>
  )
}

export default Galeria