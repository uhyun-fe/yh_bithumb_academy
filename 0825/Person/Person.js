"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(title) {
        this.title = title;
    }
    Person.prototype.getTitle = function () {
        var msg = "It's summer!";
        return this.title + " : " + msg;
    };
    return Person;
}()); // class END
// const person = new Person("유현");
// console.log(person.getTitle());
exports["default"] = Person;
