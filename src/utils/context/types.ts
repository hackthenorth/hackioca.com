import { Methods } from "./methods";

export enum ACTIONS {
  RESET = "RESET",
  UPDATE_HELLO_WORLD = "UPDATE_HELLO_WORLD",
}

export interface State extends Methods {
  // basically our spec for what we want to store in global state
  helloWorld: string;
};

export interface StateUpdate {
  type: string;
  data?: object | string; // not sure what the most encompassing type here is
};
