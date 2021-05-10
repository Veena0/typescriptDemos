interface MyCurrlogTime{

    date:Date;
    getDate();

}

class CurrDateAndTime implements MyCurrlogTime{
    date:Date;
    
    getDate(){
       this.date= new Date();
       return this.date;
    }
}

let obj=new CurrDateAndTime();
console.log(obj.getDate());