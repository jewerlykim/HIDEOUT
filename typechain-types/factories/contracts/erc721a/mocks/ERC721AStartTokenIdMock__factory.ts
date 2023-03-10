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
  ERC721AStartTokenIdMock,
  ERC721AStartTokenIdMockInterface,
} from "../../../../contracts/erc721a/mocks/ERC721AStartTokenIdMock";

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
  "0x60806040523480156200001157600080fd5b5060405162002bbd38038062002bbd83398181016040528101906200003791906200032a565b8282818184806000819055505081600390805190602001906200005c929190620000a2565b50806004908051906020019062000075929190620000a2565b50620000866200009960201b60201c565b6001819055505050505050505062000429565b60008054905090565b828054620000b090620003f3565b90600052602060002090601f016020900481019282620000d4576000855562000120565b82601f10620000ef57805160ff191683800117855562000120565b8280016001018555821562000120579182015b828111156200011f57825182559160200191906001019062000102565b5b5090506200012f919062000133565b5090565b5b808211156200014e57600081600090555060010162000134565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001bb8262000170565b810181811067ffffffffffffffff82111715620001dd57620001dc62000181565b5b80604052505050565b6000620001f262000152565b9050620002008282620001b0565b919050565b600067ffffffffffffffff82111562000223576200022262000181565b5b6200022e8262000170565b9050602081019050919050565b60005b838110156200025b5780820151818401526020810190506200023e565b838111156200026b576000848401525b50505050565b600062000288620002828462000205565b620001e6565b905082815260208101848484011115620002a757620002a66200016b565b5b620002b48482856200023b565b509392505050565b600082601f830112620002d457620002d362000166565b5b8151620002e684826020860162000271565b91505092915050565b6000819050919050565b6200030481620002ef565b81146200031057600080fd5b50565b6000815190506200032481620002f9565b92915050565b6000806000606084860312156200034657620003456200015c565b5b600084015167ffffffffffffffff81111562000367576200036662000161565b5b6200037586828701620002bc565b935050602084015167ffffffffffffffff81111562000399576200039862000161565b5b620003a786828701620002bc565b9250506040620003ba8682870162000313565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200040c57607f821691505b60208210811415620004235762000422620003c4565b5b50919050565b61278480620004396000396000f3fe6080604052600436106101ee5760003560e01c806370a082311161010d578063a2309ff8116100a0578063d89135cd1161006f578063d89135cd146106fb578063dc33e68114610726578063e6798baa14610763578063e985e9c51461078e578063f2523633146107cb576101ee565b8063a2309ff81461063a578063b88d4fde14610665578063bf0b175e14610681578063c87b56dd146106be576101ee565b806395d89b41116100dc57806395d89b41146105945780639fac68cb146105bf578063a1448194146105e8578063a22cb46514610611576101ee565b806370a08231146104da57806375794a3c146105175780638529eea6146105425780638832e6e31461056b576101ee565b806342966c681161018557806353b1233d1161015457806353b1233d1461040c5780636352211e146104355780636900a3ae146104725780636c0360eb146104af576101ee565b806342966c6814610340578063453ab141146103695780634f558e791461039257806352d8a4d1146103cf576101ee565b806318160ddd116101c157806318160ddd146102b457806323b872dd146102df57806340c10f19146102fb57806342842e0e14610324576101ee565b806301ffc9a7146101f357806306fdde0314610230578063081812fc1461025b578063095ea7b314610298575b600080fd5b3480156101ff57600080fd5b5061021a60048036038101906102159190611e3f565b610808565b6040516102279190611e87565b60405180910390f35b34801561023c57600080fd5b5061024561089a565b6040516102529190611f3b565b60405180910390f35b34801561026757600080fd5b50610282600480360381019061027d9190611f93565b61092c565b60405161028f9190612001565b60405180910390f35b6102b260048036038101906102ad9190612048565b61098a565b005b3480156102c057600080fd5b506102c961099a565b6040516102d69190612097565b60405180910390f35b6102f960048036038101906102f491906120b2565b6109b1565b005b34801561030757600080fd5b50610322600480360381019061031d9190612048565b610c75565b005b61033e600480360381019061033991906120b2565b610c83565b005b34801561034c57600080fd5b5061036760048036038101906103629190611f93565b610ca3565b005b34801561037557600080fd5b50610390600480360381019061038b9190612145565b610caf565b005b34801561039e57600080fd5b506103b960048036038101906103b49190611f93565b610cbd565b6040516103c69190611e87565b60405180910390f35b3480156103db57600080fd5b506103f660048036038101906103f19190611f93565b610ccf565b6040516104039190612225565b60405180910390f35b34801561041857600080fd5b50610433600480360381019061042e9190611f93565b610ce7565b005b34801561044157600080fd5b5061045c60048036038101906104579190611f93565b610cf3565b6040516104699190612001565b60405180910390f35b34801561047e57600080fd5b5061049960048036038101906104949190611f93565b610d05565b6040516104a69190611f3b565b60405180910390f35b3480156104bb57600080fd5b506104c4610d17565b6040516104d19190611f3b565b60405180910390f35b3480156104e657600080fd5b5061050160048036038101906104fc9190612240565b610d26565b60405161050e9190612097565b60405180910390f35b34801561052357600080fd5b5061052c610dbe565b6040516105399190612097565b60405180910390f35b34801561054e57600080fd5b5061056960048036038101906105649190612048565b610dcd565b005b34801561057757600080fd5b50610592600480360381019061058d91906123a2565b610ddb565b005b3480156105a057600080fd5b506105a9610deb565b6040516105b69190611f3b565b60405180910390f35b3480156105cb57600080fd5b506105e660048036038101906105e1919061243d565b610e7d565b005b3480156105f457600080fd5b5061060f600480360381019061060a9190612048565b610e8b565b005b34801561061d57600080fd5b506106386004803603810190610633919061247d565b610e99565b005b34801561064657600080fd5b5061064f610fa4565b60405161065c9190612097565b60405180910390f35b61067f600480360381019061067a91906124bd565b610fb3565b005b34801561068d57600080fd5b506106a860048036038101906106a39190612240565b611005565b6040516106b5919061254f565b60405180910390f35b3480156106ca57600080fd5b506106e560048036038101906106e09190611f93565b611017565b6040516106f29190611f3b565b60405180910390f35b34801561070757600080fd5b50610710611095565b60405161071d9190612097565b60405180910390f35b34801561073257600080fd5b5061074d60048036038101906107489190612240565b6110a4565b60405161075a9190612097565b60405180910390f35b34801561076f57600080fd5b506107786110b6565b6040516107859190612097565b60405180910390f35b34801561079a57600080fd5b506107b560048036038101906107b0919061256a565b6110bc565b6040516107c29190611e87565b60405180910390f35b3480156107d757600080fd5b506107f260048036038101906107ed9190611f93565b611150565b6040516107ff9190612225565b60405180910390f35b60006301ffc9a760e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061086357506380ac58cd60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806108935750635b5e139f60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b6060600380546108a9906125d9565b80601f01602080910402602001604051908101604052809291908181526020018280546108d5906125d9565b80156109225780601f106108f757610100808354040283529160200191610922565b820191906000526020600020905b81548152906001019060200180831161090557829003601f168201915b5050505050905090565b600061093782611168565b61094c5761094b63cf4700e460e01b6111c7565b5b6007600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b610996828260016111d1565b5050565b60006109a4611300565b6002546001540303905090565b60006109bc82611309565b905073ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff161693508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610a3157610a3063a114810060e01b6111c7565b5b600080610a3d846113cc565b91509150610a538187610a4e6113f3565b6113fb565b610a7e57610a6886610a636113f3565b6110bc565b610a7d57610a7c6359c896be60e01b6111c7565b5b5b610a8b868686600161143f565b8015610a9657600082555b600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081546001900391905081905550600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815460010191905081905550610b6485610b40888887611445565b7c02000000000000000000000000000000000000000000000000000000001761146d565b600560008681526020019081526020016000208190555060007c020000000000000000000000000000000000000000000000000000000084161415610bec576000600185019050600060056000838152602001908152602001600020541415610bea576001548114610be9578360056000838152602001908152602001600020819055505b5b505b600073ffffffffffffffffffffffffffffffffffffffff8673ffffffffffffffffffffffffffffffffffffffff161690508481887fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a46000811415610c5f57610c5e63ea553b3460e01b6111c7565b5b610c6c8787876001611498565b50505050505050565b610c7f828261149e565b5050565b610c9e83838360405180602001604052806000815250610fb3565b505050565b610cac81611605565b50565b610cb98282611613565b5050565b6000610cc882611168565b9050919050565b610cd7611d84565b610ce0826116c9565b9050919050565b610cf0816116e9565b50565b6000610cfe82611309565b9050919050565b6060610d1082611729565b9050919050565b6060610d21611782565b905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d6d57610d6c638f4eb60460e01b6111c7565b5b67ffffffffffffffff600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054169050919050565b6000610dc8611799565b905090565b610dd782826117a3565b5050565b610de68383836117b3565b505050565b606060048054610dfa906125d9565b80601f0160208091040260200160405190810160405280929190818152602001828054610e26906125d9565b8015610e735780601f10610e4857610100808354040283529160200191610e73565b820191906000526020600020905b815481529060010190602001808311610e5657829003601f168201915b5050505050905090565b610e878282611839565b5050565b610e958282611a6c565b5050565b8060086000610ea66113f3565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610f536113f3565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610f989190611e87565b60405180910390a35050565b6000610fae611a8a565b905090565b610fbe8484846109b1565b60008373ffffffffffffffffffffffffffffffffffffffff163b14610fff57610fe984848484611a9d565b610ffe57610ffd63d1a57ed660e01b6111c7565b5b5b50505050565b600061101082611bdc565b9050919050565b606061102282611168565b6110375761103663a14c4b5060e01b6111c7565b5b6000611041611782565b9050600081511415611062576040518060200160405280600081525061108d565b8061106c84611729565b60405160200161107d929190612647565b6040516020818303038152906040525b915050919050565b600061109f611c29565b905090565b60006110af82611c33565b9050919050565b60005481565b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611158611d84565b61116182611c8a565b9050919050565b600081611173611300565b11158015611182575060015482105b80156111c0575060007c0100000000000000000000000000000000000000000000000000000000600560008581526020019081526020016000205416145b9050919050565b8060005260046000fd5b60006111dc83610cf3565b905081801561121e57508073ffffffffffffffffffffffffffffffffffffffff166112056113f3565b73ffffffffffffffffffffffffffffffffffffffff1614155b1561124a576112348161122f6113f3565b6110bc565b6112495761124863cfb3b94260e01b6111c7565b5b5b836007600085815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a450505050565b60008054905090565b600081611314611300565b116113b6576005600083815260200190815260200160002054905060007c0100000000000000000000000000000000000000000000000000000000821614156113b55760008114156113b057600154821061137a5761137963df2d9b4260e01b6111c7565b5b5b600560008360019003935083815260200190815260200160002054905060008114156113a6576113ab565b6113c7565b61137b565b6113c7565b5b6113c663df2d9b4260e01b6111c7565b5b919050565b60008060006007600085815260200190815260200160002090508092508254915050915091565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff8316925073ffffffffffffffffffffffffffffffffffffffff821691508382148383141790509392505050565b50505050565b60008060e883901c905060e861145c868684611cb5565b62ffffff16901b9150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff83169250814260a01b178317905092915050565b50505050565b6000600154905060008214156114bf576114be63b562e8dd60e01b6111c7565b5b6114cc600084838561143f565b6114ec836114dd6000866000611445565b6114e685611cbe565b1761146d565b6005600083815260200190815260200160002081905550600160406001901b178202600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600073ffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff1616905060008114156115a5576115a4632e07630060e01b6111c7565b5b6000838301905060008390505b808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4818160010191508114156115b257816001819055505050506116006000848385611498565b505050565b611610816000611839565b50565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600082905060c081901b77ffffffffffffffffffffffffffffffffffffffffffffffff831617915081600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050505050565b6116d1611d84565b6116e26116dd83611309565b611cce565b9050919050565b6000600560008381526020019081526020016000205414156117265761170e81611309565b60056000838152602001908152602001600020819055505b50565b606060a060405101806040526020810391506000825281835b60011561176d57600184039350600a81066030018453600a81049050806117685761176d565b611742565b50828103602084039350808452505050919050565b606060405180602001604052806000815250905090565b6000600154905090565b6117af828260006111d1565b5050565b6117bd838361149e565b60008373ffffffffffffffffffffffffffffffffffffffff163b146118345760006001549050600083820390505b6117fe6000868380600101945086611a9d565b6118135761181263d1a57ed660e01b6111c7565b5b8181106117eb57816001541461183157611830600060e01b6111c7565b5b50505b505050565b600061184483611309565b90506000819050600080611857866113cc565b91509150841561189f57611873818461186e6113f3565b6113fb565b61189e57611888836118836113f3565b6110bc565b61189d5761189c6359c896be60e01b6111c7565b5b5b5b6118ad83600088600161143f565b80156118b857600082555b600160806001901b03600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055506119608361191d85600088611445565b7c02000000000000000000000000000000000000000000000000000000007c0100000000000000000000000000000000000000000000000000000000171761146d565b600560008881526020019081526020016000208190555060007c0200000000000000000000000000000000000000000000000000000000851614156119e85760006001870190506000600560008381526020019081526020016000205414156119e65760015481146119e5578460056000838152602001908152602001600020819055505b5b505b85600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611a52836000886001611498565b600260008154809291906001019190505550505050505050565b611a868282604051806020016040528060008152506117b3565b5050565b6000611a94611300565b60015403905090565b60008373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611ac36113f3565b8786866040518563ffffffff1660e01b8152600401611ae594939291906126c0565b602060405180830381600087803b158015611aff57600080fd5b505af1925050508015611b3057506040513d601f19601f82011682018060405250810190611b2d9190612721565b60015b611b89573d8060008114611b60576040519150601f19603f3d011682016040523d82523d6000602084013e611b65565b606091505b50600081511415611b8157611b8063d1a57ed660e01b6111c7565b5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b600060c0600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054901c9050919050565b6000600254905090565b600067ffffffffffffffff6040600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054901c169050919050565b611c92611d84565b611cae6005600084815260200190815260200160002054611cce565b9050919050565b60009392505050565b60006001821460e11b9050919050565b611cd6611d84565b81816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060a082901c816020019067ffffffffffffffff16908167ffffffffffffffff168152505060007c01000000000000000000000000000000000000000000000000000000008316141581604001901515908115158152505060e882901c816060019062ffffff16908162ffffff1681525050919050565b6040518060800160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff168152602001600015158152602001600062ffffff1681525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611e1c81611de7565b8114611e2757600080fd5b50565b600081359050611e3981611e13565b92915050565b600060208284031215611e5557611e54611ddd565b5b6000611e6384828501611e2a565b91505092915050565b60008115159050919050565b611e8181611e6c565b82525050565b6000602082019050611e9c6000830184611e78565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611edc578082015181840152602081019050611ec1565b83811115611eeb576000848401525b50505050565b6000601f19601f8301169050919050565b6000611f0d82611ea2565b611f178185611ead565b9350611f27818560208601611ebe565b611f3081611ef1565b840191505092915050565b60006020820190508181036000830152611f558184611f02565b905092915050565b6000819050919050565b611f7081611f5d565b8114611f7b57600080fd5b50565b600081359050611f8d81611f67565b92915050565b600060208284031215611fa957611fa8611ddd565b5b6000611fb784828501611f7e565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611feb82611fc0565b9050919050565b611ffb81611fe0565b82525050565b60006020820190506120166000830184611ff2565b92915050565b61202581611fe0565b811461203057600080fd5b50565b6000813590506120428161201c565b92915050565b6000806040838503121561205f5761205e611ddd565b5b600061206d85828601612033565b925050602061207e85828601611f7e565b9150509250929050565b61209181611f5d565b82525050565b60006020820190506120ac6000830184612088565b92915050565b6000806000606084860312156120cb576120ca611ddd565b5b60006120d986828701612033565b93505060206120ea86828701612033565b92505060406120fb86828701611f7e565b9150509250925092565b600067ffffffffffffffff82169050919050565b61212281612105565b811461212d57600080fd5b50565b60008135905061213f81612119565b92915050565b6000806040838503121561215c5761215b611ddd565b5b600061216a85828601612033565b925050602061217b85828601612130565b9150509250929050565b61218e81611fe0565b82525050565b61219d81612105565b82525050565b6121ac81611e6c565b82525050565b600062ffffff82169050919050565b6121ca816121b2565b82525050565b6080820160008201516121e66000850182612185565b5060208201516121f96020850182612194565b50604082015161220c60408501826121a3565b50606082015161221f60608501826121c1565b50505050565b600060808201905061223a60008301846121d0565b92915050565b60006020828403121561225657612255611ddd565b5b600061226484828501612033565b91505092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6122af82611ef1565b810181811067ffffffffffffffff821117156122ce576122cd612277565b5b80604052505050565b60006122e1611dd3565b90506122ed82826122a6565b919050565b600067ffffffffffffffff82111561230d5761230c612277565b5b61231682611ef1565b9050602081019050919050565b82818337600083830152505050565b6000612345612340846122f2565b6122d7565b90508281526020810184848401111561236157612360612272565b5b61236c848285612323565b509392505050565b600082601f8301126123895761238861226d565b5b8135612399848260208601612332565b91505092915050565b6000806000606084860312156123bb576123ba611ddd565b5b60006123c986828701612033565b93505060206123da86828701611f7e565b925050604084013567ffffffffffffffff8111156123fb576123fa611de2565b5b61240786828701612374565b9150509250925092565b61241a81611e6c565b811461242557600080fd5b50565b60008135905061243781612411565b92915050565b6000806040838503121561245457612453611ddd565b5b600061246285828601611f7e565b925050602061247385828601612428565b9150509250929050565b6000806040838503121561249457612493611ddd565b5b60006124a285828601612033565b92505060206124b385828601612428565b9150509250929050565b600080600080608085870312156124d7576124d6611ddd565b5b60006124e587828801612033565b94505060206124f687828801612033565b935050604061250787828801611f7e565b925050606085013567ffffffffffffffff81111561252857612527611de2565b5b61253487828801612374565b91505092959194509250565b61254981612105565b82525050565b60006020820190506125646000830184612540565b92915050565b6000806040838503121561258157612580611ddd565b5b600061258f85828601612033565b92505060206125a085828601612033565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806125f157607f821691505b60208210811415612605576126046125aa565b5b50919050565b600081905092915050565b600061262182611ea2565b61262b818561260b565b935061263b818560208601611ebe565b80840191505092915050565b60006126538285612616565b915061265f8284612616565b91508190509392505050565b600081519050919050565b600082825260208201905092915050565b60006126928261266b565b61269c8185612676565b93506126ac818560208601611ebe565b6126b581611ef1565b840191505092915050565b60006080820190506126d56000830187611ff2565b6126e26020830186611ff2565b6126ef6040830185612088565b81810360608301526127018184612687565b905095945050505050565b60008151905061271b81611e13565b92915050565b60006020828403121561273757612736611ddd565b5b60006127458482850161270c565b9150509291505056fea264697066735822122069fc22bae1548f6d043069c5eb4987edddc8c5c29ccff6dc359d2446ee5d720464736f6c63430008090033";

type ERC721AStartTokenIdMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721AStartTokenIdMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721AStartTokenIdMock__factory extends ContractFactory {
  constructor(...args: ERC721AStartTokenIdMockConstructorParams) {
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
  ): Promise<ERC721AStartTokenIdMock> {
    return super.deploy(
      name_,
      symbol_,
      startTokenId_,
      overrides || {}
    ) as Promise<ERC721AStartTokenIdMock>;
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
  override attach(address: string): ERC721AStartTokenIdMock {
    return super.attach(address) as ERC721AStartTokenIdMock;
  }
  override connect(signer: Signer): ERC721AStartTokenIdMock__factory {
    return super.connect(signer) as ERC721AStartTokenIdMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721AStartTokenIdMockInterface {
    return new utils.Interface(_abi) as ERC721AStartTokenIdMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721AStartTokenIdMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC721AStartTokenIdMock;
  }
}
