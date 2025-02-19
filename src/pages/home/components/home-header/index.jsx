import { ImSearch } from "react-icons/im";

export default function HomeHeader() {
  return (
    <header className="flex justify-between items-center">
      <h1 className="font-semibold text-4xl">Good Morning User</h1>

      <div className="h-14 bg-white rounded-4xl text-gray-500 flex items-center gap-2 pl-5 pr-10">
        <ImSearch />
        <input
          className="outline-none bg-white"
          type="search"
          placeholder="search"
        />
      </div>
    </header>
  );
}
