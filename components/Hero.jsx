"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

function Hero() {
  return (
    <div className="flex gap-2 flex-col-reverse items-center  lg:flex-row">
      <div className="flex flex-col gap-12 lg:max-w-[45%] max-w-[540px] md:max-w-[720px]">
        <h1 className="headtext">
          CRM-система
          <span className=" text-primary-blue "> для врачей, </span>
          которые консультируют
          <span> онлайн</span>
        </h1>
        <div className="  max-w-[560px] secondtext">
          Сформируйте собственный поток пациентов из тех, кто проходил или
          проходит лечение. Управляйте врачебным сервисом, консультируйте в
          удобном для себя графике и зарабатывайте больше с DocCRM.
        </div>
        <Link href={"#form"}>
          <div className=" flex justify-center sm:block">
            <button
              className="animbtn"
              onClick={() => {
                _tmr.push({
                  type: "reachGoal",
                  id: 3493947,
                  goal: "JUMP_TO_FORM",
                });
              }}
            >
              Попробовать DocCRM
              <FaArrowRight className=" ml-4" />
            </button>
          </div>
        </Link>
      </div>
      <div className=" ">
        <Image
          src={"hero.svg"}
          width={800}
          height={400}
          alt="hero"
          className="relative z-0 transition-all h-[100%] max-h-[307px] lg:max-h-none"
        />
      </div>
    </div>
  );
}

export default Hero;
