"use client";

import Image from "next/image";
import FlatImage from "../../../public/FlatImage.png";
import { useEffect, useState } from "react";
import { Build21PropertyAbi } from "src/Abi";
import { scAddress } from "src/constants";
import { useAccount, usePublicClient } from "wagmi";

const page = () => {
  const { address } = useAccount();
  const publicClient = usePublicClient();

  const [isLoading, setIsLoading] = useState(true);
  const [tokenIds, setTokenIds] = useState<number[]>([]);

  useEffect(() => {
    if (!address || !publicClient) return;

    publicClient
      .readContract({
        address: scAddress,
        abi: Build21PropertyAbi,
        functionName: "balanceOf",
        args: [address],
      })
      .then((balance) => {
        const tokenIdsPromises = [];
        for (let i = 0; i < balance; i++) {
          tokenIdsPromises.push(
            publicClient.readContract({
              address: scAddress,
              abi: Build21PropertyAbi,
              functionName: "tokenOfOwnerByIndex",
              args: [address, BigInt(i)],
            }),
          );
        }
        Promise.all(tokenIdsPromises).then((ids) => {
          setTokenIds(ids.map((id) => Number(id)));
          setIsLoading(false);
        });
      });
  }, [address, publicClient]);

  return (
    <div className="flex flex-col w-[1200px] mb-96">
      <section id="home" className="flex flex-col mt-20 lg:mt-8">
        <div className="flex-col justify-center items-center w-[1200px] px-6">
          <div className="flex flex-row justify-between items-start mt-32">
            <h1 className="flex-1 flex-col font-poppins font-semibold text-5xl mb-6 text-center">
              My properties
            </h1>
          </div>

          <p className="w-full mt-2 text-darkBlue text-center">
            All your properties intelligently managed in one place.
          </p>

          <div className="flex flex-col justify-center items-center mt-6">
            <h2 className="font-poppins font-semibold text-xl mb-2 text-center">
              Get a mock property NFT
            </h2>
            <a
              href="/faucet"
              className="px-2 py-1 rounded-lg mt-2 hover:text-black text-gray-500 text-center border-2 hover:border-black border-gray-500"
            >
              Go to faucet
            </a>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-4 w-full mt-12">
        {isLoading && (
          <div className="flex justify-center items-center w-full h-96">
            <p className="text-gray-500">Loading...</p>
          </div>
        )}
        {!isLoading && tokenIds.length === 0 && (
          <div className="flex justify-center items-center w-full h-96">
            <p className="text-gray-500">No properties found.</p>
          </div>
        )}
        {tokenIds.map((tokenId) => (
          <a href={"/property/" + tokenId} key={tokenId}>
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
                <h3 className="text-xl font-semibold">Flat {tokenId}</h3>
                <h4 className="text-gray-400">12 Ursula St</h4>
                <div className="flex flex-row justify-between items-center mt-4">
                  <div className="font-semibold">Real Estate Developer</div>
                  <div className="text-gray-400">Build21</div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </section>
    </div>
  );
};

export default page;
