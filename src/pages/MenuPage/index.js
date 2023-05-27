import { useOutletContext } from "react-router-dom";
import Menucard from "../../components/Menucard";
import { useDispatch, useSelector } from "react-redux";
import { loadMenu } from "../../store/slices/menuSlice";
import { useEffect } from "react";
import LoadingError from "../../components/LoadingError";


const Menu = () => {
  const dispatch = useDispatch();
  const menu = useSelector(state => state.menu)

  useEffect(() => {
    dispatch(loadMenu())
  }, [])
  return (
    <>
      {menu.loading == "fulfilled" && (
        <div className="mx-auto grid  gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  container">
          {menu.items.map((item) => (
            <Menucard item={item} />
          ))}
        </div>
      )}
      {menu.loading == "pending" && <div className="flex justify-center items-center h-[70vh]">Загрузка.....</div>}
      {menu.loading == "rejected" && <LoadingError message="Произошла ошибка при загрузке данных меню"/>}
    </>
  );
}

export default Menu;