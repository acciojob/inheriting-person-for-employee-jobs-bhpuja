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

// Define the Employee class (inherits from Person)
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the Person constructor
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
  }
}

// Function to test Person
document.getElementById("test-person").addEventListener("click", () => {
  const name = document.getElementById("person-name").value.trim();
  const age = document.getElementById("person-age").value;

  if (name && age) {
    const person = new Person(name, parseInt(age, 10));
    document.getElementById("person-output").textContent = person.greet();
  } else {
    document.getElementById("person-output").textContent = "Please enter a valid name and age.";
  }
});

// Function to test Employee
document.getElementById("test-employee").addEventListener("click", () => {
  const name = document.getElementById("employee-name").value.trim();
  const age = document.getElementById("employee-age").value;
  const jobTitle = document.getElementById("employee-jobTitle").value.trim();

  if (name && age && jobTitle) {
    const employee = new Employee(name, parseInt(age, 10), jobTitle);
    document.getElementById("employee-output").textContent = employee.jobGreet();
  } else {
    document.getElementById("employee-output").textContent = "Please enter valid name, age, and job title.";
  }
});

