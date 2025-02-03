import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <article className="flex h-screen">
      <section className="bg-white h-screen w-[40%] flex flex-col justify-center items-center text-center">
        <div className="">
          <span className="bg-red-300 h-40 w-40">
            <img
              className="object-cover w-full h-full"
              src="/brand_icon.png"
              alt=""
            />
          </span>
        </div>
      </section>

      <section className="bg-[#892121] w-[60%] text-white flex flex-col justify-center items-center">
        <Outlet />
      </section>
    </article>
  );
}
