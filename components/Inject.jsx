"use client";

import { sendMessage } from "@hooks/sendmessage";
import { useLocalStorage } from "@hooks/useLocalStorage";
import Image from "next/image";
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Inject() {
  const [isSended, setIsSended] = useLocalStorage(false, "isSended");
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
  });
  const { errors } = formState;
  async function onSubmit({ name, phone, email }) {
    await sendMessage(
      `Отправлена форма %0AИмя:${name} %0AТелефон:${
        phone ? phone : "не указан"
      } %0AEmail: ${email} %0A${
        localStorage.getItem("tarif")
          ? `Тариф:` + localStorage.getItem("tarif")
          : ""
      }`
    );
    setIsSended(true);
    toast.success("Запрос успешно принят!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <div className=" flex flex-col text-center  lg:flex-row gap-10 justify-center items-center">
      <div className=" flex flex-col gap-8 items-center px-5 lg:px-20">
        <h2 className="headtext">
          Пора внедрять <span className=" text-primary-blue">DocCRM</span>
        </h2>
        <p className="othertext">
          Расскажем подробности и предоставим бесплатный доступ
        </p>
        <Image src={"/wolf.svg"} alt="wolf" width={493} height={221} />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex-1 flex flex-col gap-2 w-full text-lg font-light max-w-[460px] p-12 shadow rounded-2xl"
      >
        <div className=" grid  grid-rows-2 items-center  ">
          <input
            {...register("name", {
              required: "Укажите имя",
            })}
            placeholder="Как вас зовут *"
            className=" border-b px-2 py-1 transition-all duration-200 outline-none focus:border-primary-blue border-black "
          />
          {errors?.name?.message && (
            <p className=" text-red-500">{errors?.name?.message}</p>
          )}
        </div>
        <div className=" grid  grid-rows-2 items-center  ">
          <input
            {...register("phone")}
            placeholder="Ваш телефон"
            className=" border-b px-2 py-1 transition-all duration-200 outline-none focus:border-primary-blue border-black "
          />
        </div>
        <div className=" grid  grid-rows-2 items-center  ">
          <input
            {...register("email", {
              required: "Укажите почту",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Введите корректный email",
              },
            })}
            placeholder="Email *"
            className=" border-b px-2 transition-all duration-200 py-1 focus:border-primary-blue outline-none border-black"
          />
          {errors?.email?.message && (
            <p className=" text-red-500">{errors?.email?.message}</p>
          )}
        </div>
        <div className="  flex justify-center">
          <button
            type="submit"
            disabled={isSended}
            className="animbtn disabled:bg-gray-500 disabled:text-white  bg-[#02ce79]"
          >
            Оставить заявку
          </button>
        </div>
        <p className=" text-xs text-gray-400 mt-3">
          Регистрируясь, вы подтверждаете, что принимаете Лицензионное
          соглашение и соглашаетесь на обработку персональных данных
        </p>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Inject;
