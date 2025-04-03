import Image from "next/image";
import FlatImage from "../../../public/FlatImage.png";
import PropertyCard from "../../../public/modules/PropertyCard.png";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[1200px] mb-96 gap-6">
      <section className="flex flex-col mt-20 lg:mt-8">
        <div className="flex-col justify-center items-center w-[800px] mt-32">
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
        </div>
      </section>
      <section className="flex flex-col">
        <div className="flex-col justify-center items-center w-[800px]">
          <div className="flex flex-col justify-center bg-white rounded-3xl">
            <div className="p-6 flex flex-col gap-6">
              <h3 className="text-xl font-semibold">Bought Modules</h3>
              <div className="flex flex-row gap-4 items-start">
                <div className="flex flex-col items-center justify-center gap-1">
                  <Image
                    src={PropertyCard}
                    alt="Module Icon"
                    width={50}
                    height={50}
                    className="rounded-lg"
                  />
                  <div className="text-xs">Property Card</div>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <Image
                    src={PropertyCard}
                    alt="Module Icon"
                    width={50}
                    height={50}
                    className="rounded-lg"
                  />
                  <div className="text-xs">Property Card</div>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <Image
                    src={PropertyCard}
                    alt="Module Icon"
                    width={50}
                    height={50}
                    className="rounded-lg"
                  />
                  <div className="text-xs">Property Card</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
