class Animal{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    sound(){
        console.log("sounds depends on tpe/name of the animal");
    };
}
class Dog extends Animal{

    height:string;
    constructor(name:string,height:string){
        super(name);
        this.height=height;
    }
    sound(){
        console.log("barking........")
    } 
    display(){
        console.log(this.name+" has "+this.height+" height");
    }
}
class BabyDog extends Dog{

    gender:string;
         constructor(name:string,height:string,gender:string){
        super(name,height);
        this.gender=gender;
    }

    sound(){
        console.log("baby dog barks with less sound..");
    }

    display(){
          console.log(this.gender+" gender "+this.name+"  has "+this.height+" height");
    }

    weep(){
        console.log("weeping...");
    }

}
let obj1=new Animal("dog");
obj1.sound();

let obj2=new Dog("tiger","3.5inchs");
obj2.display();

let obj3=new BabyDog("puppy","1.2inchs","female");
obj3.display();
obj3.sound();
obj3.weep();
