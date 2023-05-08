import { Link } from "react-router-dom";

const Aboutpage = () => {
    return (<div>
        <h1>О нашем заведении</h1>
        <p>Самое лучшее заведение</p>

        <Link to="contacts">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Контакты
            </button>
        </Link>
    </div>
    );
};
export default Aboutpage;