"use client";

import Image from "next/image";
import FlatImage from "../../../../public/FlatImage.png";
import { useParams } from "next/navigation";
import { useAccount, usePublicClient } from "wagmi";
import { useEffect, useState } from "react";
import { scAddress } from "src/constants";
import { Build21PropertyAbi } from "src/Abi";

const page = () => {
  const { propertyId } = useParams() as { propertyId: string | undefined };

  const { address } = useAccount();
  const publicClient = usePublicClient();

  const [allModules, setAllModules] = useState<
    { id: bigint; name: string; price: bigint }[]
  >([]);
  const [boughtModules, setBoughtModules] = useState<bigint[]>([]);

  useEffect(() => {
    if (!address || !publicClient || !propertyId) return;

    publicClient
      .readContract({
        address: scAddress,
        abi: Build21PropertyAbi,
        functionName: "getAllModules",
      })
      .then((modules) => {
        setAllModules([...modules]);
      });

    publicClient
      .readContract({
        address: scAddress,
        abi: Build21PropertyAbi,
        functionName: "getTokenModules",
        args: [BigInt(propertyId)],
      })
      .then((tokenModules) => {
        setBoughtModules([...tokenModules]);
      });
  }, [address, propertyId, publicClient]);

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
              <h3 className="text-xl font-semibold">Modules</h3>
              <div className="flex flex-row gap-4 items-start">
                {allModules.map((module) => {
                  const hasBoughtModule =
                    boughtModules.find((m) => m === module.id) !== undefined;
                  return (
                    <a
                      href={`/module/${propertyId}/${module.id}`}
                      className="flex flex-col items-center justify-center gap-1"
                      key={module.id.toString()}
                    >
                      <Image
                        src={`/modules/${module.id.toString()}.png`}
                        alt={module.name}
                        width={50}
                        height={50}
                        className="rounded-lg"
                      />
                      <div className="text-xs">
                        {!hasBoughtModule && "Buy "}
                        {module.name}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
