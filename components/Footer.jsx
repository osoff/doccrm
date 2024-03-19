import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className=" bg-[#00182c] px-4 py-10 z-40 text-white">
      <div className="flex justify-between  items-center">
        <button>
          <Link href="/" className="flex gap-2 items-center">
            <Image src="/icodoc.png" width={50} height={50} alt="logo" />
            <p className="text-2xl font-semibold text-white">DocCRM</p>
          </Link>
        </button>
        <p className=" text-right text-xs md:text-base max-w-[50%]">
          Copyright DocCRM {new Date().getFullYear()} © Все права защищены.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
