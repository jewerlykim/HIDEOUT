/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC1155ReceiverMock,
  ERC1155ReceiverMockInterface,
} from "../../../../../contracts/openzeppelin/mocks/token/ERC1155ReceiverMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "recRetval",
        type: "bytes4",
      },
      {
        internalType: "bool",
        name: "recReverts",
        type: "bool",
      },
      {
        internalType: "bytes4",
        name: "batRetval",
        type: "bytes4",
      },
      {
        internalType: "bool",
        name: "batReverts",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gas",
        type: "uint256",
      },
    ],
    name: "BatchReceived",
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        internalType: "uint256",
        name: "gas",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
  "0x608060405234801561001057600080fd5b50604051610b4c380380610b4c8339818101604052810190610032919061013f565b836000806101000a81548163ffffffff021916908360e01c021790555082600060046101000a81548160ff02191690831515021790555081600060056101000a81548163ffffffff021916908360e01c021790555080600060096101000a81548160ff021916908315150217905550505050506101a6565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6100e4816100af565b81146100ef57600080fd5b50565b600081519050610101816100db565b92915050565b60008115159050919050565b61011c81610107565b811461012757600080fd5b50565b60008151905061013981610113565b92915050565b60008060008060808587031215610159576101586100aa565b5b6000610167878288016100f2565b94505060206101788782880161012a565b9350506040610189878288016100f2565b925050606061019a8782880161012a565b91505092959194509250565b610997806101b56000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806301ffc9a714610046578063bc197c8114610076578063f23a6e61146100a6575b600080fd5b610060600480360381019061005b9190610306565b6100d6565b60405161006d919061034e565b60405180910390f35b610090600480360381019061008b9190610482565b610140565b60405161009d919061056d565b60405180910390f35b6100c060048036038101906100bb91906105be565b6101f6565b6040516100cd919061056d565b60405180910390f35b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008060099054906101000a900460ff1615610191576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610188906106db565b60405180910390fd5b7f0bcad9224ba33b574e9c85298de2f44b4c80015a21aa5df474896444909863d889898989898989895a6040516101d0999897969594939291906107e9565b60405180910390a1600060059054906101000a900460e01b905098975050505050505050565b60008060049054906101000a900460ff1615610247576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023e906108d7565b60405180910390fd5b7f20dfa9f79060c8c4d7fe892c97c71bcf6e3b63d1dcf66fea7aefc0211628cf298787878787875a60405161028297969594939291906108f7565b60405180910390a160008054906101000a900460e01b90509695505050505050565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6102e3816102ae565b81146102ee57600080fd5b50565b600081359050610300816102da565b92915050565b60006020828403121561031c5761031b6102a4565b5b600061032a848285016102f1565b91505092915050565b60008115159050919050565b61034881610333565b82525050565b6000602082019050610363600083018461033f565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061039482610369565b9050919050565b6103a481610389565b81146103af57600080fd5b50565b6000813590506103c18161039b565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126103ec576103eb6103c7565b5b8235905067ffffffffffffffff811115610409576104086103cc565b5b602083019150836020820283011115610425576104246103d1565b5b9250929050565b60008083601f840112610442576104416103c7565b5b8235905067ffffffffffffffff81111561045f5761045e6103cc565b5b60208301915083600182028301111561047b5761047a6103d1565b5b9250929050565b60008060008060008060008060a0898b0312156104a2576104a16102a4565b5b60006104b08b828c016103b2565b98505060206104c18b828c016103b2565b975050604089013567ffffffffffffffff8111156104e2576104e16102a9565b5b6104ee8b828c016103d6565b9650965050606089013567ffffffffffffffff811115610511576105106102a9565b5b61051d8b828c016103d6565b9450945050608089013567ffffffffffffffff8111156105405761053f6102a9565b5b61054c8b828c0161042c565b92509250509295985092959890939650565b610567816102ae565b82525050565b6000602082019050610582600083018461055e565b92915050565b6000819050919050565b61059b81610588565b81146105a657600080fd5b50565b6000813590506105b881610592565b92915050565b60008060008060008060a087890312156105db576105da6102a4565b5b60006105e989828a016103b2565b96505060206105fa89828a016103b2565b955050604061060b89828a016105a9565b945050606061061c89828a016105a9565b935050608087013567ffffffffffffffff81111561063d5761063c6102a9565b5b61064989828a0161042c565b92509250509295509295509295565b600082825260208201905092915050565b7f4552433131353552656365697665724d6f636b3a20726576657274696e67206f60008201527f6e20626174636820726563656976650000000000000000000000000000000000602082015250565b60006106c5602f83610658565b91506106d082610669565b604082019050919050565b600060208201905081810360008301526106f4816106b8565b9050919050565b61070481610389565b82525050565b600082825260208201905092915050565b600080fd5b82818337600083830152505050565b600061073b838561070a565b93507f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83111561076e5761076d61071b565b5b60208302925061077f838584610720565b82840190509392505050565b600082825260208201905092915050565b6000601f19601f8301169050919050565b60006107b9838561078b565b93506107c6838584610720565b6107cf8361079c565b840190509392505050565b6107e381610588565b82525050565b600060c0820190506107fe600083018c6106fb565b61080b602083018b6106fb565b818103604083015261081e81898b61072f565b9050818103606083015261083381878961072f565b905081810360808301526108488185876107ad565b905061085760a08301846107da565b9a9950505050505050505050565b7f4552433131353552656365697665724d6f636b3a20726576657274696e67206f60008201527f6e20726563656976650000000000000000000000000000000000000000000000602082015250565b60006108c1602983610658565b91506108cc82610865565b604082019050919050565b600060208201905081810360008301526108f0816108b4565b9050919050565b600060c08201905061090c600083018a6106fb565b61091960208301896106fb565b61092660408301886107da565b61093360608301876107da565b81810360808301526109468185876107ad565b905061095560a08301846107da565b9897505050505050505056fea2646970667358221220673ca123afe9a36e6ed29dcb14d6df5710e66dea18031ab4fa22ce98ea175dd764736f6c63430008090033";

type ERC1155ReceiverMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155ReceiverMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155ReceiverMock__factory extends ContractFactory {
  constructor(...args: ERC1155ReceiverMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    recRetval: PromiseOrValue<BytesLike>,
    recReverts: PromiseOrValue<boolean>,
    batRetval: PromiseOrValue<BytesLike>,
    batReverts: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1155ReceiverMock> {
    return super.deploy(
      recRetval,
      recReverts,
      batRetval,
      batReverts,
      overrides || {}
    ) as Promise<ERC1155ReceiverMock>;
  }
  override getDeployTransaction(
    recRetval: PromiseOrValue<BytesLike>,
    recReverts: PromiseOrValue<boolean>,
    batRetval: PromiseOrValue<BytesLike>,
    batReverts: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      recRetval,
      recReverts,
      batRetval,
      batReverts,
      overrides || {}
    );
  }
  override attach(address: string): ERC1155ReceiverMock {
    return super.attach(address) as ERC1155ReceiverMock;
  }
  override connect(signer: Signer): ERC1155ReceiverMock__factory {
    return super.connect(signer) as ERC1155ReceiverMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155ReceiverMockInterface {
    return new utils.Interface(_abi) as ERC1155ReceiverMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155ReceiverMock {
    return new Contract(address, _abi, signerOrProvider) as ERC1155ReceiverMock;
  }
}