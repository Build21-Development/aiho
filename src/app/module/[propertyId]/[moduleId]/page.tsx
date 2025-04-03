"use client";

import Image from "next/image";
import FlatImage from "../../../../../public/FlatImage.png";
import { useParams } from "next/navigation";
import { useAccount, usePublicClient, useWriteContract } from "wagmi";
import { useEffect, useState } from "react";
import { scAddress } from "src/constants";
import { Build21PropertyAbi } from "src/Abi";
import HomeSecurity from "src/components/modules/HomeSecurity";
import PropertyCard from "src/components/modules/PropertyCard";
import { formatUnits } from "viem";
import TransactionWrapper from "src/components/TransactionWrapper";
import { formatAmount } from "@coinbase/onchainkit/token";

const page = () => {
  const { propertyId, moduleId } = useParams() as {
    propertyId: string;
    moduleId: string;
  };

  const { address } = useAccount();
  const publicClient = usePublicClient();
  const { writeContract } = useWriteContract();

  const [module, setModule] = useState<
    { id: bigint; name: string; price: bigint } | undefined
  >();
  const [hasBoughtModule, setHasBoughtModule] = useState(false);
  const [refresher, setRefresher] = useState(false);

  useEffect(() => {
    if (!address || !publicClient || !propertyId) return;

    publicClient
      .readContract({
        address: scAddress,
        abi: Build21PropertyAbi,
        functionName: "getAllModules",
      })
      .then((modules) => {
        setModule(modules.find((m) => m.id.toString() === moduleId));
      });

    publicClient
      .readContract({
        address: scAddress,
        abi: Build21PropertyAbi,
        functionName: "getTokenModules",
        args: [BigInt(propertyId)],
      })
      .then((tokenModules) => {
        setHasBoughtModule(
          tokenModules.find((m) => m.toString() === moduleId) !== undefined,
        );
      });
  }, [address, propertyId, publicClient, refresher]);

  if (!module) {
    return (
      <div className="flex flex-col items-center justify-center w-[1200px] mb-96 gap-6">
        <section className="flex flex-col mt-20 lg:mt-8">
          <div className="flex-col justify-center items-center w-[800px] mt-32">
            <div className="flex flex-col justify-center bg-white rounded-3xl">
              Loading...
            </div>
          </div>
        </section>
      </div>
    );
  }

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
              <h3 className="text-xl font-semibold">Flat {propertyId}</h3>
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
              <h3 className="text-xl font-semibold">Module: {module.name}</h3>
              <Image
                src={`/modules/${module.id.toString()}.png`}
                alt={module.name}
                width={50}
                height={50}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col">
        <div className="flex-col justify-center items-center w-[800px]">
          <div className="flex flex-col justify-center bg-white rounded-3xl">
            <div className="p-6 flex flex-col gap-6">
              {hasBoughtModule ? (
                <>
                  {module.id === 0n ? (
                    <HomeSecurity />
                  ) : module.id === 1n ? (
                    <PropertyCard />
                  ) : (
                    <h3 className="text-xl font-semibold">
                      TODO all other logics
                    </h3>
                  )}
                </>
              ) : (
                <>
                  <button
                    className="px-2 py-1 rounded-lg mt-2 hover:text-black text-gray-500 text-center border-2 hover:border-black border-gray-500"
                    onClick={() => {
                      writeContract({
                        address: scAddress,
                        abi: Build21PropertyAbi,
                        functionName: "buyModule",
                        args: [BigInt(propertyId), module.id],
                        value: module.price,
                      });
                      //TODO we should add auto refresh after buying
                      setTimeout(() => {
                        setRefresher(!refresher);
                      }, 10000);
                    }}
                  >
                    Buy {module.name} module for {formatUnits(module.price, 18)}{" "}
                    ETH
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
