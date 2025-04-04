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
import PredictiveMaintenance from "src/components/modules/PropertyCard";
import { formatUnits } from "viem";
import TransactionWrapper from "src/components/TransactionWrapper";
import { formatAmount } from "@coinbase/onchainkit/token";
import module0 from "../../../../../public/modules/0.png";
import module1 from "../../../../../public/modules/1.png";
import module2 from "../../../../../public/modules/2.png";

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
          tokenModules.find((m) => m.toString() === moduleId) !== undefined
        );
      });
  }, [address, propertyId, publicClient, refresher]);

  if (!module) {
    return (
      <div className="flex flex-col items-center justify-center w-[1200px] mb-96 gap-6">
        <section className="flex flex-col mt-20 lg:mt-8">
          <div className="flex-col justify-center items-center w-[800px] mt-32">
            <div className="flex flex-col justify-center bg-white rounded-3xl p-6">
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
          <>
            {module.id === 0n ? (
              <section className="flex flex-col mb-6">
                <div className="flex-col justify-center items-center w-[800px]">
                  <div className="flex flex-col justify-start items-start bg-white rounded-3xl">
                    <div className="p-6 flex flex-row justify-start items-center rounded-3xl">
                      <Image
                        src={module0}
                        alt="Aiho logo"
                        width={75}
                        height={75}
                        className="rounded-xl"
                      />
                      <div className="pl-2 flex flex-col">
                        <h3 className="text-xl font-semibold">Home Security</h3>
                        <h4 className="text-gray-400">
                          Developer:{" "}
                          <span className="text-blue-600">0x3a9f...b1c4e2</span>
                        </h4>
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      The Home Security module uses AI to monitor activity at
                      the property’s door and detect suspicious behavior. When
                      potential intrusion is identified, it instantly sends a
                      warning or notification to the user, helping them respond
                      quickly and stay secure.
                    </div>

                    {hasBoughtModule ? (
                      <div className="p-6">
                        <div className="px-3 py-2 rounded-lg border-2 border-green-700 text-green-700 text-center">
                          Module bought
                        </div>
                      </div>
                    ) : (
                      <div className="p-6 flex flex-col gap-6">
                        <div className="flex flex-row justify-center items-center gap-2">
                          <button
                            className="px-3 py-2 rounded-lg bg-black hover:bg-gray-800 text-white text-center"
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
                            Buy {module.name} module
                          </button>
                          <div>
                            {formatUnits(module.price, 18)} BASE Sepolia ETH
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            ) : module.id === 1n ? (
              <section className="flex flex-col mb-6">
                <div className="flex-col justify-center items-center w-[800px]">
                  <div className="flex flex-col justify-start items-start bg-white rounded-3xl">
                    <div className="p-6 flex flex-row justify-start items-center rounded-3xl">
                      <Image
                        src={module1}
                        alt="Aiho logo"
                        width={75}
                        height={75}
                        className="rounded-xl"
                      />
                      <div className="pl-2 flex flex-col">
                        <h3 className="text-xl font-semibold">Property Card</h3>
                        <h4 className="text-gray-400">
                          Developer:{" "}
                          <span className="text-blue-600">0x3a9f...b1c4e2</span>
                        </h4>
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      The Property Card is a decentralized cloud storage
                      solution built on Ratio1's R1FS, gated by the digital
                      representation of your property. It ensures the continuity
                      of your property's documentation and the vital data
                      required by owners and third parties.
                    </div>

                    {hasBoughtModule ? (
                      <div className="p-6">
                        <div className="px-3 py-2 rounded-lg border-2 border-green-700 text-green-700 text-center">
                          Module bought
                        </div>
                      </div>
                    ) : (
                      <div className="p-6 flex flex-col gap-6">
                        <div className="flex flex-row justify-center items-center gap-2">
                          <button
                            className="px-3 py-2 rounded-lg bg-black hover:bg-gray-800 text-white text-center"
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
                            Buy {module.name} module
                          </button>
                          <div>
                            {formatUnits(module.price, 18)} BASE Sepolia ETH
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            ) : module.id === 2n ? (
              <section className="flex flex-col mb-6">
                <div className="flex-col justify-center items-center w-[800px]">
                  <div className="flex flex-col justify-start items-start bg-white rounded-3xl">
                    <div className="p-6 flex flex-row justify-start items-center rounded-3xl">
                      <Image
                        src={module2}
                        alt="Aiho logo"
                        width={75}
                        height={75}
                        className="rounded-xl"
                      />
                      <div className="pl-2 flex flex-col">
                        <h3 className="text-xl font-semibold">
                          Predictive Maintenance
                        </h3>
                        <h4 className="text-gray-400">
                          Developer:{" "}
                          <span className="text-blue-600">0x3a9f...b1c4e2</span>
                        </h4>
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      The Predictive Maintenance module uses AI to monitor the
                      health of devices and systems around the property. It
                      analyzes performance data to detect early signs of wear or
                      failure, sending users alerts before issues become
                      serious, helping prevent breakdowns and reduce repair
                      costs.
                    </div>

                    {hasBoughtModule ? (
                      <div className="p-6">
                        <div className="px-3 py-2 rounded-lg border-2 border-green-700 text-green-700 text-center">
                          Module bought
                        </div>
                      </div>
                    ) : (
                      <div className="p-6 flex flex-col gap-6">
                        <div className="flex flex-row justify-center items-center gap-2">
                          <button
                            className="px-3 py-2 rounded-lg bg-black hover:bg-gray-800 text-white text-center"
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
                            Buy {module.name} module
                          </button>
                          <div>
                            {formatUnits(module.price, 18)} BASE Sepolia ETH
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            ) : (
              <h3 className="text-xl font-semibold">
                <section className="flex flex-col">
                  <div className="flex-col justify-center items-center w-[800px]">
                    <div className="flex flex-col justify-center bg-white rounded-3xl">
                      <div className="p-6 flex flex-col gap-6">
                        <h3 className="text-xl font-semibold">
                          Module: {module.name}
                        </h3>
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
                Todo
              </h3>
            )}
          </>
          <div className="flex flex-row justify-start items-start bg-white rounded-3xl">
            <div className="flex flex-row justify-start items-center rounded-3xl gap-4">
              <Image
                src={FlatImage}
                alt="Flat image"
                width={175}
                height={175}
                className="rounded-l-xl"
              />

              <div className="flex flex-col">
                <h3 className="text-xl font-semibold">Flat {propertyId}</h3>
                <h4 className="text-gray-400">12 Ursula St</h4>
                <div className="flex flex-row justify-between items-center mt-4">
                  <div className="text-gray-400">Real Estate Developer:</div>
                  <div className="ml-2 text-black">Build21</div>
                </div>
              </div>
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
                  ) : module.id === 2n ? (
                    <PredictiveMaintenance />
                  ) : (
                    <h3 className="text-xl font-semibold">
                      TODO all other logics
                    </h3>
                  )}
                </>
              ) : (
                <div className="text-red-600">
                  The module must be purchased before it can be used.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
