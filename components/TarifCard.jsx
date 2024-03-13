"use client";

import Link from "next/link";

function TarifCard({
  click,
  main = false,
  days,
  price,
  discount = false,
  forUser,
}) {
  return (
    <Link
      href={"#form"}
      onClick={click}
      className={`flex hover:scale-110 duration-300 cursor-pointer transition-all flex-col shadow rounded-3xl py-7 px-4 ${
        main ? "bg-primary-blue" : "bg-white"
      } max-w-[60%] lg:max-w-[25%] xl:max-w-[20%] ${
        main ? "text-white" : "text-black"
      }`}
    >
      <div className="flex items-center justify-center gap-3">
        <p className=" text-center text-2xl font-semibold  ">{days}</p>
        {discount && (
          <span className=" text-xs p-1 px-2 bg-[#F54E67] text-white rounded-xl">
            -20%
          </span>
        )}
      </div>
      <p className=" text-center text-2xl mt-10">{price} RUB</p>
      <p className="text-center">
        Все возможности системы без ограничений (до 5 пользователей
        {forUser && `${" + " + forUser + " Руб за пользователя"}`})
      </p>
      <button
        className={`mt-20 px-3 py-2 ${
          main ? "bg-white text-primary-blue" : "bg-primary-blue text-white"
        } rounded-full`}
      >
        Попробовать
      </button>
    </Link>
  );
}

export default TarifCard;
