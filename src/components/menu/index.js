import Menucard from "./Menucard";


const Menu = ({ onItemBuy }) => {

  let menu = [

    {
      name: "Поджарка",
      ing: ["potato", "farsh", "onion"],
      cost: 150,
      image: "/assets/podjarka.jpeg"

    },
    {
      name: "Лагман",
      ing: ["makaron", "potato", "beef"],
      cost: 200,
      image: "/assets/lagman.jpeg"
    },
    {
      name: "Пицца",
      ing: ["cheese", "chicken", "onion", "testo"],
      cost: 300,
      image: "/assets/pizza.jpeg"
    },
    {
      name: "Овощной салат",
      ing: ["tomato", "cucumber"],
      cost: 60,
      image: "/assets/salat.jpeg"
    },
    {
      name: "Котлеты",
      ing: ["cabbage", "onion"],
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