// assignment_LA5.js

// Hash table to store customers
let customerHashTable = {};

// Simple hash function to generate a hash key based on customer name
function hashFunction(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    return hash % 10; // Using modulo to limit the hash table size
}

// Function to add a customer to the hash table
function addCustomerToHash(name) {
    const hashKey = hashFunction(name);
    customerHashTable[hashKey] = name;
    console.log(`Customer ${name} added to the hash table. Current hash table:`, customerHashTable);
}

// Function to service a customer
function serviceCustomerFromHash(hashKey) {
    // Check if the hash key exists
    if (customerHashTable[hashKey] === undefined) {
        console.log("Invalid number. Please enter a valid customer number.");
        return;
    }
    
    // Get the customer name from the hash table
    const customerName = customerHashTable[hashKey];
    
    // Remove the customer from the hash table
    delete customerHashTable[hashKey];
    
    // Display the serviced customer and the updated hash table
    console.log(`Serviced customer: ${customerName}`);
    console.log(`Updated hash table:`, customerHashTable);
}

// Adding customers to the hash table
addCustomerToHash("Elaine");
addCustomerToHash("Althea");
addCustomerToHash("Angelo");
addCustomerToHash("Lito");
addCustomerToHash("Engelbert");

// Simulating servicing customers
serviceCustomerFromHash(hashFunction("Elaine"));
serviceCustomerFromHash(hashFunction("Angelo")); 