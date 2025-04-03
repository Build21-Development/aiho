import Image from "next/image";
import test from "../../public/test.png";

const Hero = () => {
  return (
    <section className="flex md:flex-row flex-col mt-20 lg:mt-8 mb-96">
      <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-start w-3/4 mt-32">
          <h1 className="flex-1 flex-col font-poppins font-semibold text-5xl mb-6">
            Meet Aiho - your smart property companion.
          </h1>
        </div>

        <p className="max-w-[700px] mt-2 text-darkBlue w-3/4">
          Intelligently managing smart properties with a next-gen, AI and
          blockchain-powered property management app.
        </p>
      </div>

      <div className="flex-1 flex md:my-0 my-10 relative">
        <Image src={test} alt="Aiho logo" width={1200} height={37.5} />
      </div>
    </section>
  );
};

export default Hero;
