"use client";
import Hero from "src/components/Hero";
import WalletWrapper from "src/components/WalletWrapper";
import { ONCHAINKIT_LINK } from "src/links";
import OnchainkitSvg from "src/svg/OnchainkitSvg";

import SignupButton from "../components/SignupButton";
import TransactionWrapper from "src/components/TransactionWrapper";

export default function Page() {
  return (
    <div className="mt-16 flex flex-col w-[1200px]">
      <section className="mt-6 mb-6 flex w-full flex-col md:flex-row">
        <div className="flex w-full flex-row items-center justify-between gap-2 md:gap-0">
          <Hero />
        </div>
      </section>
    </div>
  );
}
