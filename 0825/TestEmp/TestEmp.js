// Typescript interface
var user = [
    { name: "Choi", age: 26, gender: true },
    { name: "Kim", age: "24", gender: false },
    { name: "Park", age: 22, gender: "true" },
];
user.forEach(function (u) {
    console.log("\uC774\uB984: " + u.name + " / \uB098\uC774: " + u.age + " / \uC131\uBCC4: " + (u.gender ? "여성" : "남성"));
});
