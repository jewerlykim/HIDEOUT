/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC1271MaliciousMock,
  ERC1271MaliciousMockInterface,
} from "../../../../../contracts/openzeppelin/mocks/ERC1271WalletMock.sol/ERC1271MaliciousMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610304806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631626ba7e14610030575b600080fd5b61004a6004803603810190610045919061021c565b610060565b60405161005791906102b3565b60405180910390f35b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60005260206000f35b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6100b3816100a0565b81146100be57600080fd5b50565b6000813590506100d0816100aa565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610129826100e0565b810181811067ffffffffffffffff82111715610148576101476100f1565b5b80604052505050565b600061015b61008c565b90506101678282610120565b919050565b600067ffffffffffffffff821115610187576101866100f1565b5b610190826100e0565b9050602081019050919050565b82818337600083830152505050565b60006101bf6101ba8461016c565b610151565b9050828152602081018484840111156101db576101da6100db565b5b6101e684828561019d565b509392505050565b600082601f830112610203576102026100d6565b5b81356102138482602086016101ac565b91505092915050565b6000806040838503121561023357610232610096565b5b6000610241858286016100c1565b925050602083013567ffffffffffffffff8111156102625761026161009b565b5b61026e858286016101ee565b9150509250929050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6102ad81610278565b82525050565b60006020820190506102c860008301846102a4565b9291505056fea264697066735822122022c3d80a578cdce6de934b7da25bf00eca241e0e6ebb563e9e72755a16352e8364736f6c63430008090033";

type ERC1271MaliciousMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1271MaliciousMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1271MaliciousMock__factory extends ContractFactory {
  constructor(...args: ERC1271MaliciousMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1271MaliciousMock> {
    return super.deploy(overrides || {}) as Promise<ERC1271MaliciousMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC1271MaliciousMock {
    return super.attach(address) as ERC1271MaliciousMock;
  }
  override connect(signer: Signer): ERC1271MaliciousMock__factory {
    return super.connect(signer) as ERC1271MaliciousMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1271MaliciousMockInterface {
    return new utils.Interface(_abi) as ERC1271MaliciousMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1271MaliciousMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1271MaliciousMock;
  }
}
