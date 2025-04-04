import Image from "next/image";
import mobile from "../../public/mobile.png";

const Hero = () => {
  return (
    <section className="flex md:flex-row flex-col mb-96">
      <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-start w-3/4 mt-32">
          <h1 className="flex-1 flex-col font-poppins font-semibold text-5xl mb-6">
            Aiho is soon to be accessible from your pocket
          </h1>
        </div>

        <p className="max-w-[700px] mt-2 text-darkBlue w-3/4">
          Here's a preview of the Intelligent Smart Properties Management mobile
          app experience, powered by AI and Blockchain.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center bg-white w-[300px] gap-4 rounded-b-3xl">
        <Image
          src={mobile}
          alt="Aiho logo"
          width={250}
          height={250}
          className="mt-4"
        />
        <div className="text-3xl font-semibold mb-4">Scan me</div>
      </div>
    </section>
  );
};

export default Hero;
