// complete this js code
describe('Person and Employee Tests', () => {
    it('should print the correct greet message for Person', () => {
        cy.window().then((win) => {
            const person = new win.Person('Alice', 25);
            cy.stub(win.console, 'log').as('consoleLog');
            person.greet();
            cy.get('@consoleLog').should('have.been.calledWith', 'Hello, my name is Alice, I am 25 years old.');
        });
    });

    it('should print the correct jobGreet message for Employee', () => {
        cy.window().then((win) => {
            const employee = new win.Employee('Bob', 30, 'Manager');
            cy.stub(win.console, 'log').as('consoleLog');
            employee.jobGreet();
            cy.get('@consoleLog').should('have.been.calledWith', 'Hello, my name is Bob, I am 30 years old, and my job title is Manager.');
        });
    });
});
