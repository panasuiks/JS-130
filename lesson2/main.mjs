import { foo } from "./foo.mjs";
import { bar, getCounter, } from "./bar.mjs";



foo();
foo();

console.log(getCounter());   // 1

bar();
bar();
bar();

console.log(getCounter());   // 2

foo();
console.log(getCounter());   // 2
