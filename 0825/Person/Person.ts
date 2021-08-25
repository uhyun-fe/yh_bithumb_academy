class Person {
   // 접근지정자 private(자신만), protexted(상속받은 자식까지 가능), public(모두)
   protected title: string;

   constructor(title: string) {
      this.title = title;
   }

   public getTitle(): string {
      let msg: string = "It's summer!";
      return this.title + " : " + msg;
   }
} // class END

// const person = new Person("유현");
// console.log(person.getTitle());

export { Person };
