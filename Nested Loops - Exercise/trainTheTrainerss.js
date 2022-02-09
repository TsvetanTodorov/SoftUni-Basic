function trainTheTrainers(input) {

    let judges = Number(input.shift());
    let projectName = input.shift();
    let sumAverageGrades = 0;
    let grades = 0;

    while (projectName !== "Finish") {
        let sumGrades = 0;
        let gradesCounterCurrentProject = 0;
        while (gradesCounterCurrentProject < judges) {
            let currentGrade = Number(input.shift());
            sumGrades += currentGrade;
            gradesCounterCurrentProject++;
            if (gradesCounterCurrentProject >= judges) {
                let currentProjectAverageGrade = sumGrades / judges;
                sumAverageGrades += currentProjectAverageGrade
                console.log(`${projectName} - ${currentProjectAverageGrade.toFixed(2)}.`);
                break;
            }
        } // End of Inner Loop
        grades++;
        projectName = input.shift();

    } // End of Outer Loop
    let totalAverageGrades = sumAverageGrades / grades
    console.log(`Student's final assessment is ${totalAverageGrades.toFixed(2)}.`);
}
trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"
])