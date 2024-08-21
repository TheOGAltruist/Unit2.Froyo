// Prompt for flavors first and capture in a variable
const promptFlavors = prompt("Please enter your choice of Froyo flavors. Be sure to enter in a comma separated format", "vanilla, vanilla, vanilla, strawberry, coffee, coffee")

// Function to count the number of each flavor and return an object
/**
 * @param {array[]} flavors array of flavors
 * @returns {number} the largest of the numbers
 */
function createObjectFromArray(flavors) {

    // Build an object and count how many of each flavor was added to the order
    let obj = {};

    for (i = 0; i < flavors.length; i++) {
        if (flavors[i] in obj) {
            obj[flavors[i]]++
        }
        else {
            obj[flavors[i]] = 1
        }
    }

    return obj
}

// Convert the captured string into an array
let rawArrFlavors = promptFlavors.split(",")

// Remove extra whitespace, if any
let arrFlavors = [];

for (i = 0; i < rawArrFlavors.length; i++) {
    arrFlavors.push(rawArrFlavors[i].trim())
}

// Call the function with the array input
const objFlavors = createObjectFromArray(arrFlavors)

// display in console
console.table(objFlavors)