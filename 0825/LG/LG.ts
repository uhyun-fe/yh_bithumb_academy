// LG.ts

// 타입스크립트 함수
// function 함수명(): 리턴타입 {}

// 예제 1
function getAdd(): number {
   return 2 + 5;
}

let a: number = getAdd();
console.log("getAdd return", a);

// 예제 2
function getSum(num1: number, num2: number): number {
   return num1 + num2;
}

let b: number = getSum(20, 50);
console.log("getSum return", b);

// 예제 3
function getTitle(): string {
   const day = ["일", "월", "화", "수", "목", "금", "토"];
   let today = day.filter((d, i) => new Date().getDay() === i)[0];
   let msg: string = `오늘은 ${today}요일입니다.`;
   return msg;
}

let c: string = getTitle();
console.log("getTitle return: ", c);

// 예제 4
function getNoReturn(): void {
   console.log(2 + 5);
}
getNoReturn();
