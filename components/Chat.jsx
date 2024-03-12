"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { slider } from "@constants";
import { Autoplay } from "swiper/modules";

function Chat() {
  return (
    <div className=" flex flex-col items-center gap-10">
      <h2 className="headtext text-center">Один чат для всех пациентов</h2>
      <p className="secondtext text-center max-w-3xl">
        Люди хотят общаться с врачом, там где им удобно. Дайте им такую
        возможность. DocCRM объединит в одном интерфейсе все каналы коммуникации
        с пациентами
      </p>
      <div className=" w-full flex items-center relative">
        <div className="absolute z-20 bg-white hidden lg:block   px-8">
          <Image
            src={"/magic.svg"}
            alt="magic"
            width={502}
            height={355}
            className=""
          />
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          loop={true}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            696: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1300: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className=" w-full relative"
        >
          {slider.map((slide) => (
            <SwiperSlide key={slide.title}>
              <div className=" min-h-[300px] bg-[#f5f6f8] py-14 px-16 flex flex-col justify-center items-center gap-3 rounded-3xl">
                <Image
                  src={slide.img}
                  width={96}
                  height={96}
                  alt={slide.title}
                />
                <p className=" secondtext text-center font-medium">
                  {slide.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Chat;
