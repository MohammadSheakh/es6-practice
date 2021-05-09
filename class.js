class Student{
    // constructor(){
    //     this.id = 1;
    //     this.name = "mahi";
    // }
    constructor(sID, sName){
        this.id = sID;
        this.name = sName;
        this.school = "BK School";
    }
}
const student1 = new Student();
const student2 = new Student();
const student3 = new Student(101, "Mohamamd");
console.log(student1.school, student2.school, student3);