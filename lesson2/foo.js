import { bar } from "./bar.mjs";

let xyz = 1; // not exported

export function foo() {
  console.log(xyz);
  xyz += 1;
  bar();
}