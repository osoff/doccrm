import Attention from "@components/Attention";
import Chat from "@components/Chat";
import Descript from "@components/Descript";
import Donot from "@components/Donot";
import ForWhom from "@components/ForWhom";
import Hero from "@components/Hero";
import Inject from "@components/Inject";
import Tarifs from "@components/Tarifs";

function Home() {
  return (
    <>
      <section className=" w-full pl-5 pt-5 pb-24 sm:pl-10  lg:py-10 xl:py-32 px-3 sm:px-6 max-w-[1508px]">
        <Hero />
      </section>
      <section className="bg-[#f5f6f8] py-24 w-full px-6">
        <Descript />
      </section>
      <section className="py-28 w-full px-6 max-w-[1508px]">
        <Chat />
      </section>
      <section className="py-24 bg-[#f5f6f8] w-full px-6">
        <ForWhom />
      </section>
      <section className="py-24  w-full px-6  max-w-[1508px]">
        <Attention />
      </section>
      <section className="pt-24  w-full px-6  max-w-[1508px]">
        <Donot />
      </section>
      <section className="py-24 w-full px-6  max-w-[1508px]" id="form">
        <Inject />
      </section>
      <section className="py-24 bg-[#f5f6f8] w-full">
        <Tarifs />
      </section>
    </>
  );
}

export default Home;
