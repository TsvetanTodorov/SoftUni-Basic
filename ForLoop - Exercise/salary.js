function salary(input) {


    let openTabs = Number(input.shift());
    let money = Number(input.shift());

    // let isHavingMoney = true; //  <---- boolean flag 


    for (let i = 0; i <= openTabs; i++) {
        let currentOpenTab = input[i];


        if (currentOpenTab === "Facebook") {
            money -= 150;

        } else if (currentOpenTab === "Instagram") {
            money -= 100;

        } else if (currentOpenTab === "Reddit") {
            money -= 50;

        }

        if (money <= 0) {
            // isHavingMoney = false;
            console.log("You have lost your salary.");
            break;
        }
    }
    if (money > 0) { // ---> if(isHavingMoney === true)
        console.log(money);
    }

}
salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"
])