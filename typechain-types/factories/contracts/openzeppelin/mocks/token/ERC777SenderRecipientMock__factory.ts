/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC777SenderRecipientMock,
  ERC777SenderRecipientMockInterface,
} from "../../../../../contracts/openzeppelin/mocks/token/ERC777SenderRecipientMock";

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "BeforeTokenTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fromBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toBalance",
        type: "uint256",
      },
    ],
    name: "TokensReceivedCalled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fromBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toBalance",
        type: "uint256",
      },
    ],
    name: "TokensToSendCalled",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IERC777",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "interfaceHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "canImplementInterfaceForAddress",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "recipientFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "registerRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "registerSender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC777",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "senderFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "shouldRevert",
        type: "bool",
      },
    ],
    name: "setShouldRevertReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "shouldRevert",
        type: "bool",
      },
    ],
    name: "setShouldRevertSend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "userData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "tokensReceived",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "userData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "tokensToSend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052731820a4b7618bde71dce8cdc73aab6c95905fad24600160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034801561006557600080fd5b506111c0806100756000396000f3fe608060405234801561001057600080fd5b50600436106100a85760003560e01c806375ab97821161007157806375ab97821461014d578063a8badaa514610169578063c97e18fc14610185578063d2de6474146101a1578063e0eb2180146101bd578063e1ecbd30146101d9576100a8565b806223de29146100ad578063249cb3fa146100c95780633836ef89146100f957806344d17187146101155780634e4ae5a514610131575b600080fd5b6100c760048036038101906100c29190610aa4565b6101f5565b005b6100e360048036038101906100de9190610ba9565b61038b565b6040516100f09190610bf8565b60405180910390f35b610113600480360381019061010e9190610d92565b610421565b005b61012f600480360381019061012a9190610e15565b610496565b005b61014b60048036038101906101469190610ebc565b610508565b005b61016760048036038101906101629190610aa4565b610525565b005b610183600480360381019061017e9190610ee9565b6106bd565b005b61019f600480360381019061019a9190610ebc565b610771565b005b6101bb60048036038101906101b69190610ee9565b61078d565b005b6101d760048036038101906101d29190610ee9565b6107fe565b005b6101f360048036038101906101ee9190610ee9565b61086f565b005b60018054906101000a900460ff161561020d57600080fd5b6000610217610923565b905060008173ffffffffffffffffffffffffffffffffffffffff166370a082318a6040518263ffffffff1660e01b81526004016102549190610f25565b60206040518083038186803b15801561026c57600080fd5b505afa158015610280573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a49190610f55565b905060008273ffffffffffffffffffffffffffffffffffffffff166370a082318a6040518263ffffffff1660e01b81526004016102e19190610f25565b60206040518083038186803b1580156102f957600080fd5b505afa15801561030d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103319190610f55565b90507f47e915878c47f3ec4d7ff646a2becb229f64fd2abe4d2b5e2bb4275b0cf50d4e8b8b8b8b8b8b8b8b8b8b8b6040516103769b9a99989796959493929190610fcf565b60405180910390a15050505050505050505050565b600080600084815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166103f7576000801b610419565b7fa2ef4600d742022d532d4747cb3547474667d6f13804902513b2ec01c848f4b45b905092915050565b8373ffffffffffffffffffffffffffffffffffffffff16639bd9bbc68484846040518463ffffffff1660e01b815260040161045e939291906110e5565b600060405180830381600087803b15801561047857600080fd5b505af115801561048c573d6000803e3d6000fd5b5050505050505050565b8273ffffffffffffffffffffffffffffffffffffffff1663fe9d930383836040518363ffffffff1660e01b81526004016104d1929190611123565b600060405180830381600087803b1580156104eb57600080fd5b505af11580156104ff573d6000803e3d6000fd5b50505050505050565b80600160006101000a81548160ff02191690831515021790555050565b600160009054906101000a900460ff161561053f57600080fd5b6000610549610923565b905060008173ffffffffffffffffffffffffffffffffffffffff166370a082318a6040518263ffffffff1660e01b81526004016105869190610f25565b60206040518083038186803b15801561059e57600080fd5b505afa1580156105b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d69190610f55565b905060008273ffffffffffffffffffffffffffffffffffffffff166370a082318a6040518263ffffffff1660e01b81526004016106139190610f25565b60206040518083038186803b15801561062b57600080fd5b505afa15801561063f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106639190610f55565b90507faa3e88aca472e90221daf7d3d601abafb62b120319089d7a2c2f63588da855298b8b8b8b8b8b8b8b8b8b8b6040516106a89b9a99989796959493929190610fcf565b60405180910390a15050505050505050505050565b600160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166329965a1d307fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b846040518463ffffffff1660e01b815260040161073c93929190611153565b600060405180830381600087803b15801561075657600080fd5b505af115801561076a573d6000803e3d6000fd5b5050505050565b806001806101000a81548160ff02191690831515021790555050565b6107b77f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe8958261092b565b60003090508073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156107fa576107f98161086f565b5b5050565b6108287fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b8261092b565b60003090508073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561086b5761086a816106bd565b5b5050565b600160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166329965a1d307f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe895846040518463ffffffff1660e01b81526004016108ee93929190611153565b600060405180830381600087803b15801561090857600080fd5b505af115801561091c573d6000803e3d6000fd5b5050505050565b600033905090565b600160008084815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006109d6826109ab565b9050919050565b6109e6816109cb565b81146109f157600080fd5b50565b600081359050610a03816109dd565b92915050565b6000819050919050565b610a1c81610a09565b8114610a2757600080fd5b50565b600081359050610a3981610a13565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610a6457610a63610a3f565b5b8235905067ffffffffffffffff811115610a8157610a80610a44565b5b602083019150836001820283011115610a9d57610a9c610a49565b5b9250929050565b60008060008060008060008060c0898b031215610ac457610ac36109a1565b5b6000610ad28b828c016109f4565b9850506020610ae38b828c016109f4565b9750506040610af48b828c016109f4565b9650506060610b058b828c01610a2a565b955050608089013567ffffffffffffffff811115610b2657610b256109a6565b5b610b328b828c01610a4e565b945094505060a089013567ffffffffffffffff811115610b5557610b546109a6565b5b610b618b828c01610a4e565b92509250509295985092959890939650565b6000819050919050565b610b8681610b73565b8114610b9157600080fd5b50565b600081359050610ba381610b7d565b92915050565b60008060408385031215610bc057610bbf6109a1565b5b6000610bce85828601610b94565b9250506020610bdf858286016109f4565b9150509250929050565b610bf281610b73565b82525050565b6000602082019050610c0d6000830184610be9565b92915050565b6000610c1e826109cb565b9050919050565b610c2e81610c13565b8114610c3957600080fd5b50565b600081359050610c4b81610c25565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610c9f82610c56565b810181811067ffffffffffffffff82111715610cbe57610cbd610c67565b5b80604052505050565b6000610cd1610997565b9050610cdd8282610c96565b919050565b600067ffffffffffffffff821115610cfd57610cfc610c67565b5b610d0682610c56565b9050602081019050919050565b82818337600083830152505050565b6000610d35610d3084610ce2565b610cc7565b905082815260208101848484011115610d5157610d50610c51565b5b610d5c848285610d13565b509392505050565b600082601f830112610d7957610d78610a3f565b5b8135610d89848260208601610d22565b91505092915050565b60008060008060808587031215610dac57610dab6109a1565b5b6000610dba87828801610c3c565b9450506020610dcb878288016109f4565b9350506040610ddc87828801610a2a565b925050606085013567ffffffffffffffff811115610dfd57610dfc6109a6565b5b610e0987828801610d64565b91505092959194509250565b600080600060608486031215610e2e57610e2d6109a1565b5b6000610e3c86828701610c3c565b9350506020610e4d86828701610a2a565b925050604084013567ffffffffffffffff811115610e6e57610e6d6109a6565b5b610e7a86828701610d64565b9150509250925092565b60008115159050919050565b610e9981610e84565b8114610ea457600080fd5b50565b600081359050610eb681610e90565b92915050565b600060208284031215610ed257610ed16109a1565b5b6000610ee084828501610ea7565b91505092915050565b600060208284031215610eff57610efe6109a1565b5b6000610f0d848285016109f4565b91505092915050565b610f1f816109cb565b82525050565b6000602082019050610f3a6000830184610f16565b92915050565b600081519050610f4f81610a13565b92915050565b600060208284031215610f6b57610f6a6109a1565b5b6000610f7984828501610f40565b91505092915050565b610f8b81610a09565b82525050565b600082825260208201905092915050565b6000610fae8385610f91565b9350610fbb838584610d13565b610fc483610c56565b840190509392505050565b600061012082019050610fe5600083018e610f16565b610ff2602083018d610f16565b610fff604083018c610f16565b61100c606083018b610f82565b818103608083015261101f81898b610fa2565b905081810360a0830152611034818789610fa2565b905061104360c0830186610f16565b61105060e0830185610f82565b61105e610100830184610f82565b9c9b505050505050505050505050565b600081519050919050565b60005b8381101561109757808201518184015260208101905061107c565b838111156110a6576000848401525b50505050565b60006110b78261106e565b6110c18185610f91565b93506110d1818560208601611079565b6110da81610c56565b840191505092915050565b60006060820190506110fa6000830186610f16565b6111076020830185610f82565b818103604083015261111981846110ac565b9050949350505050565b60006040820190506111386000830185610f82565b818103602083015261114a81846110ac565b90509392505050565b60006060820190506111686000830186610f16565b6111756020830185610be9565b6111826040830184610f16565b94935050505056fea2646970667358221220674420a6565dc47e0a910f0749b1282f6d3062797fb3ad142b9782130c3c0b8a64736f6c63430008090033";

type ERC777SenderRecipientMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC777SenderRecipientMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC777SenderRecipientMock__factory extends ContractFactory {
  constructor(...args: ERC777SenderRecipientMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC777SenderRecipientMock> {
    return super.deploy(overrides || {}) as Promise<ERC777SenderRecipientMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC777SenderRecipientMock {
    return super.attach(address) as ERC777SenderRecipientMock;
  }
  override connect(signer: Signer): ERC777SenderRecipientMock__factory {
    return super.connect(signer) as ERC777SenderRecipientMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC777SenderRecipientMockInterface {
    return new utils.Interface(_abi) as ERC777SenderRecipientMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC777SenderRecipientMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC777SenderRecipientMock;
  }
}
