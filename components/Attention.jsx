import Image from "next/image";
import Check from "./Check";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

function Attention() {
  return (
    <div className=" flex flex-col gap-10 items-center">
      <h1 className="headtext text-center">
        Все внимание<br></br>
        <span className=" text-primary-blue"> на заботе о пациентах</span>
      </h1>
      <p className=" secondtext max-w-2xl text-center">
        DocCRM создаёт сервисность, с которой врачам легко продавать
        консультации
      </p>
      <div className="flex items-center flex-col xl:flex-row  xl:mt-24">
        <div className=" relative xl:mr-28">
          <Image
            src="/care-badge.svg"
            alt="care"
            width={234}
            height={124}
            className="absolute hidden xl:block -top-[144px] left-12"
          />
          <Image
            src={"/lead-modal.jpg"}
            alt="lead"
            width={640}
            height={424}
            className="rounded-3xl border border-black"
          />
        </div>
        <div className="flex flex-col flex-1 gap-4 mt-6 xl:mt-0 othertext max-w-4xl xl:max-w-none">
          <p>
            Представьте: после оказания медицинской услуги вы звоните пациенту и
            интересуетесь его самочувствием. Проявляете заботу, внимание и в
            итоге получаете клиента на платную консультацию. Так работает
            DocCRM.
          </p>
          <ul className="mt-6 ">
            <li className="flex gap-4 mb-5">
              <Check fill="#2196f3" />
              <p className="flex-1">
                У каждого клиента своя карточка. Врачу легко вести пациента и
                допродавать свои услуги, действуя исходя из контекста и истории
                болезни.
              </p>
            </li>
            <li className="flex gap-4 mb-5">
              <Check fill="#2196f3" />
              <p className="flex-1">
                Не нужно ничего держать в голове. Система сама всё помнит и
                напоминает: кому и когда позвонить, что сказать и предложить.
              </p>
            </li>
            <li className="flex gap-4 mb-5">
              <Check fill="#2196f3" />
              <p className="flex-1">
                CRM заботится о рутине. Пишет сообщения в мессенджеры и по смс,
                ведёт задачи.
              </p>
            </li>
            <li className="flex gap-4 ">
              <Check fill="#2196f3" />
              <p className="flex-1">
                А вы заботитесь о пациентах. Частно консультируете или продаёте
                дополнительные программы наблюдения.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Link href={"#form"} className="animbtn">
        Попробовать DocCRM
        <FaArrowRight className=" ml-4" />
      </Link>
    </div>
  );
}

export default Attention;
