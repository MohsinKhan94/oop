import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
    talk() {
        console.log(`I am ${this.name} and I am good.`);
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    console.log("Welcome Guest");
    const ans = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "Who would you like to talk to?",
        choices: ["self", "students"]
    });
    if (ans.select === "self") {
        console.log("I am talking to myself.");
        console.log("I am feeling fine.");
    }
    else if (ans.select === "students") {
        if (persons.students.length === 0) {
            console.log("There are no students to talk to.");
            return;
        }
        const studentAns = await inquirer.prompt({
            name: "student",
            type: "list",
            message: "Which student would you like to talk to?",
            choices: persons.students.map(student => student.name)
        });
        const student = persons.students.find(val => val.name === studentAns.student);
        if (student) {
            student.talk();
        }
        else {
            console.log("Student not found.");
        }
    }
};
// Example usage:
const start = async () => {
    // Adding some sample students
    persons.addStudent(new Student("Ali"));
    persons.addStudent(new Student("Abdullah"));
    persons.addStudent(new Student("wasif"));
    await programStart(persons);
};
start();
