const { array, rules, localization } = require('./data') // Import data from data.js

let filteredRules = []; // Use variable to store arrays of nesting

const parseArray = (array, rules, localization) => { // General function to parse an array

    parseRules(rules)
    return getNewArray(array, filteredRules, localization)
}

const getNewArray = (array, filteredRules, localization) => { // Get new parse array from new rules we raised before
    let result = []; // Variable of result array
    let index = 0; // Index of element, will increase after
    for (let rule of filteredRules) { // Use every item of rules
        let value = 1; // Variable use to concatenate value with number e.g value1, value2, value3
        result[index] = {};
        result[index].name = localization[rule.join('.')] ? localization[rule.join('.')] : rule[rule.length - 1]; // Find localization for name
        for (let arrayItem of array) { // Use every item of basic array
            for (let item of rule) { // Array of nesting
                if (typeof arrayItem[item] == 'object') {
                    if (arrayItem[item] instanceof Date) {
                        result[index][`value${value}`] = arrayItem[item].toLocaleDateString();
                    }   else {
                        arrayItem = arrayItem[item];
                    }
                }   else if (typeof arrayItem[item] == 'boolean') {
                    result[index][`value${value}`] = arrayItem[item] ? "Так" : "Нi";
                }   else {
                    result[index][`value${value}`] = arrayItem[item];
                }
            }
            value++;
        }
        index++;
    }
    return result;
}

const parseRules = (rules, result = [ ]) => { // Function parse rules array by using recursion
    const keys = Object.keys(rules); // Get all keys
    for(let key of keys) {
        if (typeof rules[key] == 'object') { // If rules[key] is object - call function again and change params
            parseRules(rules[key], [...result, key])
        }   else if (rules[key]) { // Else test rules[key], if this one == true, push result to filteredRules
            filteredRules.push([...result, key])
        }
    }
}

console.log(parseArray(array, rules, localization)); // Get full result from function