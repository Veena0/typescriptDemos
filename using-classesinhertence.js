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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sound = function () {
        console.log("sounds depends on tpe/name of the animal");
    };
    ;
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, height) {
        var _this = _super.call(this, name) || this;
        _this.height = height;
        return _this;
    }
    Dog.prototype.sound = function () {
        console.log("barking........");
    };
    Dog.prototype.display = function () {
        console.log(this.name + " has " + this.height + " height");
    };
    return Dog;
}(Animal));
var BabyDog = /** @class */ (function (_super) {
    __extends(BabyDog, _super);
    function BabyDog(name, height, gender) {
        var _this = _super.call(this, name, height) || this;
        _this.gender = gender;
        return _this;
    }
    BabyDog.prototype.sound = function () {
        console.log("baby dog barks with less sound..");
    };
    BabyDog.prototype.display = function () {
        console.log(this.gender + " gender " + this.name + "  has " + this.height + " height");
    };
    BabyDog.prototype.weep = function () {
        console.log("weeping...");
    };
    return BabyDog;
}(Dog));
var obj1 = new Animal("dog");
obj1.sound();
var obj2 = new Dog("tiger", "3.5inchs");
obj2.display();
var obj3 = new BabyDog("puppy", "1.2inchs", "female");
obj3.display();
obj3.sound();
obj3.weep();
