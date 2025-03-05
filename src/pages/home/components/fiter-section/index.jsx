import { FaHamburger } from "react-icons/fa";
import { useContext } from "react";
import { FavItemContext, addItem } from "../../../../context/favItem";

export default function FilterSection({ filterItems }) {
  const { setFavItems, favItems } = useContext(FavItemContext);

  return (
    <section id="filter" className="flex gap-10 items-center py-10">
      {filterItems &&
        filterItems.map((item) => (
          <div
            key={item.title}
            onClick={() => addItem(favItems, setFavItems, item)}
            className="bg-white p-5 flex flex-col items-center gap-2 rounded-2xl cursor-pointer hover:scale-105 hover:bg-[#892121] hover:text-white transition-all duration-150"
          >
            <FaHamburger size={25} />
            <h2 className="font-medium">{item.title.slice(0, 7)}</h2>
          </div>
        ))}
    </section>
  );
}
