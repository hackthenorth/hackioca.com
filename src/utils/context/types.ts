import { Methods } from "./methods";

export enum ACTIONS {
  RESET,
  UPDATE_HELLO_WORLD // string enums not needed, can use reverse mapping
}

export interface State extends Methods {
  // basically our spec for what we want to store in global state
  helloWorld: string;
}

export interface StateUpdate {
  type: ACTIONS;
  data?: object | string; // not sure what the most encompassing type here is
}
