import Image from "next/image";
import FlatImage from "../../../public/FlatImage.png";
import PropertyCard from "../../../public/modules/PropertyCard.png";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[1200px] mt-60 mb-96 gap-6">
      <section className="flex flex-col">
        <div className="flex-col justify-center items-center w-[500px]">
          <div className="flex flex-col justify-center items-center bg-white rounded-3xl">
            <div className="p-6 flex flex-col items-center gap-6">
              <h1 className="text-xl font-semibold">
                Get your mock property NFT
              </h1>
              <h2 className="text-lg text-center">Max 3 claims per wallet.</h2>
              <a
                href="/faucet"
                className="mt-10 px-2 py-1 rounded-lg text-center text-white bg-black w-[100px]"
              >
                Claim
              </a>
              <div className="flex flex-row gap-4 items-start"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
