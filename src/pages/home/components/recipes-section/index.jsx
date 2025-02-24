import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import Loader from "../../../../components/basic/loader";

export default function RecipesSection({ filterItems }) {
  return (
    <section id="popular-recipes" className="py-10 h-full">
      <h2 className="text-2xl font-bold">Popular Recipes</h2>

      <div className="pt-10 h-full">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {filterItems ? (
            filterItems.map((item) => (
              <SwiperSlide key={item.title}>
                <Link to={item.id}>
                  <div className="h-100 w-80 bg-white rounded-2xl shadow-lg p-4">
                    <div className="w-full h-48 bg-gray-200 rounded-xl mb-4">
                      <img
                        className="object-cover w-full h-full rounded-xl"
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">
                      {item.ingredients.slice(0, 40)}...
                    </p>
                    <p className="pt-5 text-amber-700 text-sm">
                      {item.instructions.slice(0, 50)}...
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))
          ) : (
            <Loader />
          )}
        </Swiper>
      </div>
    </section>
  );
}
