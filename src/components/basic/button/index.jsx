export default function Button({ text, isDisabled = true }) {
  return (
    <button
      disabled={isDisabled}
      className={`w-full px-7 py-5 font-bold transition-all duration-300 hover:scale-105 ${
        isDisabled
          ? "bg-transparent cursor-not-allowed"
          : "bg-[#be2e2e] cursor-pointer"
      }`}
    >
      {text}
    </button>
  );
}
