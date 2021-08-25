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
console.log(student.getTitle());
console.log(student.getSubject());
