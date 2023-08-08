const removeFromArray = function() { 
    let inputConverted = Array.from(arguments); 
    let newArr = inputConverted[0]; 
    for (let i = 1; i < inputConverted.length; i++) {
        newArr = newArr.filter((item) => item !== inputConverted[i]); 
    }
    return newArr; 
};

// Do not edit below this line
module.exports = removeFromArray;
