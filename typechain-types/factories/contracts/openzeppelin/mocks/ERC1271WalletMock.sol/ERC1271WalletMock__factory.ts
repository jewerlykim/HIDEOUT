/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC1271WalletMock,
  ERC1271WalletMockInterface,
} from "../../../../../contracts/openzeppelin/mocks/ERC1271WalletMock.sol/ERC1271WalletMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "originalOwner",
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
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
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
  "0x60806040523480156200001157600080fd5b5060405162001092380380620010928339818101604052810190620000379190620002f6565b620000576200004b6200006f60201b60201c565b6200007760201b60201c565b62000068816200013b60201b60201c565b5062000443565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6200014b620001d260201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620001be576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001b590620003af565b60405180910390fd5b620001cf816200007760201b60201c565b50565b620001e26200006f60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16620002086200026360201b60201c565b73ffffffffffffffffffffffffffffffffffffffff161462000261576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002589062000421565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002be8262000291565b9050919050565b620002d081620002b1565b8114620002dc57600080fd5b50565b600081519050620002f081620002c5565b92915050565b6000602082840312156200030f576200030e6200028c565b5b60006200031f84828501620002df565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006200039760268362000328565b9150620003a48262000339565b604082019050919050565b60006020820190508181036000830152620003ca8162000388565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006200040960208362000328565b91506200041682620003d1565b602082019050919050565b600060208201905081810360008301526200043c81620003fa565b9050919050565b610c3f80620004536000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631626ba7e14610051578063715018a6146100815780638da5cb5b1461008b578063f2fde38b146100a9575b600080fd5b61006b6004803603810190610066919061078a565b6100c5565b6040516100789190610821565b60405180910390f35b610089610125565b005b610093610139565b6040516100a0919061087d565b60405180910390f35b6100c360048036038101906100be91906108c4565b610162565b005b60006100cf610139565b73ffffffffffffffffffffffffffffffffffffffff166100ef84846101e6565b73ffffffffffffffffffffffffffffffffffffffff161461011457600060e01b61011d565b631626ba7e60e01b5b905092915050565b61012d61020d565b610137600061028b565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61016a61020d565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156101da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101d190610974565b60405180910390fd5b6101e38161028b565b50565b60008060006101f5858561034f565b91509150610202816103a1565b819250505092915050565b61021561050f565b73ffffffffffffffffffffffffffffffffffffffff16610233610139565b73ffffffffffffffffffffffffffffffffffffffff1614610289576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610280906109e0565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000806041835114156103915760008060006020860151925060408601519150606086015160001a905061038587828585610517565b9450945050505061039a565b60006002915091505b9250929050565b600060048111156103b5576103b4610a00565b5b8160048111156103c8576103c7610a00565b5b14156103d35761050c565b600160048111156103e7576103e6610a00565b5b8160048111156103fa576103f9610a00565b5b141561043b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043290610a7b565b60405180910390fd5b6002600481111561044f5761044e610a00565b5b81600481111561046257610461610a00565b5b14156104a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049a90610ae7565b60405180910390fd5b600360048111156104b7576104b6610a00565b5b8160048111156104ca576104c9610a00565b5b141561050b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050290610b79565b60405180910390fd5b5b50565b600033905090565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c11156105525760006003915091506105f1565b6000600187878787604051600081526020016040526040516105779493929190610bc4565b6020604051602081039080840390855afa158015610599573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156105e8576000600192509250506105f1565b80600092509250505b94509492505050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6106218161060e565b811461062c57600080fd5b50565b60008135905061063e81610618565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6106978261064e565b810181811067ffffffffffffffff821117156106b6576106b561065f565b5b80604052505050565b60006106c96105fa565b90506106d5828261068e565b919050565b600067ffffffffffffffff8211156106f5576106f461065f565b5b6106fe8261064e565b9050602081019050919050565b82818337600083830152505050565b600061072d610728846106da565b6106bf565b90508281526020810184848401111561074957610748610649565b5b61075484828561070b565b509392505050565b600082601f83011261077157610770610644565b5b813561078184826020860161071a565b91505092915050565b600080604083850312156107a1576107a0610604565b5b60006107af8582860161062f565b925050602083013567ffffffffffffffff8111156107d0576107cf610609565b5b6107dc8582860161075c565b9150509250929050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61081b816107e6565b82525050565b60006020820190506108366000830184610812565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006108678261083c565b9050919050565b6108778161085c565b82525050565b6000602082019050610892600083018461086e565b92915050565b6108a18161085c565b81146108ac57600080fd5b50565b6000813590506108be81610898565b92915050565b6000602082840312156108da576108d9610604565b5b60006108e8848285016108af565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061095e6026836108f1565b915061096982610902565b604082019050919050565b6000602082019050818103600083015261098d81610951565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006109ca6020836108f1565b91506109d582610994565b602082019050919050565b600060208201905081810360008301526109f9816109bd565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000610a656018836108f1565b9150610a7082610a2f565b602082019050919050565b60006020820190508181036000830152610a9481610a58565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000610ad1601f836108f1565b9150610adc82610a9b565b602082019050919050565b60006020820190508181036000830152610b0081610ac4565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000610b636022836108f1565b9150610b6e82610b07565b604082019050919050565b60006020820190508181036000830152610b9281610b56565b9050919050565b610ba28161060e565b82525050565b600060ff82169050919050565b610bbe81610ba8565b82525050565b6000608082019050610bd96000830187610b99565b610be66020830186610bb5565b610bf36040830185610b99565b610c006060830184610b99565b9594505050505056fea2646970667358221220d80b5ac1900b9f03c3d6ff0e23d9d68cb75c43aa508a4a4670006366159f7c1f64736f6c63430008090033";

type ERC1271WalletMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1271WalletMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1271WalletMock__factory extends ContractFactory {
  constructor(...args: ERC1271WalletMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    originalOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1271WalletMock> {
    return super.deploy(
      originalOwner,
      overrides || {}
    ) as Promise<ERC1271WalletMock>;
  }
  override getDeployTransaction(
    originalOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(originalOwner, overrides || {});
  }
  override attach(address: string): ERC1271WalletMock {
    return super.attach(address) as ERC1271WalletMock;
  }
  override connect(signer: Signer): ERC1271WalletMock__factory {
    return super.connect(signer) as ERC1271WalletMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1271WalletMockInterface {
    return new utils.Interface(_abi) as ERC1271WalletMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1271WalletMock {
    return new Contract(address, _abi, signerOrProvider) as ERC1271WalletMock;
  }
}
