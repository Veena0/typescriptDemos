class Student {  
    studCode: number;  
    studName: string;
    points:number;  
        constructor(code: number, name: string,points:number) {  
            this.studName = name;  
            this.studCode = code;
            this.points=points;  
    }  
    totalpoints=function(name,points){return this.studName+" earned points"+this.points}
    showDetail = () => console.log("Student Code: " + this.studCode + '\nStudent Name: ' + this.studName)  
}  
let stud = new Student(101, 'Abhishek Mishra',10);  
stud.showDetail();  
