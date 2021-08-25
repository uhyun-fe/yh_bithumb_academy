"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person_1 = require("./Person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(title, subject) {
        var _this = _super.call(this, title) || this;
        _this.subject = subject;
        return _this;
    }
    Student.prototype.getSubject = function () {
        return "전공과목 : " + this.subject;
    };
    return Student;
}(Person_1["default"]));
var student = new Student("유현", "mySubject");
console.log(student.getTitle());
console.log(student.getSubject());
