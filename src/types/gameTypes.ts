export type TileValueType = {
  value:
    | "blank"
    | "one"
    | "two"
    | "three"
    | "four"
    | "five"
    | "six"
    | "seven"
    | "eight"
    | "flag"
    | "falseFlag"
    | "mine"
    | "mystery"
    | "happy"
    | "surprised"
    | "dead"
    | "victorious";
  stagger: number;
  clicked: boolean;
};
