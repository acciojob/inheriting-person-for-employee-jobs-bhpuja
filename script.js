// complete this js code
// 
// Define the Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
  }
}

// Define the Employee class that inherits from Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the parent class constructor
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
  }
}

// Add event listeners for creating Person and Employee
document.getElementById("create-person").addEventListener("click", () => {
  const name = document.getElementById("person-name").value;
  const age = document.getElementById("person-age").value;

  if (name && age) {
    const person = new Person(name, parseInt(age));
    document.getElementById("person-output").textContent = person.greet();
  } else {
    alert("Please enter both name and age for the person.");
  }
});

document.getElementById("create-employee").addEventListener("click", () => {
  const name = document.getElementById("employee-name").value;
  const age = document.getElementById("employee-age").value;
  const jobTitle = document.getElementById("employee-jobTitle").value;

  if (name && age && jobTitle) {
    const employee = new Employee(name, parseInt(age), jobTitle);
    document.getElementById("employee-output").textContent = employee.jobGreet();
  } else {
    alert("Please enter name, age, and job title for the employee.");
  }
});
