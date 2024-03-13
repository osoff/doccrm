import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className=" bg-[#00182c] px-4 py-10 z-40 text-white">
      <div className="flex justify-between gap-2 items-center">
        <Link href="/" className="flex gap-2 items-center">
          <Image src="/icodoc.png" width={50} height={50} alt="logo" />
          <p className="text-2xl font-semibold text-white">DocCRM</p>
        </Link>
        <p className=" text-right text-sm md:text-base">
          Copyright DocCRM {new Date().getFullYear()} © Все права защищены.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
