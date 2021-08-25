# 2021.08.25

## 개요

-  typescript 데이터타입 적용하는 법 학습
-  interface 개념 정리
-  class의 멤버변수, 생성자, 함수, 클래스타입 개체화, 상속 학습
-  타입스크립트에서의 배열 접근 및 사용법

## typescript function

-  타입스크립트 작성 방식

   -  let 변수이름: 타입 = 데이터;
   -  function 함수(): 리턴타입 {}

-  예제 1

   ```
   function getSum(num1: number, num2: number): number {
       return num1 + num2;
   }

   let b: number = getSum(20, 50);
   console.log("getSum return", b);
   ```

-  예제 2

   -  부모 클래스 (Person)

      ```
      export class Person {
          // 접근지정자 private(자신만), protexted(상속받은 자식까지 가능), public(모두)
          protected title: string;

          constructor(title: string) {
              this.title = title;
          }

          public getTitle(): string {
              let msg: string = "It's summer!";
              return this.title + " : " + msg;
          }
      }
      ```

   -  자식 클래스 (Student)

      ```
      import { Person } from "./Person";

      class Student extends Person {
          protected subject: string;

          constructor(title: string, subject: string) {
              super(title);
              this.subject = subject;
          }

          public getSubject(): string {
              return "전공과목 : " + this.subject;
          }
      }

      const student = new Student("유현", "mySubject");
      console.log(student.getTitle()); // 유현 : It's summer!
      console.log(student.getSubject()); // 전공과목 : mySubject

      ```

-  interface
   -  복합적인 선언, 데이터나열, 틀, 모양
   -  `interface` 키워드 사용
