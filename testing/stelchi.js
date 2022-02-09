// function getMinimumStepsRequired(steps) {

//     let minStepsRequred = 0;

//     for (let i = 0; i <= steps.length - 1; i++) {
//         if (steps[i] === "./") {
//             continue;
//         } else if (steps[i] !== "../") {
//             minStepsRequred++;
//         } else {
//             minStepsRequred--;
//         }
//     }

//     return minStepsRequred;

// }
// const result = getMinimumStepsRequired(["x/", "../", "y/", "z/", "./"]);
// console.log(result);











// input = array with commands
// commands
// 1. "../" = -1;
// 2. "./" = 0
// 3. x / = +1


const minimumSteps = (commands) => {

    let minimumStepsRequired = 0;

    const commandsss = {
        back: "../",
        forward: /[a-zA-z]{1}\//
    }

    commands.forEach(checkCommand)


    function checkCommand(command) {


        if (command.match(commandsss.forward)) {
            minimumStepsRequired++
        }

        if (commandsss.back == command) {
            minimumStepsRequired--;
        }


    }
    return minimumStepsRequired;
}

console.log(minimumSteps(['x/', '../', './', '../', '../', '../', 'y/', 'z/']))


// output = integer / result






// const namesArray = ["Tsvetan", "Pesho", "Stelchi"];

// names.forEach((currentName, index) => {
//     console.log(index, currentName);
// })

// console.log("------");
// for (let i = 0; i <= names.length - 1; i++) {
//     console.log(i, names[i]);
// }
// const namesString = namesArray.join(" + ")
// console.log(namesArray);
// console.log(namesString);


// let numbersArray = ["23", 12312, "1", true, false]
// let numbersAsString = numbersArray.join(" ! ");
// console.log(numbersArray);
// console.log(numbersAsString);
let namesAsString = "Tsvetan - Stelchi - Pesho"
let namesAsArray = namesAsString.split(" - ")
console.log(namesAsString);
console.log(namesAsString);