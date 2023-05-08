import { Link } from "react-router-dom"

const Mainmenu =() =>{
    let menuItems= [
        {title: "Главная", link : "/"},
        {title: "О нac", link:"/about"}

    ]
    return (
        <div className="flex gap-6">
            {menuItems.map((item)=>(
                <Link to = {item.link}>{item.title}</Link>
            ))}

        </div>

    );
    
}
export default Mainmenu;