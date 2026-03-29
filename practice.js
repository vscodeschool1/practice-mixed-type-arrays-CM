// Task 1: Create the Profile

const hobbies = ["Reading", "Gaming"];

const profile = ["John", 25, true, "New York", hobbies];

console.log("Profile Created:");
console.log(profile);


// Task 2: Access and Log Profile Details

console.log("User Name:", profile[0]);

console.log("Second Hobby:", profile[4][1]);


// Task 3: Modify the Profile

profile[1] = 30;

profile[4].push("Swimming");

console.log("Age Updated:", profile[1]);
console.log("Hobbies Updated:", profile[4]);


// Task 4: Display the Updated Profile

console.log("Updated Profile:");
console.log(profile);