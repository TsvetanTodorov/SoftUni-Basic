function graduation(input) {

    let studentName = input.shift();
    let index = 0;
    let grades = 1;
    let excluded = 0;
    let sumEvaluation = 0;
    let gradesSum = 0;
    let isValid = true;

    while (grades <= 12) {
        let evalution = Number(input[index]);
        if (evalution < 4) {
            excluded++;
            if (excluded > 1) {
                isValid = false;
                break;

            }
            continue;
        }
        index++;
        sumEvaluation += evalution;
        gradesSum = grades;
        grades++


    }
    let averageEvaluation = sumEvaluation / gradesSum;
    index++
    if (!isValid) {
        console.log(`${studentName} has been excluded at ${index} grade`);
    } else {
        console.log(`${studentName} graduated. Average grade: ${averageEvaluation.toFixed(2)}`);
    }

}
graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"
])