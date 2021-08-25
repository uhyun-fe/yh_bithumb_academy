// Typescript interface

interface Iemp {
   name: string;
   age: number;
   gender: boolean;
}

let user: Iemp[] = [
   { name: "Choi", age: 26, gender: true },
   { name: "Kim", age: 24, gender: false },
   { name: "Park", age: 22, gender: true },
];

user.forEach((u) => {
   console.log(`이름: ${u.name} / 나이: ${u.age} / 성별: ${u.gender ? "여성" : "남성"}`);
});
