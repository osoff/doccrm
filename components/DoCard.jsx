import Image from "next/image";
import Link from "next/link";

function DoCard({ title, description, img }) {
  return (
    <div className=" max-w-5xl md:top-20 md:sticky bg-white py-5 md:py-10 md:my-10">
      <Image
        src={"/past-painted-label.svg"}
        width={164}
        height={153}
        alt="donot"
      />
      <div className="flex text-center md:text-left flex-col-reverse md:flex-row items-center gap-4 md:gap-16">
        <div className=" flex flex-col gap-8">
          <p className=" headtext">{title}</p>
          <p className=" secondtext">{description}</p>
          <Link href={"#form"}>
            <div className=" flex justify-center md:block">
              <button className="animbtn">Попробовать</button>
            </div>
          </Link>
        </div>
        <Image src={img} alt="doCard" width={400} height={400} className="" />
      </div>
    </div>
  );
}

export default DoCard;
