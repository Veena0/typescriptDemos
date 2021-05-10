var CurrDateAndTime = /** @class */ (function () {
    function CurrDateAndTime() {
    }
    CurrDateAndTime.prototype.getDate = function () {
        this.date = new Date();
        return this.date;
    };
    return CurrDateAndTime;
}());
var obj = new CurrDateAndTime();
console.log(obj.getDate());
