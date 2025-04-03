"use client";
import Image from "next/image";
import Aiho_logo from "../../public/Aiho_logo.png";
import { Wallet, WalletDefault } from "@coinbase/onchainkit/wallet";
import LoginButton from "../components/LoginButton";
import { useAccount } from "wagmi";

const Navbar = () => {
  const { address } = useAccount();
  return (
    <nav className="fixed w-ful top-0 z-50 w-[1200px] bg-white px-4 rounded-3xl mt-4">
      <div className="flex items-center justify-between py-3">
        <div>
          <a href="/">
            <Image src={Aiho_logo} alt="Aiho logo" width={80} height={37.5} />
          </a>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="font-medium">
            <a href="/my-properties">My Properties</a>
          </div>
          <div className="font-medium">
            <a href="/modules">Modules</a>
          </div>
          <div className="font-medium">
            <a href="/my-account">My account</a>
          </div>
          <div className="font-medium">
            <a href="/mobile-app">Mobile App</a>
          </div>
          <div className="flex items-center">
            {!address ? <LoginButton /> : <Wallet />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
