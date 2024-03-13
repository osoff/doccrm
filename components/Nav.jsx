import Image from "next/image";
import Link from "next/link";

function Nav() {
  return (
    <>
      <nav className=" flex sticky top-0 z-40 bg-white px-3 gap-2 justify-between items-center py-3 font-medium w-full">
        <Link href="/" className="flex gap-2 items-center">
          <Image src="/icodoc.png" width={50} height={50} alt="logo" />
          <p className="text-2xl font-semibold">DocCRM</p>
        </Link>
        <div className="flex  gap-10 items-center text-xs sm:text-md">
          <Link
            href="#form"
            className="px-4 py-2 bg-primary-blue hover:bg-[#0e8df2] text text-xs rounded-lg text-white transition-all duration-200"
          >
            Регистрация
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
