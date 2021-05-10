
//using any type
let something:any;
something="Hello";
something= 2.90;
something= true;

let person:any[];
person=["ananya",5, true];

console.log(person);
person.push("Hyd");
console.log(person);
//using tuple

const employee:{
  name:string;
  age:number;
  role:[number,string]  ;
}={
    name:'Arun',
    age:35,
    role:[1,'admin']
}

//if we not specify type then it behaves like a union number|string type

//employee.role.push('developer');
//employee.role[1]=2;

console.log(employee.name);

//union type
function displayType1(code: (string | number))
{
    if(typeof(code) === "number")
        console.log('Code is number.')
    else if(typeof(code) === "string")
        console.log('Code is string.')
}

displayType1(123); // Output: Code is number.
displayType1("ABC"); // Output: Code is string.
//displayType(true); 
