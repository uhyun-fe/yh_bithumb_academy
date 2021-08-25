// LG.ts
// 타입스크립트 함수
// function 함수명(): 리턴타입 {}
// 예제 1
function getAdd() {
    return 2 + 5;
}
var a = getAdd();
console.log("getAdd return", a);
// 예제 2
function getSum(num1, num2) {
    return num1 + num2;
}
var b = getSum(20, 50);
console.log("getSum return", b);
// 예제 3
function getTitle() {
    var day = ["일", "월", "화", "수", "목", "금", "토"];
    var today = day.filter(function (d, i) { return new Date().getDay() === i; })[0];
    var msg = "\uC624\uB298\uC740 " + today + "\uC694\uC77C\uC785\uB2C8\uB2E4.";
    return msg;
}
var c = getTitle();
console.log("Message: ", c);
// 예제 4
function getNoReturn() {
    console.log(2 + 5);
}
getNoReturn();
