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

export const isTopping = (topping: unknown): topping is Topping => {
  return (
    typeof topping === "string" && toppings.indexOf(topping as Topping) >= 0
  );
};
