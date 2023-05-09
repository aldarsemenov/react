import logo from './logo.svg';
import './App.css';
import Menu from './pages/MenuPage';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MainMenu from './components/Mainmenu';

function App() {

  const [cart, setCart] = useState([])
  
  const addToCard = item => {
    setCart([...cart, item])
  }
  

  return (
    <div className=" container mx-auto">
<div className="italic mx-auto text-6xl container bg-sky-600 p-10">Кафе</div>
      <MainMenu/>
      <div className="mx-auto container flex flex-row-reverse text-right">
      
        <div>
          <div className="border-8 p-1 container">
          <div className="font-bold text-xl">Корзина</div>
          <div>Количество {cart.length} </div>
          <div>Сумма {cart.reduce((sum,item) => (sum +=item.cost),0 )} </div>
          </div>
        </div>
      </div>
      
      <Outlet></Outlet>
      
    </div >
  );
}

export default App;
