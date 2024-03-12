"use client";
import { sendMessage } from "@hooks/sendmessage";
import TarifCard from "./TarifCard";

function Tarifs() {
  return (
    <div className=" flex flex-col items-center gap-10">
      <h2 className=" headtext text-center">Подписка</h2>
      <div className=" flex flex-col lg:flex-row px-2 gap-10 justify-center items-center">
        <TarifCard
          price={0}
          days={"14 дней"}
          main={false}
          click={() => {
            localStorage.setItem("tarif", "30 days");
            sendMessage("Клик на тариф 30 дней");
          }}
        />
        <TarifCard
          price={1200}
          days={"3 месяца"}
          forUser={120}
          main={true}
          click={() => {
            localStorage.setItem("tarif", "3 months");
            sendMessage("Клик на тариф 3 месяца");
          }}
        />
        <TarifCard
          price={1000}
          discount
          days={"12 месяцев"}
          forUser={100}
          main={false}
          click={() => {
            localStorage.setItem("tarif", "12 months");
            sendMessage("Клик на тариф 12 месяцев");
          }}
        />
      </div>
    </div>
  );
}

export default Tarifs;
