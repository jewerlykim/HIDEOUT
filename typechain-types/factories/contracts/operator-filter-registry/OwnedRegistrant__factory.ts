/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  OwnedRegistrant,
  OwnedRegistrantInterface,
} from "../../../contracts/operator-filter-registry/OwnedRegistrant";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000aad38038062000aad8339818101604052810190620000379190620003d7565b620000576200004b620000ec60201b60201c565b620000f460201b60201c565b6daaeb6d7670e522a718067333cd4e73ffffffffffffffffffffffffffffffffffffffff16634420e486306040518263ffffffff1660e01b8152600401620000a091906200041a565b600060405180830381600087803b158015620000bb57600080fd5b505af1158015620000d0573d6000803e3d6000fd5b50505050620000e5816200013260201b60201c565b50620004ba565b600033905090565b600160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556200012f81620001ef60201b620002691760201c565b50565b62000142620002b360201b60201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16620001aa6200034460201b60201c565b73ffffffffffffffffffffffffffffffffffffffff167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620002c3620000ec60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16620002e96200034460201b60201c565b73ffffffffffffffffffffffffffffffffffffffff161462000342576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003399062000498565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200039f8262000372565b9050919050565b620003b18162000392565b8114620003bd57600080fd5b50565b600081519050620003d181620003a6565b92915050565b600060208284031215620003f057620003ef6200036d565b5b60006200040084828501620003c0565b91505092915050565b620004148162000392565b82525050565b600060208201905062000431600083018462000409565b92915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006200048060208362000437565b91506200048d8262000448565b602082019050919050565b60006020820190508181036000830152620004b38162000471565b9050919050565b6105e380620004ca6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063715018a61461005c57806379ba5097146100665780638da5cb5b14610070578063e30c39781461008e578063f2fde38b146100ac575b600080fd5b6100646100c8565b005b61006e6100dc565b005b610078610169565b6040516100859190610425565b60405180910390f35b610096610192565b6040516100a39190610425565b60405180910390f35b6100c660048036038101906100c19190610471565b6101bc565b005b6100d061032d565b6100da60006103ab565b565b60006100e66103dc565b90508073ffffffffffffffffffffffffffffffffffffffff16610107610192565b73ffffffffffffffffffffffffffffffffffffffff161461015d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015490610521565b60405180910390fd5b610166816103ab565b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6101c461032d565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16610224610169565b73ffffffffffffffffffffffffffffffffffffffff167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6103356103dc565b73ffffffffffffffffffffffffffffffffffffffff16610353610169565b73ffffffffffffffffffffffffffffffffffffffff16146103a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a09061058d565b60405180910390fd5b565b600160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556103d981610269565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061040f826103e4565b9050919050565b61041f81610404565b82525050565b600060208201905061043a6000830184610416565b92915050565b600080fd5b61044e81610404565b811461045957600080fd5b50565b60008135905061046b81610445565b92915050565b60006020828403121561048757610486610440565b5b60006104958482850161045c565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c6532537465703a2063616c6c6572206973206e6f74207468652060008201527f6e6577206f776e65720000000000000000000000000000000000000000000000602082015250565b600061050b60298361049e565b9150610516826104af565b604082019050919050565b6000602082019050818103600083015261053a816104fe565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061057760208361049e565b915061058282610541565b602082019050919050565b600060208201905081810360008301526105a68161056a565b905091905056fea2646970667358221220605db556ff55cf2a8518087a093c80f6e0ac699e1ab2bf9cdd1de792958e06ef64736f6c63430008090033";

type OwnedRegistrantConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnedRegistrantConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OwnedRegistrant__factory extends ContractFactory {
  constructor(...args: OwnedRegistrantConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OwnedRegistrant> {
    return super.deploy(_owner, overrides || {}) as Promise<OwnedRegistrant>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override attach(address: string): OwnedRegistrant {
    return super.attach(address) as OwnedRegistrant;
  }
  override connect(signer: Signer): OwnedRegistrant__factory {
    return super.connect(signer) as OwnedRegistrant__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnedRegistrantInterface {
    return new utils.Interface(_abi) as OwnedRegistrantInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnedRegistrant {
    return new Contract(address, _abi, signerOrProvider) as OwnedRegistrant;
  }
}
