export type Flavor = "strawberry" | "mango" | "milk" | "matcha" | "taro";
export const flavors: ReadonlyArray<Flavor> = [
  "milk",
  "matcha",
  "taro",
  "mango",
  "strawberry"
];

export type Topping =
  | "tapioca"
  | "grass_jelly"
  | "aloe_vera"
  | "red_bean"
  | "pudding";
export const toppings: ReadonlyArray<Topping> = [
  "tapioca",
  "grass_jelly",
  "aloe_vera",
  "red_bean",
  "pudding"
];
