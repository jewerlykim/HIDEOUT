/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  StorageSlotMock,
  StorageSlotMockInterface,
} from "../../../../contracts/openzeppelin/mocks/StorageSlotMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bytesMap",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
    ],
    name: "getAddress",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
    ],
    name: "getBoolean",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
    ],
    name: "getBytes",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
    ],
    name: "getBytes32",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "key",
        type: "uint256",
      },
    ],
    name: "getBytesStorage",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
    ],
    name: "getString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "key",
        type: "uint256",
      },
    ],
    name: "getStringStorage",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
    ],
    name: "getUint256",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "setAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "value",
        type: "bool",
      },
    ],
    name: "setBoolean",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
    ],
    name: "setBytes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "value",
        type: "bytes32",
      },
    ],
    name: "setBytes32",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "key",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
    ],
    name: "setBytesStorage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "value",
        type: "string",
      },
    ],
    name: "setString",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "key",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "value",
        type: "string",
      },
    ],
    name: "setStringStorage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setUint256",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stringMap",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061120e806100206000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80635a46e25d116100a2578063a6ed563e11610071578063a6ed563e14610313578063c031a18014610343578063ca446dd914610373578063df6e58d61461038f578063f8715b3e146103bf57610116565b80635a46e25d146102675780636e89955014610297578063986e791a146102b35780639b22f343146102e357610116565b806333598b00116100e957806333598b00146101b35780633848207a146101e35780633e60bd78146102135780634e91db081461022f5780634f3029c21461024b57610116565b80630afb30ba1461011b5780631e133d0f1461013757806321f8a721146101675780632e28d08414610197575b600080fd5b61013560048036038101906101309190610ba1565b6103db565b005b610151600480360381019061014c9190610c01565b61040e565b60405161015e9190610cc7565b60405180910390f35b610181600480360381019061017c9190610d1f565b6104ae565b60405161018e9190610d8d565b60405180910390f35b6101b160048036038101906101ac9190610da8565b6104e4565b005b6101cd60048036038101906101c89190610d1f565b610505565b6040516101da9190610e17565b60405180910390f35b6101fd60048036038101906101f89190610d1f565b61051b565b60405161020a9190610e4d565b60405180910390f35b61022d60048036038101906102289190610ebe565b61053e565b005b61024960048036038101906102449190610f1e565b610570565b005b61026560048036038101906102609190610f5e565b610585565b005b610281600480360381019061027c9190610c01565b61059a565b60405161028e9190610ff3565b60405180910390f35b6102b160048036038101906102ac9190611015565b61063a565b005b6102cd60048036038101906102c89190610d1f565b61065b565b6040516102da9190610cc7565b60405180910390f35b6102fd60048036038101906102f89190610c01565b6106f9565b60405161030a9190610ff3565b60405180910390f35b61032d60048036038101906103289190610d1f565b6107a9565b60405161033a9190611084565b60405180910390f35b61035d60048036038101906103589190610d1f565b6107bf565b60405161036a9190610ff3565b60405180910390f35b61038d600480360381019061038891906110cb565b61085d565b005b6103a960048036038101906103a49190610c01565b6108ac565b6040516103b69190610cc7565b60405180910390f35b6103d960048036038101906103d49190611137565b61095b565b005b81816103f860016000878152602001908152602001600020610983565b60000191906104089291906109d3565b50505050565b6000602052806000526040600020600091509050805461042d906111a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610459906111a6565b80156104a65780601f1061047b576101008083540402835291602001916104a6565b820191906000526020600020905b81548152906001019060200180831161048957829003601f168201915b505050505081565b60006104b98261098d565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b81816104ef85610997565b60000191906104ff9291906109d3565b50505050565b6000610510826109a1565b600001549050919050565b6000610526826109ab565b60000160009054906101000a900460ff169050919050565b818161055a6000808781526020019081526020016000206109b5565b600001919061056a929190610a59565b50505050565b8061057a836109bf565b600001819055505050565b8061058f836109a1565b600001819055505050565b600160205280600052604060002060009150905080546105b9906111a6565b80601f01602080910402602001604051908101604052809291908181526020018280546105e5906111a6565b80156106325780601f1061060757610100808354040283529160200191610632565b820191906000526020600020905b81548152906001019060200180831161061557829003601f168201915b505050505081565b8181610645856109c9565b6000019190610655929190610a59565b50505050565b6060610666826109c9565b6000018054610674906111a6565b80601f01602080910402602001604051908101604052809291908181526020018280546106a0906111a6565b80156106ed5780601f106106c2576101008083540402835291602001916106ed565b820191906000526020600020905b8154815290600101906020018083116106d057829003601f168201915b50505050509050919050565b606061071660016000848152602001908152602001600020610983565b6000018054610724906111a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610750906111a6565b801561079d5780601f106107725761010080835404028352916020019161079d565b820191906000526020600020905b81548152906001019060200180831161078057829003601f168201915b50505050509050919050565b60006107b4826109bf565b600001549050919050565b60606107ca82610997565b60000180546107d8906111a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610804906111a6565b80156108515780601f1061082657610100808354040283529160200191610851565b820191906000526020600020905b81548152906001019060200180831161083457829003601f168201915b50505050509050919050565b806108678361098d565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60606108c86000808481526020019081526020016000206109b5565b60000180546108d6906111a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610902906111a6565b801561094f5780601f106109245761010080835404028352916020019161094f565b820191906000526020600020905b81548152906001019060200180831161093257829003601f168201915b50505050509050919050565b80610965836109ab565b60000160006101000a81548160ff0219169083151502179055505050565b6000819050919050565b6000819050919050565b6000819050919050565b6000819050919050565b6000819050919050565b6000819050919050565b6000819050919050565b6000819050919050565b8280546109df906111a6565b90600052602060002090601f016020900481019282610a015760008555610a48565b82601f10610a1a57803560ff1916838001178555610a48565b82800160010185558215610a48579182015b82811115610a47578235825591602001919060010190610a2c565b5b509050610a559190610adf565b5090565b828054610a65906111a6565b90600052602060002090601f016020900481019282610a875760008555610ace565b82601f10610aa057803560ff1916838001178555610ace565b82800160010185558215610ace579182015b82811115610acd578235825591602001919060010190610ab2565b5b509050610adb9190610adf565b5090565b5b80821115610af8576000816000905550600101610ae0565b5090565b600080fd5b600080fd5b6000819050919050565b610b1981610b06565b8114610b2457600080fd5b50565b600081359050610b3681610b10565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610b6157610b60610b3c565b5b8235905067ffffffffffffffff811115610b7e57610b7d610b41565b5b602083019150836001820283011115610b9a57610b99610b46565b5b9250929050565b600080600060408486031215610bba57610bb9610afc565b5b6000610bc886828701610b27565b935050602084013567ffffffffffffffff811115610be957610be8610b01565b5b610bf586828701610b4b565b92509250509250925092565b600060208284031215610c1757610c16610afc565b5b6000610c2584828501610b27565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c68578082015181840152602081019050610c4d565b83811115610c77576000848401525b50505050565b6000601f19601f8301169050919050565b6000610c9982610c2e565b610ca38185610c39565b9350610cb3818560208601610c4a565b610cbc81610c7d565b840191505092915050565b60006020820190508181036000830152610ce18184610c8e565b905092915050565b6000819050919050565b610cfc81610ce9565b8114610d0757600080fd5b50565b600081359050610d1981610cf3565b92915050565b600060208284031215610d3557610d34610afc565b5b6000610d4384828501610d0a565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610d7782610d4c565b9050919050565b610d8781610d6c565b82525050565b6000602082019050610da26000830184610d7e565b92915050565b600080600060408486031215610dc157610dc0610afc565b5b6000610dcf86828701610d0a565b935050602084013567ffffffffffffffff811115610df057610def610b01565b5b610dfc86828701610b4b565b92509250509250925092565b610e1181610b06565b82525050565b6000602082019050610e2c6000830184610e08565b92915050565b60008115159050919050565b610e4781610e32565b82525050565b6000602082019050610e626000830184610e3e565b92915050565b60008083601f840112610e7e57610e7d610b3c565b5b8235905067ffffffffffffffff811115610e9b57610e9a610b41565b5b602083019150836001820283011115610eb757610eb6610b46565b5b9250929050565b600080600060408486031215610ed757610ed6610afc565b5b6000610ee586828701610b27565b935050602084013567ffffffffffffffff811115610f0657610f05610b01565b5b610f1286828701610e68565b92509250509250925092565b60008060408385031215610f3557610f34610afc565b5b6000610f4385828601610d0a565b9250506020610f5485828601610d0a565b9150509250929050565b60008060408385031215610f7557610f74610afc565b5b6000610f8385828601610d0a565b9250506020610f9485828601610b27565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000610fc582610f9e565b610fcf8185610fa9565b9350610fdf818560208601610c4a565b610fe881610c7d565b840191505092915050565b6000602082019050818103600083015261100d8184610fba565b905092915050565b60008060006040848603121561102e5761102d610afc565b5b600061103c86828701610d0a565b935050602084013567ffffffffffffffff81111561105d5761105c610b01565b5b61106986828701610e68565b92509250509250925092565b61107e81610ce9565b82525050565b60006020820190506110996000830184611075565b92915050565b6110a881610d6c565b81146110b357600080fd5b50565b6000813590506110c58161109f565b92915050565b600080604083850312156110e2576110e1610afc565b5b60006110f085828601610d0a565b9250506020611101858286016110b6565b9150509250929050565b61111481610e32565b811461111f57600080fd5b50565b6000813590506111318161110b565b92915050565b6000806040838503121561114e5761114d610afc565b5b600061115c85828601610d0a565b925050602061116d85828601611122565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806111be57607f821691505b602082108114156111d2576111d1611177565b5b5091905056fea26469706673582212206cddead52bddb9a69db3f7e4d532b7ec3faaade8027d782b64457061771fff3b64736f6c63430008090033";

type StorageSlotMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StorageSlotMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StorageSlotMock__factory extends ContractFactory {
  constructor(...args: StorageSlotMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StorageSlotMock> {
    return super.deploy(overrides || {}) as Promise<StorageSlotMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StorageSlotMock {
    return super.attach(address) as StorageSlotMock;
  }
  override connect(signer: Signer): StorageSlotMock__factory {
    return super.connect(signer) as StorageSlotMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StorageSlotMockInterface {
    return new utils.Interface(_abi) as StorageSlotMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StorageSlotMock {
    return new Contract(address, _abi, signerOrProvider) as StorageSlotMock;
  }
}
