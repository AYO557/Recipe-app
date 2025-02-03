export default function Button({ text }) {
  return (
    <button className="w-full bg-[#b62e2e] px-7 py-5 font-bold cursor-pointer hover:bg-[#6b3131] transition-all duration-300 hover:scale-105">
      {text}
    </button>
  );
}
