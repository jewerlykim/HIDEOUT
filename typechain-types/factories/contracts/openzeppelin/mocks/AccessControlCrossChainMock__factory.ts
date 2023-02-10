/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  AccessControlCrossChainMock,
  AccessControlCrossChainMockInterface,
} from "../../../../contracts/openzeppelin/mocks/AccessControlCrossChainMock";

const _abi = [
  {
    inputs: [],
    name: "NotCrossChainCall",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "CROSSCHAIN_ALIAS",
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
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
  "0x608060405234801561001057600080fd5b506111da806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806391d148541161005b57806391d1485414610125578063a217fddf14610155578063d547741f14610173578063f9d042951461018f57610088565b806301ffc9a71461008d578063248a9ca3146100bd5780632f2ff15d146100ed57806336568abe14610109575b600080fd5b6100a760048036038101906100a29190610b43565b6101ad565b6040516100b49190610b8b565b60405180910390f35b6100d760048036038101906100d29190610bdc565b610227565b6040516100e49190610c18565b60405180910390f35b61010760048036038101906101029190610c91565b610246565b005b610123600480360381019061011e9190610c91565b610267565b005b61013f600480360381019061013a9190610c91565b6102ea565b60405161014c9190610b8b565b60405180910390f35b61015d610354565b60405161016a9190610c18565b60405180910390f35b61018d60048036038101906101889190610c91565b61035b565b005b61019761037c565b6040516101a49190610c18565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610220575061021f826103a0565b5b9050919050565b6000806000838152602001908152602001600020600101549050919050565b61024f82610227565b6102588161040a565b6102628383610442565b505050565b61026f610522565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146102dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d390610d54565b60405180910390fd5b6102e6828261052a565b5050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b61036482610227565b61036d8161040a565b610377838361052a565b505050565b7fe870e9cffded00b0b933338bc23ae12648d8d2d4829802ab37a0908f14773b4d81565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b61041261060b565b15610435576104306104238261061c565b61042b610648565b610697565b61043f565b61043e8161071c565b5b50565b61044c82826102ea565b61051e57600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506104c3610522565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600033905090565b61053482826102ea565b1561060757600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506105ac610522565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b60006106176064610730565b905090565b60007fe870e9cffded00b0b933338bc23ae12648d8d2d4829802ab37a0908f14773b4d82189050919050565b600061065261060b565b610688576040517f4a74df9200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61069260646107b7565b905090565b6106a182826102ea565b610718576106ae8161087d565b6106bc8360001c60206108aa565b6040516020016106cd929190610e86565b6040516020818303038152906040526040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070f9190610f0a565b60405180910390fd5b5050565b61072d81610728610522565b610697565b50565b60008173ffffffffffffffffffffffffffffffffffffffff1663175a260b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561077857600080fd5b505afa15801561078c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b09190610f58565b9050919050565b60006107c282610730565b6107f8576040517f4a74df9200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663d74523b36040518163ffffffff1660e01b815260040160206040518083038186803b15801561083e57600080fd5b505afa158015610852573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108769190610f9a565b9050919050565b60606108a38273ffffffffffffffffffffffffffffffffffffffff16601460ff166108aa565b9050919050565b6060600060028360026108bd9190611000565b6108c7919061105a565b67ffffffffffffffff8111156108e0576108df6110b0565b5b6040519080825280601f01601f1916602001820160405280156109125781602001600182028036833780820191505090505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061094a576109496110df565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106109ae576109ad6110df565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600060018460026109ee9190611000565b6109f8919061105a565b90505b6001811115610a98577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110610a3a57610a396110df565b5b1a60f81b828281518110610a5157610a506110df565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c945080610a919061110e565b90506109fb565b5060008414610adc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad390611184565b60405180910390fd5b8091505092915050565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b610b2081610aeb565b8114610b2b57600080fd5b50565b600081359050610b3d81610b17565b92915050565b600060208284031215610b5957610b58610ae6565b5b6000610b6784828501610b2e565b91505092915050565b60008115159050919050565b610b8581610b70565b82525050565b6000602082019050610ba06000830184610b7c565b92915050565b6000819050919050565b610bb981610ba6565b8114610bc457600080fd5b50565b600081359050610bd681610bb0565b92915050565b600060208284031215610bf257610bf1610ae6565b5b6000610c0084828501610bc7565b91505092915050565b610c1281610ba6565b82525050565b6000602082019050610c2d6000830184610c09565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c5e82610c33565b9050919050565b610c6e81610c53565b8114610c7957600080fd5b50565b600081359050610c8b81610c65565b92915050565b60008060408385031215610ca857610ca7610ae6565b5b6000610cb685828601610bc7565b9250506020610cc785828601610c7c565b9150509250929050565b600082825260208201905092915050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b6000610d3e602f83610cd1565b9150610d4982610ce2565b604082019050919050565b60006020820190508181036000830152610d6d81610d31565b9050919050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b6000610db5601783610d74565b9150610dc082610d7f565b601782019050919050565b600081519050919050565b60005b83811015610df4578082015181840152602081019050610dd9565b83811115610e03576000848401525b50505050565b6000610e1482610dcb565b610e1e8185610d74565b9350610e2e818560208601610dd6565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b6000610e70601183610d74565b9150610e7b82610e3a565b601182019050919050565b6000610e9182610da8565b9150610e9d8285610e09565b9150610ea882610e63565b9150610eb48284610e09565b91508190509392505050565b6000601f19601f8301169050919050565b6000610edc82610dcb565b610ee68185610cd1565b9350610ef6818560208601610dd6565b610eff81610ec0565b840191505092915050565b60006020820190508181036000830152610f248184610ed1565b905092915050565b610f3581610b70565b8114610f4057600080fd5b50565b600081519050610f5281610f2c565b92915050565b600060208284031215610f6e57610f6d610ae6565b5b6000610f7c84828501610f43565b91505092915050565b600081519050610f9481610c65565b92915050565b600060208284031215610fb057610faf610ae6565b5b6000610fbe84828501610f85565b91505092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061100b82610fc7565b915061101683610fc7565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561104f5761104e610fd1565b5b828202905092915050565b600061106582610fc7565b915061107083610fc7565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156110a5576110a4610fd1565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061111982610fc7565b9150600082141561112d5761112c610fd1565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b600061116e602083610cd1565b915061117982611138565b602082019050919050565b6000602082019050818103600083015261119d81611161565b905091905056fea2646970667358221220987093240ef3cd37dc877d8c89fa02fe9307b39e18a711fff8435b49b854d41164736f6c63430008090033";

type AccessControlCrossChainMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AccessControlCrossChainMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AccessControlCrossChainMock__factory extends ContractFactory {
  constructor(...args: AccessControlCrossChainMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AccessControlCrossChainMock> {
    return super.deploy(
      overrides || {}
    ) as Promise<AccessControlCrossChainMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AccessControlCrossChainMock {
    return super.attach(address) as AccessControlCrossChainMock;
  }
  override connect(signer: Signer): AccessControlCrossChainMock__factory {
    return super.connect(signer) as AccessControlCrossChainMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccessControlCrossChainMockInterface {
    return new utils.Interface(_abi) as AccessControlCrossChainMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccessControlCrossChainMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AccessControlCrossChainMock;
  }
}