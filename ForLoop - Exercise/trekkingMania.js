function trekkingMania(input) {

    let groupsQuantity = Number(input.shift());
    let totalPeople = 0;
    let peopleForMusala = 0;
    let peopleForMonblanc = 0;
    let peopleForKlilimandjaro = 0;
    let peopleForK2 = 0;
    let peopleForEverest = 0;



    for (let i = 0; i < groupsQuantity; i++) {
        let currentGroup = Number(input[i]);
        totalPeople += currentGroup;

        if (currentGroup <= 5) {
            peopleForMusala += currentGroup;

        } else if (currentGroup >= 6 && currentGroup <= 12) {
            peopleForMonblanc += currentGroup;

        } else if (currentGroup >= 13 && currentGroup <= 25) {
            peopleForKlilimandjaro += currentGroup;

        } else if (currentGroup >= 26 && currentGroup <= 40) {
            peopleForK2 += currentGroup;
        } else {
            peopleForEverest += currentGroup
        }

    }
    let percentagePeopleForMusala = peopleForMusala / totalPeople * 100;
    let percetangePeopleForMonblanc = peopleForMonblanc / totalPeople * 100;
    let percentagePeopleForKilimandjaro = peopleForKlilimandjaro / totalPeople * 100;
    let percentagePeopleForK2 = peopleForK2 / totalPeople * 100;
    let percentagePeopleForEverest = peopleForEverest / totalPeople * 100;

    console.log(`${percentagePeopleForMusala.toFixed(2)}%`);
    console.log(`${percetangePeopleForMonblanc.toFixed(2)}%`);
    console.log(`${percentagePeopleForKilimandjaro.toFixed(2)}%`);
    console.log(`${percentagePeopleForK2.toFixed(2)}%`);
    console.log(`${percentagePeopleForEverest.toFixed(2)}%`);
}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"
])