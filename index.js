// Write your solution in this file!
// Declare customerName to be 'bob' in the global scope
var customerName = 'bob';

// Function to uppercase the customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; // Note: bestCustomer is not declared with var, let, or const, making it global
}

// Function to overwrite the best customer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'somebody';

// Function to unsuccessfully try to reassign the least favorite customer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'another person'; // This will throw an error since leastFavoriteCustomer is a constant
}

// Export the functions and variables if using modules
module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer
};
