import { Link } from "react-router-dom";
import style from "./Menucard.module.css";
import { addToCart } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";

const MenuCard = ({ item }) => {
    const dispatch = useDispatch();
    console.log(item)
    const ingrigients = (
        <div className="">{item.attributes.ingredients.join(", ")}</div>
    );

    return (
        <div className="rounded overflow-hidden shadow-lg ">
            <img  
            src={
                "http://localhost:1337" + 
                item?.attributes?.image?.data?.attributes?.formats?.small?.url}
                className="w-full"
                 />
            <Link to={`/catalog/${item.id}`}>
                <div className={"text-2xl p-2 font-bold px-" + style.card}>{item?.attributes?.name}</div>
            </Link>

            <div >{ingrigients}</div>
            <div className="font-bold p-2 container flex flex-row-reverse text-right">Стоимость : {item?.attributes?.price + " руб"}</div>

            <button onClick={() => dispatch(addToCart(item))} class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Добавить в корзину
            </button>

        </div>



    );
};

export default MenuCard;