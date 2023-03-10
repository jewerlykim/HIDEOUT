/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC165MissingData,
  ERC165MissingDataInterface,
} from "../../../../../contracts/openzeppelin/mocks/ERC165/ERC165MissingData";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060fe8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806301ffc9a714602d575b600080fd5b60436004803603810190603f919060a0565b6045565b005b50565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b608081604d565b8114608a57600080fd5b50565b600081359050609a816079565b92915050565b60006020828403121560b35760b26048565b5b600060bf84828501608d565b9150509291505056fea264697066735822122081f38a295c20c1975291effb4b39f1d5fc0b4acf31f70ddecea620c878eb162d64736f6c63430008090033";

type ERC165MissingDataConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC165MissingDataConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC165MissingData__factory extends ContractFactory {
  constructor(...args: ERC165MissingDataConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC165MissingData> {
    return super.deploy(overrides || {}) as Promise<ERC165MissingData>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC165MissingData {
    return super.attach(address) as ERC165MissingData;
  }
  override connect(signer: Signer): ERC165MissingData__factory {
    return super.connect(signer) as ERC165MissingData__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC165MissingDataInterface {
    return new utils.Interface(_abi) as ERC165MissingDataInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC165MissingData {
    return new Contract(address, _abi, signerOrProvider) as ERC165MissingData;
  }
}
