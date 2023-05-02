import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([])

  const addToCard = item => {
    setCart([...cart, item])
  }


  return (
    <div className="App ">
<div className="italic mx-auto text-6xl conteiner bg-sky-600 p-10">Кафе</div>
      <div className="mx-auto container flex flex-row-reverse text-right">
        <div>
          <div className="border-8 p-1 container">
          <div className="font-bold text-xl">Корзина</div>
          <div>Количество {cart.length} </div>
          <div>Сумма {cart.reduce((sum,item) => (sum +=item.cost),0 )} </div>
          </div>
        </div>
      </div>
      <Menu onItemBuy={(item)=> addToCard(item)}> </Menu>
    </div >
  );
}

export default App;
