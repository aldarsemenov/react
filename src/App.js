import logo from './logo.svg';
import './App.css';
import Menu from './pages/MenuPage';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MainMenu from './components/Mainmenu';
import CartWidget from './components/CartWidget';
import CartProvider from './components/providers/CartProvider';

function App() {

  
  return (
    <div className=" container mx-auto">
      <div className="italic mx-auto text-6xl container bg-sky-600 p-10">Кафе</div>
      <MainMenu />
      <CartProvider>
      <CartWidget />
      </CartProvider>

      <Outlet ></Outlet>

    </div >
  );
}

export default App;
