import TransactionWrapper from "src/components/TransactionWrapper";
import { scAddress } from "src/constants";
import { Build21PropertyAbi } from "src/Abi";

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
              <TransactionWrapper
                buttonText="Claim"
                calls={[
                  {
                    address: scAddress,
                    abi: Build21PropertyAbi,
                    functionName: "faucetMint",
                  },
                ]}
              />
              <div className="flex flex-row gap-4 items-start"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
