"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

function ForWhom() {
  return (
    <div className=" flex flex-col items-center gap-10">
      <h2 className=" headtext text-center">Подходит врачам из онлайна</h2>
      <p className="secondtext text-center max-w-[600px]">
        DocCRM подойдёт врачам, которые уже консультируют или только начинают
        работать дистанционно. Загрузите собственную базу пациентов, а DocCRM
        поможет конвертировать её в платные консультации.
      </p>
      <Image src={"/audience.svg"} width={1069} height={324} alt="audience" />
      <button>
        <Link
          href={"#form"}
          className="animbtn"
          onClick={() => {
            _tmr.push({
              type: "reachGoal",
              id: 3493947,
              goal: "JUMP_TO_FORM",
            });
          }}
        >
          Зарегистрироваться
          <FaArrowRight className=" ml-4" />
        </Link>
      </button>
    </div>
  );
}

export default ForWhom;
