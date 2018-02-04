

var employees = [];

function Employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status || "full-time";
}

Employee.prototype.printEmployeeForm = function () {
    employees.push("Hello, my name is " + this.name + ", my job title is " + this.jobTitle + ", my work status is " + this.status + ", and my salary is " + this.salary + " dollars per year.")
}


var employee1 = new Employee("john", "plumber", 40000, "part time");
var employee2 = new Employee("janice", "CEO", 1500000);
var employee3 = new Employee("james", "floor supervisor", 70000);

employee1.printEmployeeForm();
employee2.printEmployeeForm();
employee3.printEmployeeForm();

console.log(employees);





// var employee1 = new Employee("John", "Manager", 60000);
// var employee2 = new Employee("Ben", "Call Jockey", 30000);
// var employee3 = new Employee("Sarah", "Ceo", 1000000);
// var employee4 = new Employee("Angela", "Janitor", "part-time", 20000);
