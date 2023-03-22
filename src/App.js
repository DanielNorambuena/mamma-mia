import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home.jsx";
import Carrito from "./views/Carrito.jsx";
import Detalle from "./views/Detalle.jsx";
import { useEffect, useState } from "react";
import ContextoGlobal from "./contexts/ContextoGlobal.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from "./components/Barra.jsx";
import Footer from "./components/Footer.jsx";


function App() {

  const [pizzas, setPizzas] = useState([]);
  const [pizzasPedidas, setPizzasPedidas] = useState([]);
  const [totalPedido, setTotalPedido] = useState(0);

  const getPizzas = async () => {
    const res = await fetch(`http://localhost:3000/pizzas.json`);
    const data = await res.json();

    setPizzas(data);
  }

  const agregarPizza = (pizza) => {
    const idx = pizzasPedidas.findIndex((p) => p.id === pizza.id);

    if (idx > -1) {
      pizzasPedidas[idx].cant += 1;
      setPizzasPedidas([...pizzasPedidas]);
    } else {
      const pizzaSeleccionada = {
        id: pizza.id,
        name: pizza.name,
        price: pizza.price,
        img: pizza.img,
        cant: 1
      };
      setPizzasPedidas([...pizzasPedidas, pizzaSeleccionada]);
    }

    setTotalPedido(totalPedido + pizza.price);

  }


  useEffect(() => {
    getPizzas();
  }, []);


  return (
    <div className="App">
      <ContextoGlobal.Provider value={{ pizzas, pizzasPedidas, setPizzasPedidas, setTotalPedido, totalPedido, agregarPizza }}>
        <BrowserRouter>
          <Barra></Barra>
          <Routes>
            <Route path="/" element={<Home></Home>}> </Route>
            <Route path="/carrito" element={<Carrito></Carrito>}></Route>
            <Route path="/detalle/:id" element={<Detalle></Detalle>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </ContextoGlobal.Provider>
    </div>
  );
}

export default App;
