import { Link } from "react-router-dom";
import style from "./Menucard.module.css";
import { addToCart } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";

const MenuCard = ({ item }) => {
    const dispatch= useDispatch();
    const ingrigients = (
        <div className="">{item.ing.join(", ")}</div>
    );

    return (
        <div className="rounded overflow-hidden shadow-lg ">
            <img className=" object-scale-down h-48 w-96" src={item.image} />
            <Link to = {`/catalog/${item.id}`}>
            <div className={"text-2xl p-2 font-bold px-" + style.card}>{item.name}</div>
            </Link>
            
            <div >{ingrigients}</div>
            <div className="font-bold p-2 container flex flex-row-reverse text-right">Стоимость : {item.cost}</div>
           
            <button onClick={() =>dispatch( addToCart(item))} class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Добавить в корзину
            </button>

        </div>



    );
};

export default MenuCard;