/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  Impl,
  ImplInterface,
} from "../../../../../contracts/openzeppelin/mocks/DummyImplementation.sol/Impl";

const _abi = [
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

export class Impl__factory {
  static readonly abi = _abi;
  static createInterface(): ImplInterface {
    return new utils.Interface(_abi) as ImplInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Impl {
    return new Contract(address, _abi, signerOrProvider) as Impl;
  }
}
