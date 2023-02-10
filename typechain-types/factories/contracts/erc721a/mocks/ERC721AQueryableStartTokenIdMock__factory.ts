/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ERC721AQueryableStartTokenIdMock,
  ERC721AQueryableStartTokenIdMockInterface,
} from "../../../../contracts/erc721a/mocks/ERC721AQueryableStartTokenIdMock";

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
      {
        internalType: "uint256",
        name: "startTokenId_",
        type: "uint256",
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
    name: "InvalidQueryRange",
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
    ],
    name: "explicitOwnershipOf",
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
        name: "ownership",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "explicitOwnershipsOf",
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
        internalType: "struct IERC721A.TokenOwnership[]",
        name: "",
        type: "tuple[]",
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
    inputs: [],
    name: "startTokenId",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "tokensOfOwner",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
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
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stop",
        type: "uint256",
      },
    ],
    name: "tokensOfOwnerIn",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
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
  "0x60806040523480156200001157600080fd5b5060405162002a1838038062002a1883398181016040528101906200003791906200032a565b8282818184806000819055505081600390805190602001906200005c929190620000a2565b50806004908051906020019062000075929190620000a2565b50620000866200009960201b60201c565b6001819055505050505050505062000429565b60008054905090565b828054620000b090620003f3565b90600052602060002090601f016020900481019282620000d4576000855562000120565b82601f10620000ef57805160ff191683800117855562000120565b8280016001018555821562000120579182015b828111156200011f57825182559160200191906001019062000102565b5b5090506200012f919062000133565b5090565b5b808211156200014e57600081600090555060010162000134565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001bb8262000170565b810181811067ffffffffffffffff82111715620001dd57620001dc62000181565b5b80604052505050565b6000620001f262000152565b9050620002008282620001b0565b919050565b600067ffffffffffffffff82111562000223576200022262000181565b5b6200022e8262000170565b9050602081019050919050565b60005b838110156200025b5780820151818401526020810190506200023e565b838111156200026b576000848401525b50505050565b600062000288620002828462000205565b620001e6565b905082815260208101848484011115620002a757620002a66200016b565b5b620002b48482856200023b565b509392505050565b600082601f830112620002d457620002d362000166565b5b8151620002e684826020860162000271565b91505092915050565b6000819050919050565b6200030481620002ef565b81146200031057600080fd5b50565b6000815190506200032481620002f9565b92915050565b6000806000606084860312156200034657620003456200015c565b5b600084015167ffffffffffffffff81111562000367576200036662000161565b5b6200037586828701620002bc565b935050602084015167ffffffffffffffff81111562000399576200039862000161565b5b620003a786828701620002bc565b9250506040620003ba8682870162000313565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200040c57607f821691505b60208210811415620004235762000422620003c4565b5b50919050565b6125df80620004396000396000f3fe60806040526004361061012a5760003560e01c806370a08231116100ab578063a22cb4651161006f578063a22cb46514610401578063b88d4fde1461042a578063c23dc68f14610446578063c87b56dd14610483578063e6798baa146104c0578063e985e9c5146104eb5761012a565b806370a08231146102f65780638462151c1461033357806395d89b411461037057806399a2557a1461039b578063a1448194146103d85761012a565b806323b872dd116100f257806323b872dd1461021b57806342842e0e1461023757806342966c68146102535780635bbb21771461027c5780636352211e146102b95761012a565b806301ffc9a71461012f57806306fdde031461016c578063081812fc14610197578063095ea7b3146101d457806318160ddd146101f0575b600080fd5b34801561013b57600080fd5b5061015660048036038101906101519190611ad9565b610528565b6040516101639190611b21565b60405180910390f35b34801561017857600080fd5b506101816105ba565b60405161018e9190611bd5565b60405180910390f35b3480156101a357600080fd5b506101be60048036038101906101b99190611c2d565b61064c565b6040516101cb9190611c9b565b60405180910390f35b6101ee60048036038101906101e99190611ce2565b6106aa565b005b3480156101fc57600080fd5b506102056106ba565b6040516102129190611d31565b60405180910390f35b61023560048036038101906102309190611d4c565b6106d1565b005b610251600480360381019061024c9190611d4c565b610995565b005b34801561025f57600080fd5b5061027a60048036038101906102759190611c2d565b6109b5565b005b34801561028857600080fd5b506102a3600480360381019061029e9190611e04565b6109c3565b6040516102b09190611fb4565b60405180910390f35b3480156102c557600080fd5b506102e060048036038101906102db9190611c2d565b610a23565b6040516102ed9190611c9b565b60405180910390f35b34801561030257600080fd5b5061031d60048036038101906103189190611fd6565b610a35565b60405161032a9190611d31565b60405180910390f35b34801561033f57600080fd5b5061035a60048036038101906103559190611fd6565b610acd565b60405161036791906120c1565b60405180910390f35b34801561037c57600080fd5b50610385610b5e565b6040516103929190611bd5565b60405180910390f35b3480156103a757600080fd5b506103c260048036038101906103bd91906120e3565b610bf0565b6040516103cf91906120c1565b60405180910390f35b3480156103e457600080fd5b506103ff60048036038101906103fa9190611ce2565b610d08565b005b34801561040d57600080fd5b5061042860048036038101906104239190612162565b610d16565b005b610444600480360381019061043f91906122d2565b610e21565b005b34801561045257600080fd5b5061046d60048036038101906104689190611c2d565b610e73565b60405161047a91906123aa565b60405180910390f35b34801561048f57600080fd5b506104aa60048036038101906104a59190611c2d565b610ebf565b6040516104b79190611bd5565b60405180910390f35b3480156104cc57600080fd5b506104d5610f3d565b6040516104e29190611d31565b60405180910390f35b3480156104f757600080fd5b50610512600480360381019061050d91906123c5565b610f43565b60405161051f9190611b21565b60405180910390f35b60006301ffc9a760e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061058357506380ac58cd60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806105b35750635b5e139f60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b6060600380546105c990612434565b80601f01602080910402602001604051908101604052809291908181526020018280546105f590612434565b80156106425780601f1061061757610100808354040283529160200191610642565b820191906000526020600020905b81548152906001019060200180831161062557829003601f168201915b5050505050905090565b600061065782610fd7565b61066c5761066b63cf4700e460e01b611036565b5b6007600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6106b682826001611040565b5050565b60006106c461116f565b6002546001540303905090565b60006106dc82611178565b905073ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff161693508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146107515761075063a114810060e01b611036565b5b60008061075d8461123b565b91509150610773818761076e611262565b61126a565b61079e5761078886610783611262565b610f43565b61079d5761079c6359c896be60e01b611036565b5b5b6107ab86868660016112ae565b80156107b657600082555b600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081546001900391905081905550600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815460010191905081905550610884856108608888876112b4565b7c0200000000000000000000000000000000000000000000000000000000176112dc565b600560008681526020019081526020016000208190555060007c02000000000000000000000000000000000000000000000000000000008416141561090c57600060018501905060006005600083815260200190815260200160002054141561090a576001548114610909578360056000838152602001908152602001600020819055505b5b505b600073ffffffffffffffffffffffffffffffffffffffff8673ffffffffffffffffffffffffffffffffffffffff161690508481887fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4600081141561097f5761097e63ea553b3460e01b611036565b5b61098c8787876001611307565b50505050505050565b6109b083838360405180602001604052806000815250610e21565b505050565b6109c081600161130d565b50565b606080600084849050905060405191508082528060051b90508060208301016040525b60008114610a185760006020820391508186013590506000610a0782610e73565b9050808360208601015250506109e6565b819250505092915050565b6000610a2e82611178565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a7c57610a7b638f4eb60460e01b611036565b5b67ffffffffffffffff600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054169050919050565b60606000610ada83610a35565b9050606060405190506001820160051b81016040528181526000806000610aff61116f565b90505b848214610b51576000610b1482611540565b90506040810151610b4557805115610b2b57805193505b87841860601b610b4457600183019250818360051b8601525b5b60018201915050610b02565b5082945050505050919050565b606060048054610b6d90612434565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9990612434565b8015610be65780601f10610bbb57610100808354040283529160200191610be6565b820191906000526020600020905b815481529060010190602001808311610bc957829003601f168201915b5050505050905090565b6060818310610c0a57610c096332c1995a60e01b611036565b5b610c1261116f565b831015610c2457610c2161116f565b92505b6000610c2e61156b565b9050808310610c3b578092505b60606000610c4887610a35565b905060008587109050808202915060008214610cfa578187870311610c6d5786860391505b60405192506001820160051b83016040526000610c8988610e73565b905060008160400151610c9e57816000015190505b60005b610caa8a611540565b92506040830151610cdb57825115610cc157825191505b8a821860601b610cda57600181019050898160051b8701525b5b60018a019950888a1480610cee57508481145b15610ca1578086525050505b829450505050509392505050565b610d128282611575565b5050565b8060086000610d23611262565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610dd0611262565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610e159190611b21565b60405180910390a35050565b610e2c8484846106d1565b60008373ffffffffffffffffffffffffffffffffffffffff163b14610e6d57610e5784848484611593565b610e6c57610e6b63d1a57ed660e01b611036565b5b5b50505050565b610e7b611a1e565b610e8361116f565b8210610eba57610e9161156b565b821015610eb957610ea182611540565b90508060400151610eb857610eb5826116d2565b90505b5b5b919050565b6060610eca82610fd7565b610edf57610ede63a14c4b5060e01b611036565b5b6000610ee96116f2565b9050600081511415610f0a5760405180602001604052806000815250610f35565b80610f1484611709565b604051602001610f259291906124a2565b6040516020818303038152906040525b915050919050565b60005481565b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600081610fe261116f565b11158015610ff1575060015482105b801561102f575060007c0100000000000000000000000000000000000000000000000000000000600560008581526020019081526020016000205416145b9050919050565b8060005260046000fd5b600061104b83610a23565b905081801561108d57508073ffffffffffffffffffffffffffffffffffffffff16611074611262565b73ffffffffffffffffffffffffffffffffffffffff1614155b156110b9576110a38161109e611262565b610f43565b6110b8576110b763cfb3b94260e01b611036565b5b5b836007600085815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a450505050565b60008054905090565b60008161118361116f565b11611225576005600083815260200190815260200160002054905060007c01000000000000000000000000000000000000000000000000000000008216141561122457600081141561121f5760015482106111e9576111e863df2d9b4260e01b611036565b5b5b600560008360019003935083815260200190815260200160002054905060008114156112155761121a565b611236565b6111ea565b611236565b5b61123563df2d9b4260e01b611036565b5b919050565b60008060006007600085815260200190815260200160002090508092508254915050915091565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff8316925073ffffffffffffffffffffffffffffffffffffffff821691508382148383141790509392505050565b50505050565b60008060e883901c905060e86112cb868684611762565b62ffffff16901b9150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff83169250814260a01b178317905092915050565b50505050565b600061131883611178565b9050600081905060008061132b8661123b565b915091508415611373576113478184611342611262565b61126a565b6113725761135c83611357611262565b610f43565b611371576113706359c896be60e01b611036565b5b5b5b6113818360008860016112ae565b801561138c57600082555b600160806001901b03600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550611434836113f1856000886112b4565b7c02000000000000000000000000000000000000000000000000000000007c010000000000000000000000000000000000000000000000000000000017176112dc565b600560008881526020019081526020016000208190555060007c0200000000000000000000000000000000000000000000000000000000851614156114bc5760006001870190506000600560008381526020019081526020016000205414156114ba5760015481146114b9578460056000838152602001908152602001600020819055505b5b505b85600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611526836000886001611307565b600260008154809291906001019190505550505050505050565b611548611a1e565b611564600560008481526020019081526020016000205461176b565b9050919050565b6000600154905090565b61158f828260405180602001604052806000815250611821565b5050565b60008373ffffffffffffffffffffffffffffffffffffffff1663150b7a026115b9611262565b8786866040518563ffffffff1660e01b81526004016115db949392919061251b565b602060405180830381600087803b1580156115f557600080fd5b505af192505050801561162657506040513d601f19601f82011682018060405250810190611623919061257c565b60015b61167f573d8060008114611656576040519150601f19603f3d011682016040523d82523d6000602084013e61165b565b606091505b506000815114156116775761167663d1a57ed660e01b611036565b5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b6116da611a1e565b6116eb6116e683611178565b61176b565b9050919050565b606060405180602001604052806000815250905090565b606060a060405101806040526020810391506000825281835b60011561174d57600184039350600a81066030018453600a81049050806117485761174d565b611722565b50828103602084039350808452505050919050565b60009392505050565b611773611a1e565b81816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060a082901c816020019067ffffffffffffffff16908167ffffffffffffffff168152505060007c01000000000000000000000000000000000000000000000000000000008316141581604001901515908115158152505060e882901c816060019062ffffff16908162ffffff1681525050919050565b61182b83836118a7565b60008373ffffffffffffffffffffffffffffffffffffffff163b146118a25760006001549050600083820390505b61186c6000868380600101945086611593565b6118815761188063d1a57ed660e01b611036565b5b81811061185957816001541461189f5761189e600060e01b611036565b5b50505b505050565b6000600154905060008214156118c8576118c763b562e8dd60e01b611036565b5b6118d560008483856112ae565b6118f5836118e660008660006112b4565b6118ef85611a0e565b176112dc565b6005600083815260200190815260200160002081905550600160406001901b178202600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600073ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff1616905060008114156119ae576119ad632e07630060e01b611036565b5b6000838301905060008390505b808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4818160010191508114156119bb5781600181905550505050611a096000848385611307565b505050565b60006001821460e11b9050919050565b6040518060800160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff168152602001600015158152602001600062ffffff1681525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611ab681611a81565b8114611ac157600080fd5b50565b600081359050611ad381611aad565b92915050565b600060208284031215611aef57611aee611a77565b5b6000611afd84828501611ac4565b91505092915050565b60008115159050919050565b611b1b81611b06565b82525050565b6000602082019050611b366000830184611b12565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611b76578082015181840152602081019050611b5b565b83811115611b85576000848401525b50505050565b6000601f19601f8301169050919050565b6000611ba782611b3c565b611bb18185611b47565b9350611bc1818560208601611b58565b611bca81611b8b565b840191505092915050565b60006020820190508181036000830152611bef8184611b9c565b905092915050565b6000819050919050565b611c0a81611bf7565b8114611c1557600080fd5b50565b600081359050611c2781611c01565b92915050565b600060208284031215611c4357611c42611a77565b5b6000611c5184828501611c18565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c8582611c5a565b9050919050565b611c9581611c7a565b82525050565b6000602082019050611cb06000830184611c8c565b92915050565b611cbf81611c7a565b8114611cca57600080fd5b50565b600081359050611cdc81611cb6565b92915050565b60008060408385031215611cf957611cf8611a77565b5b6000611d0785828601611ccd565b9250506020611d1885828601611c18565b9150509250929050565b611d2b81611bf7565b82525050565b6000602082019050611d466000830184611d22565b92915050565b600080600060608486031215611d6557611d64611a77565b5b6000611d7386828701611ccd565b9350506020611d8486828701611ccd565b9250506040611d9586828701611c18565b9150509250925092565b600080fd5b600080fd5b600080fd5b60008083601f840112611dc457611dc3611d9f565b5b8235905067ffffffffffffffff811115611de157611de0611da4565b5b602083019150836020820283011115611dfd57611dfc611da9565b5b9250929050565b60008060208385031215611e1b57611e1a611a77565b5b600083013567ffffffffffffffff811115611e3957611e38611a7c565b5b611e4585828601611dae565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611e8681611c7a565b82525050565b600067ffffffffffffffff82169050919050565b611ea981611e8c565b82525050565b611eb881611b06565b82525050565b600062ffffff82169050919050565b611ed681611ebe565b82525050565b608082016000820151611ef26000850182611e7d565b506020820151611f056020850182611ea0565b506040820151611f186040850182611eaf565b506060820151611f2b6060850182611ecd565b50505050565b6000611f3d8383611edc565b60808301905092915050565b6000602082019050919050565b6000611f6182611e51565b611f6b8185611e5c565b9350611f7683611e6d565b8060005b83811015611fa7578151611f8e8882611f31565b9750611f9983611f49565b925050600181019050611f7a565b5085935050505092915050565b60006020820190508181036000830152611fce8184611f56565b905092915050565b600060208284031215611fec57611feb611a77565b5b6000611ffa84828501611ccd565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61203881611bf7565b82525050565b600061204a838361202f565b60208301905092915050565b6000602082019050919050565b600061206e82612003565b612078818561200e565b93506120838361201f565b8060005b838110156120b457815161209b888261203e565b97506120a683612056565b925050600181019050612087565b5085935050505092915050565b600060208201905081810360008301526120db8184612063565b905092915050565b6000806000606084860312156120fc576120fb611a77565b5b600061210a86828701611ccd565b935050602061211b86828701611c18565b925050604061212c86828701611c18565b9150509250925092565b61213f81611b06565b811461214a57600080fd5b50565b60008135905061215c81612136565b92915050565b6000806040838503121561217957612178611a77565b5b600061218785828601611ccd565b92505060206121988582860161214d565b9150509250929050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6121df82611b8b565b810181811067ffffffffffffffff821117156121fe576121fd6121a7565b5b80604052505050565b6000612211611a6d565b905061221d82826121d6565b919050565b600067ffffffffffffffff82111561223d5761223c6121a7565b5b61224682611b8b565b9050602081019050919050565b82818337600083830152505050565b600061227561227084612222565b612207565b905082815260208101848484011115612291576122906121a2565b5b61229c848285612253565b509392505050565b600082601f8301126122b9576122b8611d9f565b5b81356122c9848260208601612262565b91505092915050565b600080600080608085870312156122ec576122eb611a77565b5b60006122fa87828801611ccd565b945050602061230b87828801611ccd565b935050604061231c87828801611c18565b925050606085013567ffffffffffffffff81111561233d5761233c611a7c565b5b612349878288016122a4565b91505092959194509250565b60808201600082015161236b6000850182611e7d565b50602082015161237e6020850182611ea0565b5060408201516123916040850182611eaf565b5060608201516123a46060850182611ecd565b50505050565b60006080820190506123bf6000830184612355565b92915050565b600080604083850312156123dc576123db611a77565b5b60006123ea85828601611ccd565b92505060206123fb85828601611ccd565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061244c57607f821691505b602082108114156124605761245f612405565b5b50919050565b600081905092915050565b600061247c82611b3c565b6124868185612466565b9350612496818560208601611b58565b80840191505092915050565b60006124ae8285612471565b91506124ba8284612471565b91508190509392505050565b600081519050919050565b600082825260208201905092915050565b60006124ed826124c6565b6124f781856124d1565b9350612507818560208601611b58565b61251081611b8b565b840191505092915050565b60006080820190506125306000830187611c8c565b61253d6020830186611c8c565b61254a6040830185611d22565b818103606083015261255c81846124e2565b905095945050505050565b60008151905061257681611aad565b92915050565b60006020828403121561259257612591611a77565b5b60006125a084828501612567565b9150509291505056fea26469706673582212208fcedffec4dcf732d07694b2b3ecdf9386669f9a06899cf7408243ff7b65a29264736f6c63430008090033";

type ERC721AQueryableStartTokenIdMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721AQueryableStartTokenIdMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721AQueryableStartTokenIdMock__factory extends ContractFactory {
  constructor(...args: ERC721AQueryableStartTokenIdMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    startTokenId_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721AQueryableStartTokenIdMock> {
    return super.deploy(
      name_,
      symbol_,
      startTokenId_,
      overrides || {}
    ) as Promise<ERC721AQueryableStartTokenIdMock>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    startTokenId_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      startTokenId_,
      overrides || {}
    );
  }
  override attach(address: string): ERC721AQueryableStartTokenIdMock {
    return super.attach(address) as ERC721AQueryableStartTokenIdMock;
  }
  override connect(signer: Signer): ERC721AQueryableStartTokenIdMock__factory {
    return super.connect(signer) as ERC721AQueryableStartTokenIdMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721AQueryableStartTokenIdMockInterface {
    return new utils.Interface(
      _abi
    ) as ERC721AQueryableStartTokenIdMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721AQueryableStartTokenIdMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC721AQueryableStartTokenIdMock;
  }
}