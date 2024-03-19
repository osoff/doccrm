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
      className={` hover:scale-110 duration-300 cursor-pointer transition-all  shadow rounded-3xl flex flex-col justify-between h-[344px] px-[15px] py-[30px] ${
        main ? "bg-primary-blue" : "bg-white"
      } max-w-[290px]  ${main ? "text-white" : "text-black"}`}
    >
      <div className=" text-balance">
        <div className="flex items-center justify-center gap-3">
          <p className=" text-center text-2xl font-semibold  ">{days}</p>
          {discount && (
            <span className=" text-xs p-1 px-2 bg-[#F54E67] text-white rounded-xl">
              -20%
            </span>
          )}
        </div>
        <p className=" text-center text-2xl mt-6">{price} RUB</p>
        <p className="text-center mt-2">
          Все возможности системы без ограничений
        </p>
        <p className="text-center mt-2">до 5 пользователей</p>
        <p className="text-center">
          {" "}
          {forUser && `${" + " + forUser + " Руб за пользователя"}`}
        </p>
      </div>
      <button
        className={`px-3 py-2 ${
          main ? "bg-white text-primary-blue" : "bg-primary-blue text-white"
        } rounded-full`}
        onClick={() => {
          _tmr.push({
            type: "reachGoal",
            id: 3493947,
            goal: "JUMP_TO_FORM",
          });
        }}
      >
        Попробовать
      </button>
    </Link>
  );
}

export default TarifCard;
