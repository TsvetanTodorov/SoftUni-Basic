// function building(input) {

//     let floors = Number(input.shift());
//     let rooms = Number(input.shift());


//     for (let i = floors; i >= 1; i--) {
//         let floor = "";
//         for (let j = 0; j < rooms; j++) {
//             if (i === floors) {
//                 floor += `L${i}${j} `
//                 continue;
//             }

//             if (i % 2 === 0) {
//                 floor += `O${i}${j} `

//             } else {
//                 floor += `A${i}${j} `
//             }

//         }
//         console.log(floor.trim());
//     }
// }
// building(["6", "4"])






function building(input) {

    let floors = Number(input.shift());
    let rooms = Number(input.shift());


    for (let i = floors; i >= 1; i--) {
        let floor = [];
        for (let j = 0; j < rooms; j++) {
            if (i === floors) {
                floor.push(`L${i}${j}`);
                continue;
            }

            if (i % 2 === 0) {
                floor.push(`O${i}${j}`);

            } else {
                floor.push(`A${i}${j}`);
            }
        }
        console.log(floor.join(" "));
    }
}
building(["6", "4"])






let asd = "Tsvetan , Svetlozarov , Todorov"
console.log(asd.split(""));
console.log("Az" + "" + "asdad");