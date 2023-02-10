/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ERC721AMock,
  ERC721AMockInterface,
} from "../../../../contracts/erc721a/mocks/ERC721AMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintERC2309QuantityExceedsLimit",
    type: "error",
  },
  {
    inputs: [],
    name: "MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintZeroQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnershipNotInitializedForExtraData",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toTokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "ConsecutiveTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "baseURI",
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
        name: "tokenId",
        type: "uint256",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "approvalCheck",
        type: "bool",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "directApprove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "exists",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "getAux",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getOwnershipAt",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "startTimestamp",
            type: "uint64",
          },
          {
            internalType: "bool",
            name: "burned",
            type: "bool",
          },
          {
            internalType: "uint24",
            name: "extraData",
            type: "uint24",
          },
        ],
        internalType: "struct IERC721A.TokenOwnership",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getOwnershipOf",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "startTimestamp",
            type: "uint64",
          },
          {
            internalType: "bool",
            name: "burned",
            type: "bool",
          },
          {
            internalType: "uint24",
            name: "extraData",
            type: "uint24",
          },
        ],
        internalType: "struct IERC721A.TokenOwnership",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "initializeOwnershipAt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    inputs: [],
    name: "nextTokenId",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "numberMinted",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "aux",
        type: "uint64",
      },
    ],
    name: "setAux",
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
  {
    inputs: [],
    name: "symbol",
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
        name: "x",
        type: "uint256",
      },
    ],
    name: "toString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
    inputs: [],
    name: "totalBurned",
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
    name: "totalMinted",
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
    name: "totalSupply",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002b1838038062002b188339818101604052810190620000379190620002dd565b818181600290805190602001906200005192919062000090565b5080600390805190602001906200006a92919062000090565b506200007b6200008b60201b60201c565b60008190555050505050620003c7565b600090565b8280546200009e9062000391565b90600052602060002090601f016020900481019282620000c257600085556200010e565b82601f10620000dd57805160ff19168380011785556200010e565b828001600101855582156200010e579182015b828111156200010d578251825591602001919060010190620000f0565b5b5090506200011d919062000121565b5090565b5b808211156200013c57600081600090555060010162000122565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001a9826200015e565b810181811067ffffffffffffffff82111715620001cb57620001ca6200016f565b5b80604052505050565b6000620001e062000140565b9050620001ee82826200019e565b919050565b600067ffffffffffffffff8211156200021157620002106200016f565b5b6200021c826200015e565b9050602081019050919050565b60005b83811015620002495780820151818401526020810190506200022c565b8381111562000259576000848401525b50505050565b6000620002766200027084620001f3565b620001d4565b90508281526020810184848401111562000295576200029462000159565b5b620002a284828562000229565b509392505050565b600082601f830112620002c257620002c162000154565b5b8151620002d48482602086016200025f565b91505092915050565b60008060408385031215620002f757620002f66200014a565b5b600083015167ffffffffffffffff8111156200031857620003176200014f565b5b6200032685828601620002aa565b925050602083015167ffffffffffffffff8111156200034a57620003496200014f565b5b6200035885828601620002aa565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003aa57607f821691505b60208210811415620003c157620003c062000362565b5b50919050565b61274180620003d76000396000f3fe6080604052600436106101e35760003560e01c806370a0823111610102578063a2309ff811610095578063d89135cd11610064578063d89135cd146106f0578063dc33e6811461071b578063e985e9c514610758578063f252363314610795576101e3565b8063a2309ff81461062f578063b88d4fde1461065a578063bf0b175e14610676578063c87b56dd146106b3576101e3565b806395d89b41116100d157806395d89b41146105895780639fac68cb146105b4578063a1448194146105dd578063a22cb46514610606576101e3565b806370a08231146104cf57806375794a3c1461050c5780638529eea6146105375780638832e6e314610560576101e3565b806342966c681161017a57806353b1233d1161014957806353b1233d146104015780636352211e1461042a5780636900a3ae146104675780636c0360eb146104a4576101e3565b806342966c6814610335578063453ab1411461035e5780634f558e791461038757806352d8a4d1146103c4576101e3565b806318160ddd116101b657806318160ddd146102a957806323b872dd146102d457806340c10f19146102f057806342842e0e14610319576101e3565b806301ffc9a7146101e857806306fdde0314610225578063081812fc14610250578063095ea7b31461028d575b600080fd5b3480156101f457600080fd5b5061020f600480360381019061020a9190611dfc565b6107d2565b60405161021c9190611e44565b60405180910390f35b34801561023157600080fd5b5061023a610864565b6040516102479190611ef8565b60405180910390f35b34801561025c57600080fd5b5061027760048036038101906102729190611f50565b6108f6565b6040516102849190611fbe565b60405180910390f35b6102a760048036038101906102a29190612005565b610954565b005b3480156102b557600080fd5b506102be610964565b6040516102cb9190612054565b60405180910390f35b6102ee60048036038101906102e9919061206f565b61097b565b005b3480156102fc57600080fd5b5061031760048036038101906103129190612005565b610c3f565b005b610333600480360381019061032e919061206f565b610c4d565b005b34801561034157600080fd5b5061035c60048036038101906103579190611f50565b610c6d565b005b34801561036a57600080fd5b5061038560048036038101906103809190612102565b610c79565b005b34801561039357600080fd5b506103ae60048036038101906103a99190611f50565b610c87565b6040516103bb9190611e44565b60405180910390f35b3480156103d057600080fd5b506103eb60048036038101906103e69190611f50565b610c99565b6040516103f891906121e2565b60405180910390f35b34801561040d57600080fd5b5061042860048036038101906104239190611f50565b610cb1565b005b34801561043657600080fd5b50610451600480360381019061044c9190611f50565b610cbd565b60405161045e9190611fbe565b60405180910390f35b34801561047357600080fd5b5061048e60048036038101906104899190611f50565b610ccf565b60405161049b9190611ef8565b60405180910390f35b3480156104b057600080fd5b506104b9610ce1565b6040516104c69190611ef8565b60405180910390f35b3480156104db57600080fd5b506104f660048036038101906104f191906121fd565b610cf0565b6040516105039190612054565b60405180910390f35b34801561051857600080fd5b50610521610d88565b60405161052e9190612054565b60405180910390f35b34801561054357600080fd5b5061055e60048036038101906105599190612005565b610d97565b005b34801561056c57600080fd5b506105876004803603810190610582919061235f565b610da5565b005b34801561059557600080fd5b5061059e610db5565b6040516105ab9190611ef8565b60405180910390f35b3480156105c057600080fd5b506105db60048036038101906105d691906123fa565b610e47565b005b3480156105e957600080fd5b5061060460048036038101906105ff9190612005565b610e55565b005b34801561061257600080fd5b5061062d6004803603810190610628919061243a565b610e63565b005b34801561063b57600080fd5b50610644610f6e565b6040516106519190612054565b60405180910390f35b610674600480360381019061066f919061247a565b610f7d565b005b34801561068257600080fd5b5061069d600480360381019061069891906121fd565b610fcf565b6040516106aa919061250c565b60405180910390f35b3480156106bf57600080fd5b506106da60048036038101906106d59190611f50565b610fe1565b6040516106e79190611ef8565b60405180910390f35b3480156106fc57600080fd5b5061070561105f565b6040516107129190612054565b60405180910390f35b34801561072757600080fd5b50610742600480360381019061073d91906121fd565b61106e565b60405161074f9190612054565b60405180910390f35b34801561076457600080fd5b5061077f600480360381019061077a9190612527565b611080565b60405161078c9190611e44565b60405180910390f35b3480156107a157600080fd5b506107bc60048036038101906107b79190611f50565b611114565b6040516107c991906121e2565b60405180910390f35b60006301ffc9a760e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061082d57506380ac58cd60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061085d5750635b5e139f60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b60606002805461087390612596565b80601f016020809104026020016040519081016040528092919081815260200182805461089f90612596565b80156108ec5780601f106108c1576101008083540402835291602001916108ec565b820191906000526020600020905b8154815290600101906020018083116108cf57829003601f168201915b5050505050905090565b60006109018261112c565b6109165761091563cf4700e460e01b61118b565b5b6006600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b61096082826001611195565b5050565b600061096e6112c4565b6001546000540303905090565b6000610986826112c9565b905073ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff161693508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146109fb576109fa63a114810060e01b61118b565b5b600080610a078461138c565b91509150610a1d8187610a186113b3565b6113bb565b610a4857610a3286610a2d6113b3565b611080565b610a4757610a466359c896be60e01b61118b565b5b5b610a5586868660016113ff565b8015610a6057600082555b600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081546001900391905081905550600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815460010191905081905550610b2e85610b0a888887611405565b7c02000000000000000000000000000000000000000000000000000000001761142d565b600460008681526020019081526020016000208190555060007c020000000000000000000000000000000000000000000000000000000084161415610bb6576000600185019050600060046000838152602001908152602001600020541415610bb4576000548114610bb3578360046000838152602001908152602001600020819055505b5b505b600073ffffffffffffffffffffffffffffffffffffffff8673ffffffffffffffffffffffffffffffffffffffff161690508481887fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a46000811415610c2957610c2863ea553b3460e01b61118b565b5b610c368787876001611458565b50505050505050565b610c49828261145e565b5050565b610c6883838360405180602001604052806000815250610f7d565b505050565b610c76816115c4565b50565b610c8382826115d2565b5050565b6000610c928261112c565b9050919050565b610ca1611d41565b610caa82611688565b9050919050565b610cba816116a8565b50565b6000610cc8826112c9565b9050919050565b6060610cda826116e8565b9050919050565b6060610ceb611741565b905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d3757610d36638f4eb60460e01b61118b565b5b67ffffffffffffffff600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054169050919050565b6000610d92611758565b905090565b610da18282611761565b5050565b610db0838383611771565b505050565b606060038054610dc490612596565b80601f0160208091040260200160405190810160405280929190818152602001828054610df090612596565b8015610e3d5780601f10610e1257610100808354040283529160200191610e3d565b820191906000526020600020905b815481529060010190602001808311610e2057829003601f168201915b5050505050905090565b610e5182826117f6565b5050565b610e5f8282611a29565b5050565b8060076000610e706113b3565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610f1d6113b3565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610f629190611e44565b60405180910390a35050565b6000610f78611a47565b905090565b610f8884848461097b565b60008373ffffffffffffffffffffffffffffffffffffffff163b14610fc957610fb384848484611a5a565b610fc857610fc763d1a57ed660e01b61118b565b5b5b50505050565b6000610fda82611b99565b9050919050565b6060610fec8261112c565b6110015761100063a14c4b5060e01b61118b565b5b600061100b611741565b905060008151141561102c5760405180602001604052806000815250611057565b80611036846116e8565b604051602001611047929190612604565b6040516020818303038152906040525b915050919050565b6000611069611be6565b905090565b600061107982611bf0565b9050919050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61111c611d41565b61112582611c47565b9050919050565b6000816111376112c4565b11158015611146575060005482105b8015611184575060007c0100000000000000000000000000000000000000000000000000000000600460008581526020019081526020016000205416145b9050919050565b8060005260046000fd5b60006111a083610cbd565b90508180156111e257508073ffffffffffffffffffffffffffffffffffffffff166111c96113b3565b73ffffffffffffffffffffffffffffffffffffffff1614155b1561120e576111f8816111f36113b3565b611080565b61120d5761120c63cfb3b94260e01b61118b565b5b5b836006600085815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a450505050565b600090565b6000816112d46112c4565b11611376576004600083815260200190815260200160002054905060007c01000000000000000000000000000000000000000000000000000000008216141561137557600081141561137057600054821061133a5761133963df2d9b4260e01b61118b565b5b5b600460008360019003935083815260200190815260200160002054905060008114156113665761136b565b611387565b61133b565b611387565b5b61138663df2d9b4260e01b61118b565b5b919050565b60008060006006600085815260200190815260200160002090508092508254915050915091565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff8316925073ffffffffffffffffffffffffffffffffffffffff821691508382148383141790509392505050565b50505050565b60008060e883901c905060e861141c868684611c72565b62ffffff16901b9150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff83169250814260a01b178317905092915050565b50505050565b600080549050600082141561147e5761147d63b562e8dd60e01b61118b565b5b61148b60008483856113ff565b6114ab8361149c6000866000611405565b6114a585611c7b565b1761142d565b6004600083815260200190815260200160002081905550600160406001901b178202600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600073ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff16169050600081141561156457611563632e07630060e01b61118b565b5b6000838301905060008390505b808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a48181600101915081141561157157816000819055505050506115bf6000848385611458565b505050565b6115cf8160006117f6565b50565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600082905060c081901b77ffffffffffffffffffffffffffffffffffffffffffffffff831617915081600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050505050565b611690611d41565b6116a161169c836112c9565b611c8b565b9050919050565b6000600460008381526020019081526020016000205414156116e5576116cd816112c9565b60046000838152602001908152602001600020819055505b50565b606060a060405101806040526020810391506000825281835b60011561172c57600184039350600a81066030018453600a81049050806117275761172c565b611701565b50828103602084039350808452505050919050565b606060405180602001604052806000815250905090565b60008054905090565b61176d82826000611195565b5050565b61177b838361145e565b60008373ffffffffffffffffffffffffffffffffffffffff163b146117f157600080549050600083820390505b6117bb6000868380600101945086611a5a565b6117d0576117cf63d1a57ed660e01b61118b565b5b8181106117a85781600054146117ee576117ed600060e01b61118b565b5b50505b505050565b6000611801836112c9565b905060008190506000806118148661138c565b91509150841561185c57611830818461182b6113b3565b6113bb565b61185b57611845836118406113b3565b611080565b61185a576118596359c896be60e01b61118b565b5b5b5b61186a8360008860016113ff565b801561187557600082555b600160806001901b03600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555061191d836118da85600088611405565b7c02000000000000000000000000000000000000000000000000000000007c0100000000000000000000000000000000000000000000000000000000171761142d565b600460008881526020019081526020016000208190555060007c0200000000000000000000000000000000000000000000000000000000851614156119a55760006001870190506000600460008381526020019081526020016000205414156119a35760005481146119a2578460046000838152602001908152602001600020819055505b5b505b85600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611a0f836000886001611458565b600160008154809291906001019190505550505050505050565b611a43828260405180602001604052806000815250611771565b5050565b6000611a516112c4565b60005403905090565b60008373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611a806113b3565b8786866040518563ffffffff1660e01b8152600401611aa2949392919061267d565b602060405180830381600087803b158015611abc57600080fd5b505af1925050508015611aed57506040513d601f19601f82011682018060405250810190611aea91906126de565b60015b611b46573d8060008114611b1d576040519150601f19603f3d011682016040523d82523d6000602084013e611b22565b606091505b50600081511415611b3e57611b3d63d1a57ed660e01b61118b565b5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b600060c0600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054901c9050919050565b6000600154905090565b600067ffffffffffffffff6040600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054901c169050919050565b611c4f611d41565b611c6b6004600084815260200190815260200160002054611c8b565b9050919050565b60009392505050565b60006001821460e11b9050919050565b611c93611d41565b81816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060a082901c816020019067ffffffffffffffff16908167ffffffffffffffff168152505060007c01000000000000000000000000000000000000000000000000000000008316141581604001901515908115158152505060e882901c816060019062ffffff16908162ffffff1681525050919050565b6040518060800160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff168152602001600015158152602001600062ffffff1681525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611dd981611da4565b8114611de457600080fd5b50565b600081359050611df681611dd0565b92915050565b600060208284031215611e1257611e11611d9a565b5b6000611e2084828501611de7565b91505092915050565b60008115159050919050565b611e3e81611e29565b82525050565b6000602082019050611e596000830184611e35565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611e99578082015181840152602081019050611e7e565b83811115611ea8576000848401525b50505050565b6000601f19601f8301169050919050565b6000611eca82611e5f565b611ed48185611e6a565b9350611ee4818560208601611e7b565b611eed81611eae565b840191505092915050565b60006020820190508181036000830152611f128184611ebf565b905092915050565b6000819050919050565b611f2d81611f1a565b8114611f3857600080fd5b50565b600081359050611f4a81611f24565b92915050565b600060208284031215611f6657611f65611d9a565b5b6000611f7484828501611f3b565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611fa882611f7d565b9050919050565b611fb881611f9d565b82525050565b6000602082019050611fd36000830184611faf565b92915050565b611fe281611f9d565b8114611fed57600080fd5b50565b600081359050611fff81611fd9565b92915050565b6000806040838503121561201c5761201b611d9a565b5b600061202a85828601611ff0565b925050602061203b85828601611f3b565b9150509250929050565b61204e81611f1a565b82525050565b60006020820190506120696000830184612045565b92915050565b60008060006060848603121561208857612087611d9a565b5b600061209686828701611ff0565b93505060206120a786828701611ff0565b92505060406120b886828701611f3b565b9150509250925092565b600067ffffffffffffffff82169050919050565b6120df816120c2565b81146120ea57600080fd5b50565b6000813590506120fc816120d6565b92915050565b6000806040838503121561211957612118611d9a565b5b600061212785828601611ff0565b9250506020612138858286016120ed565b9150509250929050565b61214b81611f9d565b82525050565b61215a816120c2565b82525050565b61216981611e29565b82525050565b600062ffffff82169050919050565b6121878161216f565b82525050565b6080820160008201516121a36000850182612142565b5060208201516121b66020850182612151565b5060408201516121c96040850182612160565b5060608201516121dc606085018261217e565b50505050565b60006080820190506121f7600083018461218d565b92915050565b60006020828403121561221357612212611d9a565b5b600061222184828501611ff0565b91505092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61226c82611eae565b810181811067ffffffffffffffff8211171561228b5761228a612234565b5b80604052505050565b600061229e611d90565b90506122aa8282612263565b919050565b600067ffffffffffffffff8211156122ca576122c9612234565b5b6122d382611eae565b9050602081019050919050565b82818337600083830152505050565b60006123026122fd846122af565b612294565b90508281526020810184848401111561231e5761231d61222f565b5b6123298482856122e0565b509392505050565b600082601f8301126123465761234561222a565b5b81356123568482602086016122ef565b91505092915050565b60008060006060848603121561237857612377611d9a565b5b600061238686828701611ff0565b935050602061239786828701611f3b565b925050604084013567ffffffffffffffff8111156123b8576123b7611d9f565b5b6123c486828701612331565b9150509250925092565b6123d781611e29565b81146123e257600080fd5b50565b6000813590506123f4816123ce565b92915050565b6000806040838503121561241157612410611d9a565b5b600061241f85828601611f3b565b9250506020612430858286016123e5565b9150509250929050565b6000806040838503121561245157612450611d9a565b5b600061245f85828601611ff0565b9250506020612470858286016123e5565b9150509250929050565b6000806000806080858703121561249457612493611d9a565b5b60006124a287828801611ff0565b94505060206124b387828801611ff0565b93505060406124c487828801611f3b565b925050606085013567ffffffffffffffff8111156124e5576124e4611d9f565b5b6124f187828801612331565b91505092959194509250565b612506816120c2565b82525050565b600060208201905061252160008301846124fd565b92915050565b6000806040838503121561253e5761253d611d9a565b5b600061254c85828601611ff0565b925050602061255d85828601611ff0565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806125ae57607f821691505b602082108114156125c2576125c1612567565b5b50919050565b600081905092915050565b60006125de82611e5f565b6125e881856125c8565b93506125f8818560208601611e7b565b80840191505092915050565b600061261082856125d3565b915061261c82846125d3565b91508190509392505050565b600081519050919050565b600082825260208201905092915050565b600061264f82612628565b6126598185612633565b9350612669818560208601611e7b565b61267281611eae565b840191505092915050565b60006080820190506126926000830187611faf565b61269f6020830186611faf565b6126ac6040830185612045565b81810360608301526126be8184612644565b905095945050505050565b6000815190506126d881611dd0565b92915050565b6000602082840312156126f4576126f3611d9a565b5b6000612702848285016126c9565b9150509291505056fea26469706673582212203a46e02e7f752ad6ccf5ec11cd8a3fbd142df137c2882f2d0358927a5925828364736f6c63430008090033";

type ERC721AMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721AMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721AMock__factory extends ContractFactory {
  constructor(...args: ERC721AMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721AMock> {
    return super.deploy(
      name_,
      symbol_,
      overrides || {}
    ) as Promise<ERC721AMock>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC721AMock {
    return super.attach(address) as ERC721AMock;
  }
  override connect(signer: Signer): ERC721AMock__factory {
    return super.connect(signer) as ERC721AMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721AMockInterface {
    return new utils.Interface(_abi) as ERC721AMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721AMock {
    return new Contract(address, _abi, signerOrProvider) as ERC721AMock;
  }
}