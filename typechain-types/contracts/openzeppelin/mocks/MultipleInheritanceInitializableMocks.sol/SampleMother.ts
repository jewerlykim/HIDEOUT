/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface SampleMotherInterface extends utils.Interface {
  functions: {
    "initialize()": FunctionFragment;
    "initialize(uint256)": FunctionFragment;
    "isHuman()": FunctionFragment;
    "mother()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "initialize()"
      | "initialize(uint256)"
      | "isHuman"
      | "mother"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "initialize()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "isHuman", values?: undefined): string;
  encodeFunctionData(functionFragment: "mother", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "initialize()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialize(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isHuman", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mother", data: BytesLike): Result;

  events: {
    "Initialized(uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface SampleMother extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SampleMotherInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    "initialize()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "initialize(uint256)"(
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isHuman(overrides?: CallOverrides): Promise<[boolean]>;

    mother(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  "initialize()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "initialize(uint256)"(
    value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isHuman(overrides?: CallOverrides): Promise<boolean>;

  mother(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    "initialize()"(overrides?: CallOverrides): Promise<void>;

    "initialize(uint256)"(
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    isHuman(overrides?: CallOverrides): Promise<boolean>;

    mother(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;
  };

  estimateGas: {
    "initialize()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "initialize(uint256)"(
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isHuman(overrides?: CallOverrides): Promise<BigNumber>;

    mother(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    "initialize()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "initialize(uint256)"(
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isHuman(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mother(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
