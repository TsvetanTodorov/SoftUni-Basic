function trainTheTrainers(input) {

    let judges = Number(input.shift());
    let projectName = input.shift();
    let currentProjectAverageGrade = 0;
    let totalAverageGrade = 0;



    while (projectName !== "Finish") {
        let gradesCounter = 0;
        let sumGrades = 0;
        while (gradesCounter <= judges) {
            let currentGrade = Number(input.shift());
            sumGrades += currentGrade;

        }


    }



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