var Student = /** @class */ (function () {
    function Student(code, name, points) {
        var _this = this;
        this.totalpoints = function (name, points) { return this.studName + " earned points" + this.points; };
        this.showDetail = function () { return console.log("Student Code: " + _this.studCode + '\nStudent Name: ' + _this.studName); };
        this.studName = name;
        this.studCode = code;
        this.points = points;
    }
    return Student;
}());
var stud = new Student(101, 'Abhishek Mishra', 10);
stud.showDetail();
