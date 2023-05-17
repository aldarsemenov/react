import { useOutletContext } from "react-router-dom";
import Menucard from "../../components/Menucard";
import menu from "../../fakeData/menu";


const Menu = () => {
 

  return (
    <div className="mx-auto grid  gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  container">
      {menu.map((item) => (
        <Menucard item={item} />
      ))}
    </div>
  );
}

export default Menu;