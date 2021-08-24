// Typescript

let msg: string = "The King";
let price: number = 2500;

console.log("이름: ", msg);
console.log("가격: ", price);
console.log("-------------------------");

let title: any = "";
title = function () {};
console.log("title: ", title);
title = 2021;
console.log("title: ", title);
title = "react";
console.log("title: ", title);
title = true;
console.log("title: ", title);
console.log("-------------------------");

let myName: string | number = "둘리";
console.log("myName: ", myName);
myName = 1200;
console.log("myName: ", myName);
