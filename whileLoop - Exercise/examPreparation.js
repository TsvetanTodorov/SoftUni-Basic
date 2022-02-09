function examPreparation(input) {

    let index = 1
    let badGrades = (input[0]);
    let taskName = input[index];
    let grade = Number(input[index]);
    let sumOfGrades = 0;
    let problemCounter = 0;
    let badGradesCounter = 0;
    let isValid = true;


    while (taskName !== "Enough") {
        index++;
        grade = Number(input[index]);
        problemCounter++;
        if (grade <= 4) {
            badGradesCounter++;
            if (badGradesCounter === badGrades) {
                isValid = false;
                break;

            }
        }
        sumOfGrades += grade;
        index++;
        taskName = input[index];

    }
    let averageGrade = sumOfGrades / problemCounter;
    if (!isValid) {
        console.log(`You need a break, ${badGradesCounter} poor grades.`);
    } else {
        taskName = input[index - 2];
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${problemCounter}`);
        console.log(`Last problem: ${taskName}`)
    }


}
examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"
])