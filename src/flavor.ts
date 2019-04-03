export type Flavor = "strawberry" | "mango" | "milk" | "matcha" | "taro";

export const flavors: ReadonlyArray<Flavor> = [
  "milk",
  "matcha",
  "taro",
  "mango",
  "strawberry"
];

export const isFlavor = (flavor: unknown): flavor is Flavor => {
  return typeof flavor === "string" && flavors.indexOf(flavor as Flavor) >= 0;
};
