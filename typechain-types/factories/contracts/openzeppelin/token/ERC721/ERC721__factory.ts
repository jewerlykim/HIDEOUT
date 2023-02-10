/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC721,
  ERC721Interface,
} from "../../../../../contracts/openzeppelin/token/ERC721/ERC721";

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
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
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
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620026da380380620026da8339818101604052810190620000379190620002be565b81600090805190602001906200004f92919062000071565b5080600190805190602001906200006892919062000071565b505050620003a8565b8280546200007f9062000372565b90600052602060002090601f016020900481019282620000a35760008555620000ef565b82601f10620000be57805160ff1916838001178555620000ef565b82800160010185558215620000ef579182015b82811115620000ee578251825591602001919060010190620000d1565b5b509050620000fe919062000102565b5090565b5b808211156200011d57600081600090555060010162000103565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200018a826200013f565b810181811067ffffffffffffffff82111715620001ac57620001ab62000150565b5b80604052505050565b6000620001c162000121565b9050620001cf82826200017f565b919050565b600067ffffffffffffffff821115620001f257620001f162000150565b5b620001fd826200013f565b9050602081019050919050565b60005b838110156200022a5780820151818401526020810190506200020d565b838111156200023a576000848401525b50505050565b6000620002576200025184620001d4565b620001b5565b9050828152602081018484840111156200027657620002756200013a565b5b620002838482856200020a565b509392505050565b600082601f830112620002a357620002a262000135565b5b8151620002b584826020860162000240565b91505092915050565b60008060408385031215620002d857620002d76200012b565b5b600083015167ffffffffffffffff811115620002f957620002f862000130565b5b62000307858286016200028b565b925050602083015167ffffffffffffffff8111156200032b576200032a62000130565b5b62000339858286016200028b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200038b57607f821691505b60208210811415620003a257620003a162000343565b5b50919050565b61232280620003b86000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb46514610224578063b88d4fde14610240578063c87b56dd1461025c578063e985e9c51461028c576100cf565b80636352211e146101a657806370a08231146101d657806395d89b4114610206576100cf565b806301ffc9a7146100d457806306fdde0314610104578063081812fc14610122578063095ea7b31461015257806323b872dd1461016e57806342842e0e1461018a575b600080fd5b6100ee60048036038101906100e99190611633565b6102bc565b6040516100fb919061167b565b60405180910390f35b61010c61039e565b604051610119919061172f565b60405180910390f35b61013c60048036038101906101379190611787565b610430565b60405161014991906117f5565b60405180910390f35b61016c6004803603810190610167919061183c565b610476565b005b6101886004803603810190610183919061187c565b61058e565b005b6101a4600480360381019061019f919061187c565b6105ee565b005b6101c060048036038101906101bb9190611787565b61060e565b6040516101cd91906117f5565b60405180910390f35b6101f060048036038101906101eb91906118cf565b610695565b6040516101fd919061190b565b60405180910390f35b61020e61074d565b60405161021b919061172f565b60405180910390f35b61023e60048036038101906102399190611952565b6107df565b005b61025a60048036038101906102559190611ac7565b6107f5565b005b61027660048036038101906102719190611787565b610857565b604051610283919061172f565b60405180910390f35b6102a660048036038101906102a19190611b4a565b6108bf565b6040516102b3919061167b565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061038757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610397575061039682610953565b5b9050919050565b6060600080546103ad90611bb9565b80601f01602080910402602001604051908101604052809291908181526020018280546103d990611bb9565b80156104265780601f106103fb57610100808354040283529160200191610426565b820191906000526020600020905b81548152906001019060200180831161040957829003601f168201915b5050505050905090565b600061043b826109bd565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104818261060e565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156104f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e990611c5d565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610511610a08565b73ffffffffffffffffffffffffffffffffffffffff161480610540575061053f8161053a610a08565b6108bf565b5b61057f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057690611cef565b60405180910390fd5b6105898383610a10565b505050565b61059f610599610a08565b82610ac9565b6105de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d590611d81565b60405180910390fd5b6105e9838383610b5e565b505050565b610609838383604051806020016040528060008152506107f5565b505050565b60008061061a83610e58565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561068c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068390611ded565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610706576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fd90611e7f565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461075c90611bb9565b80601f016020809104026020016040519081016040528092919081815260200182805461078890611bb9565b80156107d55780601f106107aa576101008083540402835291602001916107d5565b820191906000526020600020905b8154815290600101906020018083116107b857829003601f168201915b5050505050905090565b6107f16107ea610a08565b8383610e95565b5050565b610806610800610a08565b83610ac9565b610845576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083c90611d81565b60405180910390fd5b61085184848484611002565b50505050565b6060610862826109bd565b600061086c61105e565b9050600081511161088c57604051806020016040528060008152506108b7565b8061089684611075565b6040516020016108a7929190611edb565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6109c68161114d565b610a05576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109fc90611ded565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610a838361060e565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610ad58361060e565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610b175750610b1681856108bf565b5b80610b5557508373ffffffffffffffffffffffffffffffffffffffff16610b3d84610430565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610b7e8261060e565b73ffffffffffffffffffffffffffffffffffffffff1614610bd4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bcb90611f71565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3b90612003565b60405180910390fd5b610c51838383600161118e565b8273ffffffffffffffffffffffffffffffffffffffff16610c718261060e565b73ffffffffffffffffffffffffffffffffffffffff1614610cc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cbe90611f71565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610e5383838360016112b4565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610efb9061206f565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610ff5919061167b565b60405180910390a3505050565b61100d848484610b5e565b611019848484846112ba565b611058576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161104f90612101565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000600161108484611451565b01905060008167ffffffffffffffff8111156110a3576110a261199c565b5b6040519080825280601f01601f1916602001820160405280156110d55781602001600182028036833780820191505090505b509050600082602001820190505b600115611142578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161112c5761112b612121565b5b049450600085141561113d57611142565b6110e3565b819350505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff1661116f83610e58565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b60018111156112ae57600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16146112225780600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461121a919061217f565b925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146112ad5780600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112a591906121b3565b925050819055505b5b50505050565b50505050565b60006112db8473ffffffffffffffffffffffffffffffffffffffff166115a4565b15611444578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611304610a08565b8786866040518563ffffffff1660e01b8152600401611326949392919061225e565b602060405180830381600087803b15801561134057600080fd5b505af192505050801561137157506040513d601f19601f8201168201806040525081019061136e91906122bf565b60015b6113f4573d80600081146113a1576040519150601f19603f3d011682016040523d82523d6000602084013e6113a6565b606091505b506000815114156113ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113e390612101565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611449565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106114af577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816114a5576114a4612121565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106114ec576d04ee2d6d415b85acef810000000083816114e2576114e1612121565b5b0492506020810190505b662386f26fc10000831061151b57662386f26fc10000838161151157611510612121565b5b0492506010810190505b6305f5e1008310611544576305f5e100838161153a57611539612121565b5b0492506008810190505b612710831061156957612710838161155f5761155e612121565b5b0492506004810190505b6064831061158c576064838161158257611581612121565b5b0492506002810190505b600a831061159b576001810190505b80915050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611610816115db565b811461161b57600080fd5b50565b60008135905061162d81611607565b92915050565b600060208284031215611649576116486115d1565b5b60006116578482850161161e565b91505092915050565b60008115159050919050565b61167581611660565b82525050565b6000602082019050611690600083018461166c565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156116d05780820151818401526020810190506116b5565b838111156116df576000848401525b50505050565b6000601f19601f8301169050919050565b600061170182611696565b61170b81856116a1565b935061171b8185602086016116b2565b611724816116e5565b840191505092915050565b6000602082019050818103600083015261174981846116f6565b905092915050565b6000819050919050565b61176481611751565b811461176f57600080fd5b50565b6000813590506117818161175b565b92915050565b60006020828403121561179d5761179c6115d1565b5b60006117ab84828501611772565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006117df826117b4565b9050919050565b6117ef816117d4565b82525050565b600060208201905061180a60008301846117e6565b92915050565b611819816117d4565b811461182457600080fd5b50565b60008135905061183681611810565b92915050565b60008060408385031215611853576118526115d1565b5b600061186185828601611827565b925050602061187285828601611772565b9150509250929050565b600080600060608486031215611895576118946115d1565b5b60006118a386828701611827565b93505060206118b486828701611827565b92505060406118c586828701611772565b9150509250925092565b6000602082840312156118e5576118e46115d1565b5b60006118f384828501611827565b91505092915050565b61190581611751565b82525050565b600060208201905061192060008301846118fc565b92915050565b61192f81611660565b811461193a57600080fd5b50565b60008135905061194c81611926565b92915050565b60008060408385031215611969576119686115d1565b5b600061197785828601611827565b92505060206119888582860161193d565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6119d4826116e5565b810181811067ffffffffffffffff821117156119f3576119f261199c565b5b80604052505050565b6000611a066115c7565b9050611a1282826119cb565b919050565b600067ffffffffffffffff821115611a3257611a3161199c565b5b611a3b826116e5565b9050602081019050919050565b82818337600083830152505050565b6000611a6a611a6584611a17565b6119fc565b905082815260208101848484011115611a8657611a85611997565b5b611a91848285611a48565b509392505050565b600082601f830112611aae57611aad611992565b5b8135611abe848260208601611a57565b91505092915050565b60008060008060808587031215611ae157611ae06115d1565b5b6000611aef87828801611827565b9450506020611b0087828801611827565b9350506040611b1187828801611772565b925050606085013567ffffffffffffffff811115611b3257611b316115d6565b5b611b3e87828801611a99565b91505092959194509250565b60008060408385031215611b6157611b606115d1565b5b6000611b6f85828601611827565b9250506020611b8085828601611827565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611bd157607f821691505b60208210811415611be557611be4611b8a565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611c476021836116a1565b9150611c5282611beb565b604082019050919050565b60006020820190508181036000830152611c7681611c3a565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000611cd9603d836116a1565b9150611ce482611c7d565b604082019050919050565b60006020820190508181036000830152611d0881611ccc565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000611d6b602d836116a1565b9150611d7682611d0f565b604082019050919050565b60006020820190508181036000830152611d9a81611d5e565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000611dd76018836116a1565b9150611de282611da1565b602082019050919050565b60006020820190508181036000830152611e0681611dca565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000611e696029836116a1565b9150611e7482611e0d565b604082019050919050565b60006020820190508181036000830152611e9881611e5c565b9050919050565b600081905092915050565b6000611eb582611696565b611ebf8185611e9f565b9350611ecf8185602086016116b2565b80840191505092915050565b6000611ee78285611eaa565b9150611ef38284611eaa565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000611f5b6025836116a1565b9150611f6682611eff565b604082019050919050565b60006020820190508181036000830152611f8a81611f4e565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611fed6024836116a1565b9150611ff882611f91565b604082019050919050565b6000602082019050818103600083015261201c81611fe0565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006120596019836116a1565b915061206482612023565b602082019050919050565b600060208201905081810360008301526120888161204c565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006120eb6032836116a1565b91506120f68261208f565b604082019050919050565b6000602082019050818103600083015261211a816120de565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061218a82611751565b915061219583611751565b9250828210156121a8576121a7612150565b5b828203905092915050565b60006121be82611751565b91506121c983611751565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156121fe576121fd612150565b5b828201905092915050565b600081519050919050565b600082825260208201905092915050565b600061223082612209565b61223a8185612214565b935061224a8185602086016116b2565b612253816116e5565b840191505092915050565b600060808201905061227360008301876117e6565b61228060208301866117e6565b61228d60408301856118fc565b818103606083015261229f8184612225565b905095945050505050565b6000815190506122b981611607565b92915050565b6000602082840312156122d5576122d46115d1565b5b60006122e3848285016122aa565b9150509291505056fea2646970667358221220730abae3797fb7842ffb8a5d0501079f22457c6e6b8bfeeb8ea07d9772221c9c64736f6c63430008090033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
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
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  override connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
