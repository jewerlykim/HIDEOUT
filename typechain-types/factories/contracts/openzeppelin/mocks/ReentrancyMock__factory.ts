/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ReentrancyMock,
  ReentrancyMockInterface,
} from "../../../../contracts/openzeppelin/mocks/ReentrancyMock";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "callback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ReentrancyAttack",
        name: "attacker",
        type: "address",
      },
    ],
    name: "countAndCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "n",
        type: "uint256",
      },
    ],
    name: "countLocalRecursive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "n",
        type: "uint256",
      },
    ],
    name: "countThisRecursive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "counter",
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
    name: "guardedCheckEntered",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unguardedCheckNotEntered",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506001600081905550600060018190555061082b806100306000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806396ffa6901161005b57806396ffa690146100c6578063a408f312146100e2578063b672ad8b146100ec578063cecc95a7146101085761007d565b8063083b27321461008257806361bc221a1461008c5780638c5344fa146100aa575b600080fd5b61008a610112565b005b61009461012c565b6040516100a19190610456565b60405180910390f35b6100c460048036038101906100bf91906104a2565b610132565b005b6100e060048036038101906100db91906104a2565b61029e565b005b6100ea6102d8565b005b6101066004803603810190610101919061053f565b6102fb565b005b6101106103a7565b005b61011a6103bb565b61012261040b565b61012a610426565b565b60015481565b61013a6103bb565b60008111156102935761014b61040b565b60003073ffffffffffffffffffffffffffffffffffffffff16600183610171919061059b565b6040516024016101819190610456565b6040516020818303038152906040527f8c5344fa000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405161020b9190610649565b6000604051808303816000865af19150503d8060008114610248576040519150601f19603f3d011682016040523d82523d6000602084013e61024d565b606091505b5050905080610291576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610288906106bd565b60405180910390fd5b505b61029b610426565b50565b6102a66103bb565b60008111156102cd576102b761040b565b6102cc6001826102c7919061059b565b61029e565b5b6102d5610426565b50565b6102e06103bb565b6102e8610430565b6102f157600080fd5b6102f9610426565b565b6103036103bb565b61030b61040b565b60007f083b2732f78169bfaad6b407fa338cc97d697ed69d3915a18239cc111d51a40290508173ffffffffffffffffffffffffffffffffffffffff16630a2df1ed826040518263ffffffff1660e01b81526004016103699190610718565b600060405180830381600087803b15801561038357600080fd5b505af1158015610397573d6000803e3d6000fd5b50505050506103a4610426565b50565b6103af610430565b156103b957600080fd5b565b60026000541415610401576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f89061077f565b60405180910390fd5b6002600081905550565b600180600082825461041d919061079f565b92505081905550565b6001600081905550565b6000600260005414905090565b6000819050919050565b6104508161043d565b82525050565b600060208201905061046b6000830184610447565b92915050565b600080fd5b61047f8161043d565b811461048a57600080fd5b50565b60008135905061049c81610476565b92915050565b6000602082840312156104b8576104b7610471565b5b60006104c68482850161048d565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104fa826104cf565b9050919050565b600061050c826104ef565b9050919050565b61051c81610501565b811461052757600080fd5b50565b60008135905061053981610513565b92915050565b60006020828403121561055557610554610471565b5b60006105638482850161052a565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006105a68261043d565b91506105b18361043d565b9250828210156105c4576105c361056c565b5b828203905092915050565b600081519050919050565b600081905092915050565b60005b838110156106035780820151818401526020810190506105e8565b83811115610612576000848401525b50505050565b6000610623826105cf565b61062d81856105da565b935061063d8185602086016105e5565b80840191505092915050565b60006106558284610618565b915081905092915050565b600082825260208201905092915050565b7f5265656e7472616e63794d6f636b3a206661696c65642063616c6c0000000000600082015250565b60006106a7601b83610660565b91506106b282610671565b602082019050919050565b600060208201905081810360008301526106d68161069a565b9050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b610712816106dd565b82525050565b600060208201905061072d6000830184610709565b92915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000610769601f83610660565b915061077482610733565b602082019050919050565b600060208201905081810360008301526107988161075c565b9050919050565b60006107aa8261043d565b91506107b58361043d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156107ea576107e961056c565b5b82820190509291505056fea264697066735822122030f214c355cf7098ccf3b4456cbeab270c4516eeb039fcf059c67f4c8d9ae47364736f6c63430008090033";

type ReentrancyMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReentrancyMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReentrancyMock__factory extends ContractFactory {
  constructor(...args: ReentrancyMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ReentrancyMock> {
    return super.deploy(overrides || {}) as Promise<ReentrancyMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ReentrancyMock {
    return super.attach(address) as ReentrancyMock;
  }
  override connect(signer: Signer): ReentrancyMock__factory {
    return super.connect(signer) as ReentrancyMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReentrancyMockInterface {
    return new utils.Interface(_abi) as ReentrancyMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReentrancyMock {
    return new Contract(address, _abi, signerOrProvider) as ReentrancyMock;
  }
}
