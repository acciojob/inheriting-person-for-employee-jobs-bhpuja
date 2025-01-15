// Define the Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet
  greet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
  }
}

// Define the Employee class, which extends Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the parent constructor
    this.jobTitle = jobTitle;
  }

  // Method to greet with job title
  jobGreet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
  }
}

// Event Listeners for Person
let person;

document.getElementById("create-person").addEventListener("click", () => {
  const name = document.getElementById("person-name").value.trim();
  const age = parseInt(document.getElementById("person-age").value.trim());
  
  if (name && age) {
    person = new Person(name, age);
    document.getElementById("person-output").textContent = `Person "${name}" created successfully!`;
  } else {
    document.getElementById("person-output").textContent = "Please enter valid name and age.";
  }
});

document.getElementById("greet-person").addEventListener("click", () => {
  if (person) {
    document.getElementById("person-output").textContent = person.greet();
  } else {
    document.getElementById("person-output").textContent = "Create a person first!";
  }
});

// Event Listeners for Employee
let employee;

document.getElementById("create-employee").addEventListener("click", () => {
  const name = document.getElementById("employee-name").value.trim();
  const age = parseInt(document.getElementById("employee-age").value.trim());
  const jobTitle = document.getElementById("employee-job").value.trim();
  
  if (name && age && jobTitle) {
    employee = new Employee(name, age, jobTitle);
    document.getElementById("employee-output").textContent = `Employee "${name}" created successfully!`;
  } else {
    document.getElementById("employee-output").textContent = "Please enter valid name, age, and job title.";
  }
});

document.getElementById("greet-employee").addEventListener("click", () => {
  if (employee) {
    document.getElementById("employee-output").textContent = employee.jobGreet();
  } else {
    document.getElementById("employee-output").textContent = "Create an employee first!";
  }
});


