import style from "./Menucard.module.css";

const Menucard = ({ item, onClickBuy = () => { } }) => {
    // const cost = (
    //     <ul className="text-xs ">
    //         {item.cost.map((cost) => (
    //             <>{cost.cost }</>
    //         ))}
    //     </ul>
    // );

    return (
        <div className="rounded overflow-hidden shadow-lg ">
            <img className="object-fill h-48 w-96" src={item.image} />
            <div className={"text-2xl p-3 font-bold px-" + style.card}>{item.name}</div>

            <button onClick={() => onClickBuy(item)} class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Добавить в корзину
            </button>
        </div>



    );
};

export default Menucard;