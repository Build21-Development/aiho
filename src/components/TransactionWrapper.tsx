"use client";
import {
  Transaction,
  TransactionButton,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from "@coinbase/onchainkit/transaction";
import type {
  TransactionError,
  TransactionResponse,
} from "@coinbase/onchainkit/transaction";
import { BASE_SEPOLIA_CHAIN_ID } from "../constants";
import type { ContractFunctionParameters } from "viem";
import { Build21PropertyAbi } from "src/Abi";

export default function TransactionWrapper({
  calls,
  buttonText,
  handleError,
  handleSuccess,
}: {
  calls: ContractFunctionParameters<typeof Build21PropertyAbi>[];
  buttonText?: string;
  handleError?: (err: TransactionError) => void;
  handleSuccess?: (response: TransactionResponse) => void;
}) {
  return (
    <div className="flex w-[450px]">
      <Transaction
        calls={calls}
        className="w-[450px]"
        chainId={BASE_SEPOLIA_CHAIN_ID}
        onError={handleError}
        onSuccess={handleSuccess}
      >
        <TransactionButton
          className="mt-0 mr-auto ml-auto w-[450px] max-w-full text-[white]"
          text={buttonText}
        />
        <TransactionStatus>
          <TransactionStatusLabel />
          <TransactionStatusAction />
        </TransactionStatus>
      </Transaction>
    </div>
  );
}
