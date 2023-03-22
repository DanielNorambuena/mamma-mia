import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import ContextoGlobal from '../contexts/ContextoGlobal';

function CardPizza({ pizza }) {

    const navigate = useNavigate();

    const { agregarPizza } = useContext(ContextoGlobal);

    const verDetalle = () => {
        navigate(`/detalle/${pizza.id}`)
    }


    return (
        <Card style={{ width: '20rem', marginTop: '1em' }}>
            <Card.Img variant="top" src={pizza.img} />
            <Card.Body>
                <Card.Title className='let'><p>{pizza.name}</p></Card.Title>
                <div>
                    <hr />
                    <h5>Ingredientes</h5>
                    <ul style={{ listStyleType: 'none' }}>
                        {
                            pizza.ingredients.map((i) => <li key={i}>🍕 {i}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <h4>$ {pizza.price.toLocaleString('es-CL')}</h4>
                </div>
                <div className="button-container">
                    <Button variant="info" onClick={() => verDetalle()} style={{ margin: '1em' }} >Ver Más👀</Button>
                    <Button variant="danger" onClick={() => agregarPizza(pizza)} style={{ margin: '1em' }} >Añadir🛒</Button>
                </div>
            </Card.Body>
        </Card>



    );
}

export default CardPizza;