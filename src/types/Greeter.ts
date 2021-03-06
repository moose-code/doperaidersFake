/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface GreeterInterface extends utils.Interface {
  functions: {
    "_getRandomNumberZeroOrOne()": FunctionFragment;
    "playDopeRaiders()": FunctionFragment;
    "player1()": FunctionFragment;
    "player2()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_getRandomNumberZeroOrOne"
      | "playDopeRaiders"
      | "player1"
      | "player2"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_getRandomNumberZeroOrOne",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "playDopeRaiders",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "player1", values?: undefined): string;
  encodeFunctionData(functionFragment: "player2", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "_getRandomNumberZeroOrOne",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "playDopeRaiders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "player1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "player2", data: BytesLike): Result;

  events: {};
}

export interface Greeter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GreeterInterface;

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
    _getRandomNumberZeroOrOne(overrides?: CallOverrides): Promise<[BigNumber]>;

    playDopeRaiders(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    player1(overrides?: CallOverrides): Promise<[string]>;

    player2(overrides?: CallOverrides): Promise<[string]>;
  };

  _getRandomNumberZeroOrOne(overrides?: CallOverrides): Promise<BigNumber>;

  playDopeRaiders(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  player1(overrides?: CallOverrides): Promise<string>;

  player2(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    _getRandomNumberZeroOrOne(overrides?: CallOverrides): Promise<BigNumber>;

    playDopeRaiders(overrides?: CallOverrides): Promise<void>;

    player1(overrides?: CallOverrides): Promise<string>;

    player2(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    _getRandomNumberZeroOrOne(overrides?: CallOverrides): Promise<BigNumber>;

    playDopeRaiders(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    player1(overrides?: CallOverrides): Promise<BigNumber>;

    player2(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _getRandomNumberZeroOrOne(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    playDopeRaiders(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    player1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    player2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
