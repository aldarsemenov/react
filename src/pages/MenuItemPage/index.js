import { useParams } from "react-router-dom";
import menu from "../../fakeData/menu";

const MenuItemPage = () => {
    const { id } = useParams();
    let menuItem= menu.find((item)=>item.id==id)
    return (
    <> 
    <h1>   {menuItem.name} </h1> 
    <img className="  object-cover h-96 w-192" src={menuItem.image}></img>
    <p>{menuItem.ing.join(", ")}</p>
    </>
    )
}
export default MenuItemPage;