export default function Home() {
  return (
    <div className="h-50vh flex flex-col justify-center items-center pt-50 gap-10">
      <h1 className="text-4xl">Welcome to the home page</h1>
      <div>
        <button className="bg-amber-600 text-white text-2xl font-bold py-5 px-10 cursor-pointer hover:bg-amber-400 transition-all duration-200 rounded-lg">
          Log out
        </button>
      </div>
    </div>
  );
}
