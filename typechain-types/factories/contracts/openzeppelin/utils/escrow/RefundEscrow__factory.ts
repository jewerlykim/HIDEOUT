/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  RefundEscrow,
  RefundEscrowInterface,
} from "../../../../../contracts/openzeppelin/utils/escrow/RefundEscrow";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "beneficiary_",
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
        name: "payee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weiAmount",
        type: "uint256",
      },
    ],
    name: "Deposited",
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
    anonymous: false,
    inputs: [],
    name: "RefundsClosed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "RefundsEnabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "payee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weiAmount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [],
    name: "beneficiary",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "beneficiaryWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "close",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "refundee",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "payee",
        type: "address",
      },
    ],
    name: "depositsOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "enableRefunds",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum RefundEscrow.State",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
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
  {
    inputs: [
      {
        internalType: "address payable",
        name: "payee",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "withdrawalAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620016bd380380620016bd833981810160405281019062000037919062000269565b620000576200004b6200013360201b60201c565b6200013b60201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620000ca576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000c19062000322565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250506000600260006101000a81548160ff0219169083600281111562000127576200012662000344565b5b02179055505062000373565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002318262000204565b9050919050565b620002438162000224565b81146200024f57600080fd5b50565b600081519050620002638162000238565b92915050565b600060208284031215620002825762000281620001ff565b5b6000620002928482850162000252565b91505092915050565b600082825260208201905092915050565b7f526566756e64457363726f773a2062656e65666963696172792069732074686560008201527f207a65726f206164647265737300000000000000000000000000000000000000602082015250565b60006200030a602d836200029b565b91506200031782620002ac565b604082019050919050565b600060208201905081810360008301526200033d81620002fb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60805161132e6200038f6000396000610275015261132e6000f3fe6080604052600436106100a75760003560e01c80638da5cb5b116100645780638da5cb5b146101825780639af6549a146101ad578063c19d93fb146101c4578063e3a9db1a146101ef578063f2fde38b1461022c578063f340fa0114610255576100a7565b806338af3eed146100ac57806343d726d6146100d757806351cff8d9146100ee578063685ca19414610117578063715018a6146101545780638c52dc411461016b575b600080fd5b3480156100b857600080fd5b506100c1610271565b6040516100ce9190610b3c565b60405180910390f35b3480156100e357600080fd5b506100ec610299565b005b3480156100fa57600080fd5b5061011560048036038101906101109190610b88565b610367565b005b34801561012357600080fd5b5061013e60048036038101906101399190610bf3565b6103bb565b60405161014b9190610c3b565b60405180910390f35b34801561016057600080fd5b506101696103f3565b005b34801561017757600080fd5b50610180610407565b005b34801561018e57600080fd5b506101976104d6565b6040516101a49190610c65565b60405180910390f35b3480156101b957600080fd5b506101c26104ff565b005b3480156101d057600080fd5b506101d961059e565b6040516101e69190610cf7565b60405180910390f35b3480156101fb57600080fd5b5061021660048036038101906102119190610bf3565b6105b5565b6040516102239190610d2b565b60405180910390f35b34801561023857600080fd5b50610253600480360381019061024e9190610bf3565b6105fe565b005b61026f600480360381019061026a9190610bf3565b610682565b005b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6102a16106fc565b600060028111156102b5576102b4610c80565b5b6102bd61059e565b60028111156102cf576102ce610c80565b5b1461030f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030690610dc9565b60405180910390fd5b60028060006101000a81548160ff0219169083600281111561033457610333610c80565b5b02179055507f088672c3a6e342f7cd94a65ba63b79df24a8973927b4d05d803c44bbf787d12f60405160405180910390a1565b610370816103bb565b6103af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a690610e5b565b60405180910390fd5b6103b88161077a565b50565b6000600160028111156103d1576103d0610c80565b5b6103d961059e565b60028111156103eb576103ea610c80565b5b149050919050565b6103fb6106fc565b6104056000610886565b565b61040f6106fc565b6000600281111561042357610422610c80565b5b61042b61059e565b600281111561043d5761043c610c80565b5b1461047d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047490610eed565b60405180910390fd5b6001600260006101000a81548160ff021916908360028111156104a3576104a2610c80565b5b02179055507f599d8e5a83cffb867d051598c4d70e805d59802d8081c1c7d6dffc5b6aca2b8960405160405180910390a1565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60028081111561051257610511610c80565b5b61051a61059e565b600281111561052c5761052b610c80565b5b1461056c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056390610f7f565b60405180910390fd5b61059c47610578610271565b73ffffffffffffffffffffffffffffffffffffffff1661094a90919063ffffffff16565b565b6000600260009054906101000a900460ff16905090565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6106066106fc565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610676576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066d90611011565b60405180910390fd5b61067f81610886565b50565b6000600281111561069657610695610c80565b5b61069e61059e565b60028111156106b0576106af610c80565b5b146106f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e7906110a3565b60405180910390fd5b6106f981610a3e565b50565b610704610af3565b73ffffffffffffffffffffffffffffffffffffffff166107226104d6565b73ffffffffffffffffffffffffffffffffffffffff1614610778576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076f9061110f565b60405180910390fd5b565b6107826106fc565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610834818373ffffffffffffffffffffffffffffffffffffffff1661094a90919063ffffffff16565b8173ffffffffffffffffffffffffffffffffffffffff167f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d58260405161087a9190610d2b565b60405180910390a25050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8047101561098d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109849061117b565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff16826040516109b3906111cc565b60006040518083038185875af1925050503d80600081146109f0576040519150601f19603f3d011682016040523d82523d6000602084013e6109f5565b606091505b5050905080610a39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3090611253565b60405180910390fd5b505050565b610a466106fc565b600034905080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a9a91906112a2565b925050819055508173ffffffffffffffffffffffffffffffffffffffff167f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c482604051610ae79190610d2b565b60405180910390a25050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b2682610afb565b9050919050565b610b3681610b1b565b82525050565b6000602082019050610b516000830184610b2d565b92915050565b600080fd5b610b6581610b1b565b8114610b7057600080fd5b50565b600081359050610b8281610b5c565b92915050565b600060208284031215610b9e57610b9d610b57565b5b6000610bac84828501610b73565b91505092915050565b6000610bc082610afb565b9050919050565b610bd081610bb5565b8114610bdb57600080fd5b50565b600081359050610bed81610bc7565b92915050565b600060208284031215610c0957610c08610b57565b5b6000610c1784828501610bde565b91505092915050565b60008115159050919050565b610c3581610c20565b82525050565b6000602082019050610c506000830184610c2c565b92915050565b610c5f81610bb5565b82525050565b6000602082019050610c7a6000830184610c56565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110610cc057610cbf610c80565b5b50565b6000819050610cd182610caf565b919050565b6000610ce182610cc3565b9050919050565b610cf181610cd6565b82525050565b6000602082019050610d0c6000830184610ce8565b92915050565b6000819050919050565b610d2581610d12565b82525050565b6000602082019050610d406000830184610d1c565b92915050565b600082825260208201905092915050565b7f526566756e64457363726f773a2063616e206f6e6c7920636c6f73652077686960008201527f6c65206163746976650000000000000000000000000000000000000000000000602082015250565b6000610db3602983610d46565b9150610dbe82610d57565b604082019050919050565b60006020820190508181036000830152610de281610da6565b9050919050565b7f436f6e646974696f6e616c457363726f773a207061796565206973206e6f742060008201527f616c6c6f77656420746f20776974686472617700000000000000000000000000602082015250565b6000610e45603383610d46565b9150610e5082610de9565b604082019050919050565b60006020820190508181036000830152610e7481610e38565b9050919050565b7f526566756e64457363726f773a2063616e206f6e6c7920656e61626c6520726560008201527f66756e6473207768696c65206163746976650000000000000000000000000000602082015250565b6000610ed7603283610d46565b9150610ee282610e7b565b604082019050919050565b60006020820190508181036000830152610f0681610eca565b9050919050565b7f526566756e64457363726f773a2062656e65666963696172792063616e206f6e60008201527f6c79207769746864726177207768696c6520636c6f7365640000000000000000602082015250565b6000610f69603883610d46565b9150610f7482610f0d565b604082019050919050565b60006020820190508181036000830152610f9881610f5c565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610ffb602683610d46565b915061100682610f9f565b604082019050919050565b6000602082019050818103600083015261102a81610fee565b9050919050565b7f526566756e64457363726f773a2063616e206f6e6c79206465706f736974207760008201527f68696c6520616374697665000000000000000000000000000000000000000000602082015250565b600061108d602b83610d46565b915061109882611031565b604082019050919050565b600060208201905081810360008301526110bc81611080565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006110f9602083610d46565b9150611104826110c3565b602082019050919050565b60006020820190508181036000830152611128816110ec565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e6365000000600082015250565b6000611165601d83610d46565b91506111708261112f565b602082019050919050565b6000602082019050818103600083015261119481611158565b9050919050565b600081905092915050565b50565b60006111b660008361119b565b91506111c1826111a6565b600082019050919050565b60006111d7826111a9565b9150819050919050565b7f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260008201527f6563697069656e74206d61792068617665207265766572746564000000000000602082015250565b600061123d603a83610d46565b9150611248826111e1565b604082019050919050565b6000602082019050818103600083015261126c81611230565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006112ad82610d12565b91506112b883610d12565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156112ed576112ec611273565b5b82820190509291505056fea264697066735822122030bf9cc661455e323c2403dea666a993fa72c0fbff0dc6379c31bf9cef817b4364736f6c63430008090033";

type RefundEscrowConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RefundEscrowConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RefundEscrow__factory extends ContractFactory {
  constructor(...args: RefundEscrowConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    beneficiary_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RefundEscrow> {
    return super.deploy(beneficiary_, overrides || {}) as Promise<RefundEscrow>;
  }
  override getDeployTransaction(
    beneficiary_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(beneficiary_, overrides || {});
  }
  override attach(address: string): RefundEscrow {
    return super.attach(address) as RefundEscrow;
  }
  override connect(signer: Signer): RefundEscrow__factory {
    return super.connect(signer) as RefundEscrow__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RefundEscrowInterface {
    return new utils.Interface(_abi) as RefundEscrowInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RefundEscrow {
    return new Contract(address, _abi, signerOrProvider) as RefundEscrow;
  }
}
