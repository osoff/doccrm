import Image from "next/image";

function PopupCard({ popInfo }) {
  const { img, title, description } = popInfo;
  return (
    <div className="flex items-center gap-3 hover:bg-[rgba(16,87,143,.4)] p-2 m-2 transition-all  cursor-pointer rounded-3xl ">
      <Image src={img} alt={img} width={38} height={38} />
      <div className="flex flex-col gap-1">
        <p className="text-white">{title}</p>
        <p className="infotext text-sm">{description}</p>
      </div>
    </div>
  );
}

export default PopupCard;
