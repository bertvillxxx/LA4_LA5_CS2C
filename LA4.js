// assignment_LA4.js

// Initialize an empty queue
let customerQueue = [];

// Function to add a customer to the queue
function addCustomer(name) {
    customerQueue.push(name);
    console.log(`Customer ${name} added to the queue. Current queue: ${customerQueue}`);
}

// Function to service a customer
function serviceCustomer(number) {
    // Check if the number is valid
    if (number < 1 || number > customerQueue.length) {
        console.log("Invalid number. Please enter a valid customer number.");
        return;
    }
    
    // Get the customer name from the queue
    const customerName = customerQueue[number - 1];
    
    // Remove the customer from the queue
    customerQueue.splice(number - 1, 1);
    
    // Display the serviced customer and the updated queue
    console.log(`Serviced customer: ${customerName}`);
    console.log(`Updated queue: ${customerQueue}`);
}

// Adding customers to the queue
addCustomer("Elaine");
addCustomer("Althea");
addCustomer("Angelo");
addCustomer("Lito");
addCustomer("Engelbert");

// Simulating servicing customers
serviceCustomer(1); 
serviceCustomer(3); 