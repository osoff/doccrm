import { donot } from "@constants";
import DoCard from "./DoCard";

function Donot() {
  return (
    <div className="flex flex-col gap-10 items-center">
      <h2 className="headtext text-center">
        Внутри
        <span className=" text-primary-blue"> всё, что важно врачам</span>
      </h2>
      {donot.map((act, _id) => (
        <DoCard
          title={act.title}
          description={act.description}
          img={act.img}
          key={_id}
        />
      ))}
    </div>
  );
}

export default Donot;
