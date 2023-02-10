/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  Implementation1,
  Implementation1Interface,
} from "../../../../../contracts/openzeppelin/mocks/RegressionImplementation.sol/Implementation1";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_number",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610372806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063552410771461003b5780638129fc1c14610057575b600080fd5b610055600480360381019061005091906101ff565b610061565b005b61005f61006b565b005b8060018190555050565b60008060019054906101000a900460ff1615905080801561009c5750600160008054906101000a900460ff1660ff16105b806100c957506100ab306101a1565b1580156100c85750600160008054906101000a900460ff1660ff16145b5b610108576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100ff906102af565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015610145576001600060016101000a81548160ff0219169083151502179055505b801561019e5760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516101959190610321565b60405180910390a15b50565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600080fd5b6000819050919050565b6101dc816101c9565b81146101e757600080fd5b50565b6000813590506101f9816101d3565b92915050565b600060208284031215610215576102146101c4565b5b6000610223848285016101ea565b91505092915050565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000610299602e8361022c565b91506102a48261023d565b604082019050919050565b600060208201905081810360008301526102c88161028c565b9050919050565b6000819050919050565b600060ff82169050919050565b6000819050919050565b600061030b610306610301846102cf565b6102e6565b6102d9565b9050919050565b61031b816102f0565b82525050565b60006020820190506103366000830184610312565b9291505056fea2646970667358221220ff7835d1e08aca261e4a91f8da7328482abb9e62ba4f917234f619e6534a60c064736f6c63430008090033";

type Implementation1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Implementation1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Implementation1__factory extends ContractFactory {
  constructor(...args: Implementation1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Implementation1> {
    return super.deploy(overrides || {}) as Promise<Implementation1>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Implementation1 {
    return super.attach(address) as Implementation1;
  }
  override connect(signer: Signer): Implementation1__factory {
    return super.connect(signer) as Implementation1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Implementation1Interface {
    return new utils.Interface(_abi) as Implementation1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Implementation1 {
    return new Contract(address, _abi, signerOrProvider) as Implementation1;
  }
}