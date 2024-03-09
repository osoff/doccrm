"use client";

import Check from "./Check";
import Image from "next/image";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

function Descript() {
  const [curImg, setCurImg] = useState(0);
  const imagesForCarousel = [
    "/msg.png",
    "/analytics.png",
    "/notifications.png",
    "/payments.png",
    "/settings.png",
    "/tasks.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (curImg < imagesForCarousel.length - 1) {
        setCurImg((state) => state + 1);
      } else {
        setCurImg(0);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [curImg]);

  return (
    <div className="gap-10 flex flex-col items-center ">
      <h1 className="headtext text-center">Когда таблицы становится мало</h1>
      <p className="secondtext text-center max-w-2xl">
        DocCRM помогает собирать информацию о пациентах в одной системе и
        управлять сервисом. Вы сможете вести работу с базой, вовремя
        обрабатывать заявки и обращения, проявлять заботу о пациентах,
        напоминать о себе и продавать консультации дороже.
      </p>
      <div className="flex justify-center flex-wrap gap-10 ">
        <div className=" flex gap-2 items-center">
          <Check />
          <p className=" text-2xl">Ничего лишнего</p>
        </div>
        <div className=" flex gap-2 items-center">
          <Check />
          <p className=" text-2xl">Легко настроить</p>
        </div>
        <div className=" flex gap-2 items-center">
          <Check />
          <p className=" text-2xl">Просто разобраться</p>
        </div>
      </div>
      <div className="flex items-center  gap-6">
        <button
          onClick={() => setCurImg((state) => state - 1)}
          disabled={curImg <= 0}
          className="hidden md:block"
        >
          <LeftArrow />
        </button>

        <div className="relative w-[369px] h-[230px] sm:w-[498px] sm:h-[311px] lg:w-[678px] lg:h-[423px] xl:w-[918px] xl:h-[573px]  border border-black rounded-3xl  overflow-hidden">
          {imagesForCarousel.map((image, index) => (
            <Image
              key={index}
              src={image}
              fill={true}
              sizes="100vw"
              alt="qwer"
              className={`absolute top-0 left-0 transition-all duration-500 ${
                index === curImg ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurImg((state) => state + 1)}
          disabled={curImg >= imagesForCarousel.length - 1}
          className="hidden md:block"
        >
          <RightArrow />
        </button>
      </div>
      <Link href={"#form"} className="animbtn">
        Попробовать бесплатно
        <FaArrowRight className=" ml-4" />
      </Link>
    </div>
  );
}

export default Descript;
