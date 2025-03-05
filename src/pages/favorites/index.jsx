import { useContext } from "react";
import { FavItemContext } from "../../context/favItem";

export default function Favorites() {
  const { favItems } = useContext(FavItemContext);

  return (
    <article className="p-10 flex flex-col gap-10">
      <header className="flex flex-col gap-10">
        <h1 className="text-3xl font-bold">My Favorites</h1>
        <hr className="bg-[#ad2c2c] h-1 border-none" />
      </header>

      <section className="flex flex-wrap gap-5 items-center">
        {favItems.map((item, index) => (
          <div
            key={index}
            className="h-72 w-72 bg-[rgba(255,255,255,0.3)] rounded-2xl flex justify-center items-center"
          >
            {item}
          </div>
        ))}
      </section>
    </article>
  );
}
