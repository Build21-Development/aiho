import Image from "next/image";
import FlatImage from "../../../public/FlatImage.png";

const page = () => {
  return (
    <div className="flex flex-col w-[1200px] mb-96">
      <section id="home" className="flex md:flex-row flex-col mt-20 lg:mt-8">
        <div className="flex-col justify-center items-center w-[1200px] px-6">
          <div className="flex flex-row justify-between items-start mt-32">
            <h1 className="flex-1 flex-col font-poppins font-semibold text-5xl mb-6 text-center">
              My properties
            </h1>
          </div>

          <p className="w-full mt-2 text-darkBlue text-center">
            All your properties intelligently managed in one place.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-4 w-full mt-12">
        <a href="/property">
          <div className="flex flex-col justify-center bg-white rounded-3xl">
            <div className="rounded-3xl">
              <Image
                src={FlatImage}
                alt="Aiho logo"
                width={1200}
                height={37.5}
                className="rounded-t-3xl"
              />
            </div>
            <div className="p-6 flex flex-col">
              <h3 className="text-xl font-semibold">Flat 21</h3>
              <h4 className="text-gray-400">12 Ursula St</h4>
              <div className="flex flex-row justify-between items-center mt-4">
                <div className="font-semibold">Real Estate Developer</div>
                <div className="text-gray-400">Build21</div>
              </div>
            </div>
          </div>
        </a>

        <div className="flex flex-col justify-center bg-white rounded-3xl">
          <div className="rounded-3xl">
            <Image
              src={FlatImage}
              alt="Aiho logo"
              width={1200}
              height={37.5}
              className="rounded-t-3xl"
            />
          </div>
          <div className="p-6 flex flex-col">
            <h3 className="text-xl font-semibold">Flat 21</h3>
            <h4 className="text-gray-400">12 Ursula St</h4>
            <div className="flex flex-row justify-between items-center mt-4">
              <div className="font-semibold">Real Estate Developer</div>
              <div className="text-gray-400">Build21</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-white rounded-3xl">
          <div className="rounded-3xl">
            <Image
              src={FlatImage}
              alt="Aiho logo"
              width={1200}
              height={37.5}
              className="rounded-t-3xl"
            />
          </div>
          <div className="p-6 flex flex-col">
            <h3 className="text-xl font-semibold">Flat 21</h3>
            <h4 className="text-gray-400">12 Ursula St</h4>
            <div className="flex flex-row justify-between items-center mt-4">
              <div className="font-semibold">Real Estate Developer</div>
              <div className="text-gray-400">Build21</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
