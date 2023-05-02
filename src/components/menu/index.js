import Menucard from "./Menucard";


const Menu = ({ onItemBuy }) => {

  let menu = [

    { 
      name: "Поджарка",
      ing: ["Свинина", "лук", "зелень"],
      cost: 150,
      image: "/assets/podjarka.jpeg"

    },
    {
      name: "Лагман",
      ing: ["Макароны", "картошка", "говядина"],
      cost: 200,
      image: "/assets/lagman.jpeg"
    },
    {
      name: "Пицца",
      ing: ["Тесто", "курица", "лук", "помидор"],
      cost: 300,
      image: "/assets/pizza.jpeg"
    },
    {
      name: "Овощной салат",
      ing: ["Помидор", "огурец"],
      cost: 60,
      image: "/assets/salat.jpeg"
    },
    {
      name: "Котлеты",
      ing: ["Кабачок", "лук"],
      cost: 90,
      image: "/assets/kotleti.jpeg"
    }
  ]
  return (
    <div className="mx-auto grid  gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  container">
      {menu.map((item) => (
        <Menucard item={item} onClickBuy={onItemBuy} />
      ))}
    </div>)
}

export default Menu;