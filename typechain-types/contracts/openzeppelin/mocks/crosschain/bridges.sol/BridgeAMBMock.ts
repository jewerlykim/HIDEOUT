/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../common";

export interface BridgeAMBMockInterface extends utils.Interface {
  functions: {
    "messageSender()": FunctionFragment;
    "relayAs(address,bytes,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "messageSender" | "relayAs"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "messageSender",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "relayAs",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "messageSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "relayAs", data: BytesLike): Result;

  events: {};
}

export interface BridgeAMBMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BridgeAMBMockInterface;

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
    messageSender(overrides?: CallOverrides): Promise<[string]>;

    relayAs(
      target: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  messageSender(overrides?: CallOverrides): Promise<string>;

  relayAs(
    target: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    sender: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    messageSender(overrides?: CallOverrides): Promise<string>;

    relayAs(
      target: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    messageSender(overrides?: CallOverrides): Promise<BigNumber>;

    relayAs(
      target: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    messageSender(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    relayAs(
      target: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}