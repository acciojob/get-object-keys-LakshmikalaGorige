//your JS code here. If required.
// Create an object called student with a property called name
const student = {
  name: "John"
};

// Add a property to the Object prototype called getKeys()
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Use the getKeys method on the student object
const keys = student.getKeys();

// Print the result
console.log(keys); // Output: ['name']
