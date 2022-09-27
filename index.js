class Club {
    constructor(name, cF1, cF2, aM, lM, rM, dM, lB, cB1, cB2, rB, gK) {
        this.name = name
        this.cF1 = cF1
        this.cF2 = cF2
        this.aM = aM
        this.lM = lM
        this.rM = rM
        this.dM = dM
        this.lB = lB
        this.cB1 = cB1
        this.cB2 = cB2
        this.rB = rB
        this.gK = gK
    }
}

// let myClub = new club("Theo", "Sola", "TomorrowLand")
// console.log(myClub.clubName)

let teamName = document.getElementById("teamName")
let centerForward1 = document.getElementById("CF1")
let centerForward2 = document.getElementById("CF2")
let attackingMidfielder = document.getElementById("AM")
let leftMidfielder = document.getElementById("LM")
let rightMidfielder = document.getElementById("RM")
let defendingMidfielder = document.getElementById("DM")
let leftBack = document.getElementById("LB")
let centerBack1 = document.getElementById("CB1")
let centerBack2 = document.getElementById("CB2")
let rightBack = document.getElementById("RB")
let goalKeeper = document.getElementById("GK")
const inputContainer = document.getElementById("inputContainer")
const formationContainer = document.getElementById("formationContainer")
const formationBtn = document.getElementById("getFormation")

formationBtn.addEventListener("click", () => {
    newClub = new Club(teamName.value, centerForward1.value, centerForward2.value, attackingMidfielder.value, leftMidfielder.value, rightMidfielder.value, defendingMidfielder.value, leftBack.value, centerBack1.value, centerBack2.value, rightBack.value, goalKeeper.value)
        // console.log(newClub.name, newClub.cF1, newClub.cF2, newClub.aM, newClub.lM, newClub.rM, newClub.dM, newClub.lB, newClub.cB1, newClub.cB2, newClub.rB, newClub.gK)
})