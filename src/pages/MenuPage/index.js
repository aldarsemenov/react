import Menucard from "../../components/Menucard";
import menu from "../../fakeData/menu";


const Menu = ({ onItemBuy }) => {

  
  return (
    <div className="mx-auto grid  gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  container">
      {menu.map((item) => (
        <Menucard item={item} onClickBuy={onItemBuy} />
      ))}
    </div>)
}

export default Menu;