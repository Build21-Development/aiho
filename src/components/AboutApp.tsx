import Image from "next/image";
import mobile from "../../public/mobile.png";

const Hero = () => {
  return (
    <section className="flex flex-col mb-96">
      <div className="flex flex-row justify-center items-start mt-32 ">
        <h1 className="flex-1 flex-col font-poppins font-semibold text-center text-5xl mb-6">
          Aiho is built through a strategic partnership between: Build21 & 
          Ratio1
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="mt-2 text-darkBlue w-3/4">
          <a
            href="https://build21.io/en"
            className="font-semibold text-blue-600"
          >
            Build21
          </a>{" "}
          - A visionary real estate developer focused on delivering high-quality
          residential spaces that combine architectural excellence with
          smart-living innovation. Build21 brings deep industry insight,
          credibility, and access to a network of +2.000 homeowners and +50 real
          estate developers.
        </p>
        <p className="mt-2 text-darkBlue w-3/4">
          <a href="https://ratio1.ai/" className="font-semibold text-blue-600">
            Ratio1
          </a>{" "}
          - A cutting-edge decentralized AI operating system that transforms
          everyday devices into intelligent service nodes using blockchain and
          edge computing. Its no-code/low-code platform enables both developers
          and non-technical users to build, deploy, and scale AI apps
          effortlessly - without DevOps or deep expertise.
        </p>
        <p className="mt-2 text-darkBlue w-3/4 font-semibold">
          Aiho Team:{" "}
          <a
            href="https://x.com/PetricaButusina"
            className="font-semibold text-blue-600"
          >
            Petrică Butușină
          </a>
          ,{" "}
          <a
            href="https://x.com/alessandrodfr"
            className="font-semibold text-blue-600"
          >
            Alessandro De Franceschi
          </a>
          ,{" "}
          <a
            href="https://x.com/vitalii_t12"
            className="font-semibold text-blue-600"
          >
            Vitalii Toderian
          </a>
          ,{" "}
          <a
            href="https://x.com/ralucabailescu"
            className="font-semibold text-blue-600"
          >
            Raluca Negrea
          </a>
        </p>
      </div>
    </section>
  );
};

export default Hero;
