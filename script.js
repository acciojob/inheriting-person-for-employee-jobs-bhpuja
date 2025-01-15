// complete this js code
// Define the Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Define the Employee class that inherits from Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the parent class constructor
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
    );
  }
}

// Example Test Cases
// Testing Person class
const person1 = new Person("Alice", 25);
person1.greet(); // Expected: Hello, my name is Alice, I am 25 years old.

// Testing Employee class
const employee1 = new Employee("Bob", 30, "Manager");
employee1.jobGreet(); // Expected: Hello, my name is Bob, I am 30 years old, and my job title is Manager.
