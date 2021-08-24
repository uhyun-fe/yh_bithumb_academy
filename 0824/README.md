# 2021.08.24

## 개요

-  확장연산 학습 (...)
-  typescript

## 전개연산

-  연산 -> 단항, 이항, 삼항, 다항식, 전개, 논리, 비트, 관계
   -  이항연산 : 9 = 4(좌항) + 5(우항)

```
const add = (a, b, c, d, e) => {
    return a + b + c + d + e;
};

let arr = [5, 7, 9, 1, 3];
console.log("result: ", add(...arr));
console.log("-----------------------------------------");

let x = [3, 4, 5];
let y = [1, 2, ...x, 9, 100];
let z = [1, 2, x, 9, 100];
console.log("result: ", y); //  [1, 2, 3, 4, 5, 9, 100]
console.log("result: ", z); //  [1, 2, [3, 4, 5], 9, 100]
console.log("-----------------------------------------");

let a = [1, 2, 3];
let b = [7, 8, 9];
a.push(b);
console.log("result: ", a); //  [1, 2, 3, [7, 8, 9]]
console.log("-----------------------------------------");

let k = [1, 2, 3];
let m = { name: "유현", age: 20 };
const ob3 = [...k];
const ob4 = { ...m };
ob4.name = "빈센조";
ob4.age = 34;
console.log("result: ", ob3, " ", ob4); //  [1, 2, 3]  {name: "빈센조", age: 34}
ob3.push(ob4);
console.log("result: ", ob3); //  [1, 2, 3, {name: "빈센조", age: 34}]
console.log("-----------------------------------------");
```

## Typescript

1. 설치

   ```
    리액트 : npx create-react-app my-app --template typescript
    일반 : npm install -g --save typescript
   ```

2. 공식 문서

   -  [typescriptlang.org](https://www.typescriptlang.org/)

   -  [create-react-app.dev/docs/adding-typescript](https://create-react-app.dev/docs/adding-typescript/)
