import Link from "next/link";

function Nav() {
  return (
    <>
      <nav className=" flex sticky top-0 z-40 bg-white px-3 gap-2 justify-between items-center py-3 font-medium w-full">
        <Link href="/" className="flex gap-2 items-center">
          <svg
            width="50"
            height="50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8989 19.2435C14.8989 19.2435 22.2574 4.02595 38.5911 10.605C52.0698 17.6737 51.0423 32.9652 41.9541 42.0922C33.8476 50.2322 17.9266 52.8553 7.14039 42.0246C-3.93542 30.9032 1.17893 17.4237 1.17893 17.4237C1.17893 17.4237 -3.2204 31.3967 10.6177 38.5649C21.7443 43.4593 29.5663 36.6316 32.5966 32.6515C36.6607 27.3146 36.7559 21.2214 32.4848 16.9328C27.9521 12.3814 19.5446 11.6647 14.8989 19.2435Z"
              fill="url(#paint0_linear)"
            ></path>
            <path
              d="M34.2806 29.9608C34.2806 29.9608 27.1482 45.163 10.6139 38.5993C-2.86479 31.5306 -1.83735 16.2378 7.25089 7.11216C15.3574 -1.02775 31.2783 -3.65094 42.0646 7.17975C53.1404 18.3012 48.026 31.7806 48.026 31.7806C48.026 31.7806 52.4266 17.8077 38.5873 10.6395C27.4607 5.74509 19.6386 12.5728 16.6084 16.5528C12.4567 22.0045 12.3335 27.8668 16.7201 32.2715C21.2528 36.8216 29.6349 37.5396 34.2806 29.9608Z"
              fill="url(#paint1_linear)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="8.24683"
                y1="43.1341"
                x2="40.4672"
                y2="11.0459"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.3184" stopColor="#29B6F6"></stop>
                <stop offset="0.9944" stopColor="#0D47A1"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="40.9607"
                y1="6.07048"
                x2="8.74036"
                y2="38.1586"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#B3E5FC"></stop>
                <stop offset="0.1877" stopColor="#5EC8F8"></stop>
                <stop offset="0.3128" stopColor="#29B6F6"></stop>
                <stop offset="0.9944" stopColor="#0D47A1"></stop>
              </linearGradient>
            </defs>
          </svg>
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
