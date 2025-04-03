"use client";
import {
  Address,
  Avatar,
  EthBalance,
  Identity,
  Name,
} from "@coinbase/onchainkit/identity";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename,
  WalletDropdownDisconnect,
  WalletDropdownFundLink,
  WalletDropdownLink,
  WalletModal,
} from "@coinbase/onchainkit/wallet";
import { useState } from "react";

type WalletWrapperParams = {
  text?: string;
  className?: string;
  withWalletAggregator?: boolean;
};
export default function WalletWrapper({
  className,
  text,
  withWalletAggregator = false,
}: WalletWrapperParams) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Wallet>
        <button
          className={`flex h-10 w-full items-center justify-center rounded-lg bg-[#F3F4F6] text-sm font-normal text-gray-900 hover:bg-gray-200 dark:bg-[#1E293B] dark:text-white dark:hover:bg-[#334155] ${className}`}
          onClick={() => setIsOpen(true)}
        >
          {text || "Connect Wallet"}
        </button>
        <WalletDropdown>
          <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick={true}>
            <Avatar />
            <Name />
            <Address />
            <EthBalance />
          </Identity>
          <WalletDropdownBasename />
          <WalletDropdownLink icon="wallet" href="https://wallet.coinbase.com">
            Go to Wallet Dashboard
          </WalletDropdownLink>
          <WalletDropdownFundLink />
          <WalletDropdownDisconnect />
        </WalletDropdown>
      </Wallet>
      <WalletModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
