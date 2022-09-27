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
const aboutDiv = document.getElementById("about")
const inputContainer = document.getElementById("container")
const formationContainer = document.getElementById("formationContainer")
const formationBtn = document.getElementById("getFormation")
const okayBtn = document.getElementById("okay")
const startBtn = document.getElementById("beginBtn")

formationBtn.addEventListener("click", () => {
    newClub = new Club(teamName.value, centerForward1.value, centerForward2.value, attackingMidfielder.value, leftMidfielder.value, rightMidfielder.value, defendingMidfielder.value, leftBack.value, centerBack1.value, centerBack2.value, rightBack.value, goalKeeper.value)
        // console.log(newClub.name, newClub.cF1, newClub.cF2, newClub.aM, newClub.lM, newClub.rM, newClub.dM, newClub.lB, newClub.cB1, newClub.cB2, newClub.rB, newClub.gK)
    inputContainer.classList.add("hide")
    formationContainer.classList.remove("hide")

    //     formationContainer.innerHTML = `
    //     <center>
    //     <img src="images/pitch.png" alt="" srcset="" class="pitch">
    // </center>
    // <div class="playerDiv">
    //     <center>

    //         <div id="cf1"><img class="player"  src="images/CF1.png" alt="" srcset="" height="80" width="80"><span>Name</span></div>
    //         <div id="cf2"><img class="player" src="images/CF2.png" alt="" srcset="" height="80" width="80"><span>Name</span></div>
    //         <div id="aM"><img class="player"  src="images/AM.png" alt="" srcset="" height="80" width="80"><span>Name</span></div>
    //         <div id="lM"><img class="player"  src="images/LM.png" alt="" srcset="" height="80" width="80"><span>Name</span></div>
    //         <div id="rM"><img class="player"  src="images/RM.png" alt="" srcset="" height="80" width="80"><span>Name</span></div>
    //         <div id="dM"><img class="player"  src="images/DM.png" alt="" srcset="" height="80" width="80"><span>Name</span></div>
    //         <div id="lB"><img class="player"  src="images/LB.png" alt="" srcset="" height="80" width="80"><span>Name</span></div>
    //         <div id="cB1"><img class="player"  src="images/CB1.png" alt="" srcset="" height="80" width="80"><span>Name</span></div>
    //         <div id="cB2"><img class="player"  src="images/CB2.png" alt="" srcset="" height="80" width="80"><span>Name</span></div>
    //         <div id="rB" ><img class="player" src="images/RB.png" alt="" srcset="" height="80" width="80"><span>Name</span></div>
    //         <div id="gK" ><img class="player" src="images/GK.png" alt="" srcset="" height="80" width="80"><span>Name</span></div>
    //     </center>
    // </div>
    //     `
    // })

    okayBtn.addEventListener("click", () => {
            inputContainer.classList.remove("hide")
            formationContainer.classList.add("hide")
        })
        // startBtn.addEventListener("click", () => {
        //     inputContainer.classList.remove("hide")
        //     aboutDiv.classList.add("hide")
        // })
})