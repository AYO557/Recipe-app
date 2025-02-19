import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import burger_image from "../../../../assets/images/burger_image.jpg";
import { Link } from "react-router-dom";

export default function RecipesSection({ filterItems }) {
  return (
    <section id="popular-recipes" className="py-10">
      <h2 className="text-2xl font-bold">Popular Recipes</h2>

      <div className="pt-10">
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
          {filterItems.map((item) => (
            <SwiperSlide key={item.name}>
              <Link to={item.name}>
                <div className="h-100 w-80 bg-white rounded-2xl shadow-lg p-4">
                  <div className="w-full h-48 bg-gray-200 rounded-xl mb-4">
                    <img
                      className="object-cover w-full h-full rounded-xl"
                      src={burger_image}
                      alt=""
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">
                    Description for recipe {item.name}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
