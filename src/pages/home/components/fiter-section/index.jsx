export default function FilterSection({ filterItems }) {
  return (
    <section id="filter" className="flex gap-10 items-center py-10">
      {filterItems.map((item) => (
        <div
          key={item.name}
          className="bg-white p-5 flex flex-col items-center gap-2 rounded-2xl cursor-pointer hover:scale-105 hover:bg-[#892121] hover:text-white transition-all duration-150"
        >
          <item.icon size={25} />
          <h2 className="font-medium">{item.name}</h2>
        </div>
      ))}
    </section>
  );
}
