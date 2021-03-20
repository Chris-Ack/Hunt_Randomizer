'use strict'
// Please don't delete the 'use strict' line above

// V0.004 - Bonus Features: Pure boredom has let me to try and start working on the bonus features

// ToDo's for this version are:
// - Buttons for KillCounter and Extractions (Deaths?)
// - Randomly include special Loadouts -> DONE
// - bonus features attached to buttons -> DONE



let bloodlineRank = 100
let ammoTypes = 1
let quarterMaster = 0
let allowBadLoadouts = 0
let chadMode = 0
let bonusMode = 0
let numberKillVar = 0
let numberExtractVar = 0
let numberDeathVar = 0
let randomMain = mainGun(weapons)
let randomMainAmmo = mainGunAmmo(randomMain)
let randomMainAmmoTwo = secondAmmoType(randomMain)
let randomSide = sideArm(weapons)
let randomSideAmmo = sideArmAmmo(randomSide)
let randomSideAmmoTwo = secondAmmoType(randomSide)
let randomMelee = meleeWeapon(melee)

randomize()

// Buttons //

document.getElementById('randoButton').addEventListener('click', randomize)

document.getElementById('minusKill').addEventListener('click', () => {numberKillVar -= 1; document.getElementById('numberKill').innerText = `${numberKillVar}`})
document.getElementById('plusKill').addEventListener('click', () => {numberKillVar += 1; document.getElementById('numberKill').innerText = `${numberKillVar}`})
document.getElementById('numberKill').addEventListener('click', () => {
    if (numberKillVar >= 5) {
        numberKillVar -= 5; 
        document.getElementById('numberKill').innerText = `${numberKillVar}`;
        randomize()}})

document.getElementById('minusExtract').addEventListener('click', () => {numberExtractVar -= 1; document.getElementById('numberExtract').innerText = `${numberExtractVar}`})
document.getElementById('plusExtract').addEventListener('click', () => {numberExtractVar += 1; document.getElementById('numberExtract').innerText = `${numberExtractVar}`})
document.getElementById('numberExtract').addEventListener('click', () => {
if (numberExtractVar >= 3) {
    numberExtractVar -= 3; 
    document.getElementById('numberExtract').innerText = `${numberExtractVar}`;
    bonusGame(9);
    document.body.getElementsByTagName("h3")[7].innerText = `Main Weapon: ${randomMain.Name}`
    document.body.getElementsByTagName("h3")[8].innerText = `${mainAmmoDisplay()}`
    document.body.getElementsByTagName("h3")[9].innerText = `Sidearm: ${randomSide.Name}`
    document.body.getElementsByTagName("h3")[10].innerText = `${sideArmAmmoDisplay()}`
    document.body.getElementsByTagName("h3")[11].innerText = `Melee Weapon: ${randomMelee.Name}`
    }})

document.getElementById('minusDeath').addEventListener('click', () => {numberDeathVar -= 1; document.getElementById('numberDeath').innerText = `${numberDeathVar}`})
document.getElementById('plusDeath').addEventListener('click', () => {numberDeathVar += 1; document.getElementById('numberDeath').innerText = `${numberDeathVar}`})
document.getElementById('numberDeath').addEventListener('click', () => {
if (numberDeathVar >= 3) {
    numberDeathVar -= 3;
    document.getElementById('numberDeath').innerText = `${numberExtractVar}`; 
    document.body.getElementsByTagName("h3")[7].innerText = `Choose your own!`
    document.body.getElementsByTagName("h3")[8].innerText = `Choose your own!`
    document.body.getElementsByTagName("h3")[9].innerText = `Choose your own!`
    document.body.getElementsByTagName("h3")[10].innerText = `Choose your own!`
    document.body.getElementsByTagName("h3")[11].innerText = `Choose your own!`
    }})

// Checkbox Event Listeners //

let ammoCheckBox = document.querySelector('input[value="Ammo"]');
ammoCheckBox.addEventListener('change', () => {
    if (ammoCheckBox.checked) {ammoTypes = 1}
    else {ammoTypes = 0}
})

let quarterCheckBox = document.querySelector('input[value="Quartermaster"]');
quarterCheckBox.addEventListener('change', () => {
    if (quarterCheckBox.checked) {quarterMaster = 1}
    else {quarterMaster = 0}
})

let inefficientCheckBox = document.querySelector('input[value="Inefficient"]');
inefficientCheckBox.addEventListener('change', () => {
    if (inefficientCheckBox.checked) {allowBadLoadouts = 1}
    else {allowBadLoadouts = 0}
})

let chadBox = document.querySelector('input[value="chad"]');
chadBox.addEventListener('change', () => {
    if (chadBox.checked) {chadMode = 1}
    else {chadMode = 0}
})

let bonusBox = document.querySelector('input[value="bonus"]');
bonusBox.addEventListener('change', () => {
    if (bonusBox.checked) {
        bonusMode = 1; 
        document.body.getElementsByTagName("h2")[0].innerText = `Bonus Mode Activated!`
        document.body.getElementsByTagName("div")[2].hidden = false}
    else {bonusMode = 0; 
        document.body.getElementsByTagName("h2")[0].style.color = "black"; 
        document.body.getElementsByTagName("h2")[0].innerText = `Version 0.5`
        document.body.getElementsByTagName("div")[2].hidden = true}
})


// Randomizer Function //

function randomize() {
    randomMain = mainGun(weapons)
    randomMainAmmo = mainGunAmmo(randomMain)
    randomMainAmmoTwo = secondAmmoType(randomMain)
    randomSide = sideArm(weapons)
    randomSideAmmo = sideArmAmmo(randomSide)
    randomSideAmmoTwo = secondAmmoType(randomSide)
    randomMelee = meleeWeapon(melee)
    if (chadMode === 1) {if (chadHelper() === true) {randomize()}}
    if (bonusMode === 1) {bonusGame(100)}
    document.body.getElementsByTagName("h3")[0].innerText = `------------------------------------------------------------`
    document.body.getElementsByTagName("h3")[1].innerText = `Current Bloodline Rank: ${bloodlineRank}`
    document.body.getElementsByTagName("h3")[6].innerText = `------------------------------------------------------------`
    document.body.getElementsByTagName("h3")[7].innerText = `Main Weapon: ${randomMain.Name}`
    document.body.getElementsByTagName("h3")[8].innerText = `${mainAmmoDisplay()}`
    //document.getElementById("mainGun").src = randomMain.Picture
    document.body.getElementsByTagName("h3")[9].innerText = `Sidearm: ${randomSide.Name}`
    document.body.getElementsByTagName("h3")[10].innerText = `${sideArmAmmoDisplay()}`
    //document.getElementById("sideArm").src = randomSide.Picture
    document.body.getElementsByTagName("h3")[11].innerText = `Melee Weapon: ${randomMelee.Name}`
    //document.getElementById("meleeWeapon").src = randomMelee.Picture
    document.body.getElementsByTagName("h3")[13].innerText = `------------------------------------------------------------`
    document.body.getElementsByTagName("h3")[14].innerText = `${loadoutCostCalculator()}`
    document.body.getElementsByTagName("h3")[15].innerText = `------------------------------------------------------------`  
}


// Function for Main Gun //
function mainGun(array) {
    let mainGunHelperArray = []
    if (allowBadLoadouts === 1) {
        return array[_.random(0, array.length-1)]
    }
    else {
        for (let item of array) {
            if (item.Size === 3 || item.Size === 2) {mainGunHelperArray.push(item)}
        }
        return mainGunHelperArray[_.random(0, mainGunHelperArray.length-1)]
    }
}

// Function for Main Gun Ammo Type //
function mainGunAmmo(array) {
    let mainGunAmmoHelperArray = []
    mainGunAmmoHelperArray = array.Ammo
    if (ammoTypes === 1) {
        return mainGunAmmoHelperArray[_.random(0, mainGunAmmoHelperArray.length-1)]
    }
    else if (ammoTypes === 0) {
        return mainGunAmmoHelperArray[0]
    }
}

// Function to display the Main Gun Ammo Types
function mainAmmoDisplay() {
    if (ammoTypes === 0) {return ``}
    else if (ammoTypes === 1 && randomMain.Type === "Melee Main") {return `---`}
    else if (ammoTypes === 1 && randomMainAmmoTwo !== undefined) {return `- ${randomMainAmmo.Name} Ammo and ${randomMainAmmoTwo.Name} Ammo`}
    else if (ammoTypes === 1) {return `- ${randomMainAmmo.Name} Ammo`}
}

// Function for sideArm // Should be massively refactored with .filter and =>
function sideArm(array) {
    let sideHelperArray = []
    if (allowBadLoadouts === 1) {
        if (quarterMaster === 0) {
        
            if (randomMain.Size === 3) {
                for (let item of array) {
                    if (item.Size === 1) {sideHelperArray.push(item)}
                } 
            }
            else if (randomMain.Size === 2) {
                for (let item of array) {
                    if (item.Size === 2 || item.Size === 1 ) {sideHelperArray.push(item)}
                }
            }
            else if ((randomMain.Size === 1)) {
                for (let item of array) {
                    if (item.Size === 3 || item.Size === 2 || item.Size === 1 ) {sideHelperArray.push(item)}
                }
            }
    }   else if (quarterMaster === 1) {
        
            if (randomMain.Size === 3) {
                for (let item of array) {
                    if (item.Size === 2 || item.Size === 1) {sideHelperArray.push(item)}
                } 
            }
            else if (randomMain.Size === 2) {
                for (let item of array) {
                    if (item.Size === 3 || item.Size === 2 || item.Size === 1 ) {sideHelperArray.push(item)}
                }
            }
            else if ((randomMain.Size === 1)) {
                for (let item of array) {
                    if (item.Size === 3 || item.Size === 2 || item.Size === 1 ) {sideHelperArray.push(item)}
                }
            }
        }
    }
    else if (allowBadLoadouts === 0) /* "if" included for clarity only */{
            if (quarterMaster === 0) {
            
                if (randomMain.Size === 3) {
                    for (let item of array) {
                        if (item.Size === 1) {sideHelperArray.push(item)}
                    } 
                }
                else if (randomMain.Size === 2) {
                    for (let item of array) {
                        if (item.Size === 2) {sideHelperArray.push(item)}
                    }
                }
                else if ((randomMain.Size === 1)) {
                    for (let item of array) {
                        if (item.Size === 3) {sideHelperArray.push(item)}
                    }
                }
        }   else if (quarterMaster === 1) {
                if (randomMain.Size === 3) {
                    for (let item of array) {
                        if (item.Size === 2) {sideHelperArray.push(item)}
                    } 
                }
                else if (randomMain.Size === 2) {
                    for (let item of array) {
                        if (item.Size === 3) {sideHelperArray.push(item)}
                    }
                }
                else if ((randomMain.Size === 1)) {console.log("Error! Quartermaster and Pistol Selected!") // This really shouldnt happen anymore. Left in as an Error Check.
                    }
                }
            }

    return sideHelperArray[_.random(0, sideHelperArray.length-1)]
}

// Function for Sidearm Ammo type
function sideArmAmmo(array) {
    let sideArmAmmoHelperArray = []
    sideArmAmmoHelperArray = array.Ammo
    if (ammoTypes === 1) {
        return sideArmAmmoHelperArray[_.random(0, sideArmAmmoHelperArray.length-1)]
    }
    else if (ammoTypes === 0) {
        return sideArmAmmoHelperArray[0]
    }
}

// Function to Display the Sidearm Ammo types
function sideArmAmmoDisplay() {
    if (ammoTypes === 0) {return ``}
    else if (ammoTypes === 1 && randomSide.Type === "Melee Main") {return `---`}
    else if (ammoTypes === 1 && randomSideAmmoTwo !== undefined) {return `- ${randomSideAmmo.Name} Ammo and ${randomSideAmmoTwo.Name} Ammo`}
    else if (ammoTypes === 1) {return `- ${randomSideAmmo.Name} Ammo`}
}

// Function for Melee Weapon // Should be massively refactored with .filter and =>
function meleeWeapon(array) {
    let meleeHelperArray = []
    if (randomMain.Type === "Melee Main" || randomSide.Type === "Melee Main") {
        meleeHelperArray.push(array[0]) // Dusters
        meleeHelperArray.push(array[3]) // Knuckle Knife
    }
    else if (randomMain.Attachment === "Melee Slash" || randomSide.Attachment === "Melee Slash") {
        meleeHelperArray.push(array[0]) // Dusters
        meleeHelperArray.push(array[3]) // Knuckle Knife
    }
    else if (randomMain.Attachment === "Melee Blunt" || randomSide.Type === "Melee Blunt") {
        meleeHelperArray.push(array[1]) // Knife
        meleeHelperArray.push(array[2]) // Heavy Knife
        }
    else {for (let item of array) {meleeHelperArray.push(item)
    }
}
    return meleeHelperArray[_.random(0, meleeHelperArray.length-1)]
} 

// Function to help isolate and take out powerful weapons
function chadHelper() {
    if (randomMain.Name === "Dolch 96" || randomMain.Name === "Dolch 96 Precision" || randomMain.Name === "Dolch 96 Pair" ||
        randomMain.Name === "Nitro Express Rifle" || randomMain.Name === "Mosin-Nagant M1891 Avtomat" || 
        randomSide.Name === "Dolch 96" || randomSide.Name === "Dolch 96 Precision" || randomSide.Name === "Dolch 96 Pair" ||
        randomMain.Side === "Nitro Express Rifle" || randomSide.Name === "Mosin-Nagant M1891 Avtomat") {return true}
    else {return false}
        
}

// Function to help add second Ammotype to Single-shot Rifles/Shotguns/Crossbows
function secondAmmoType(inputObject) {
    let secondAmmoHelperArray = []
    secondAmmoHelperArray = inputObject.Ammo
    if (ammoTypes === 1) {
        if (inputObject.Type === "Single-shot Rifle" || inputObject.Type === "Single-shot Shotgun" || inputObject.Type === "Crossbow") {
            return secondAmmoHelperArray[_.random(0, inputObject.Ammo.length-1)]
            }
        else if (inputObject.Type === "Pistol-Shotgun Hybrid") {
            secondAmmoHelperArray = inputObject.ShotgunAmmo;
            return secondAmmoHelperArray[_.random(0, inputObject.Ammo.length-1)]
        }
        else return undefined
    }
}

// Function to calculate the loadout costs
function loadoutCostCalculator() {
    if (ammoTypes === 0) {return `Total cost of loadout: ${randomMain.Cost + randomSide.Cost + randomMelee.Cost}`}
    else if (ammoTypes === 1 && randomMainAmmoTwo !== undefined && randomSideAmmoTwo !== undefined) {return `Total cost of loadout: ${randomMain.Cost + randomMainAmmo.Cost + randomMainAmmoTwo.Cost + randomSide.Cost + randomSideAmmo.Cost + randomSideAmmoTwo.Cost + randomMelee.Cost}`}
    else if (ammoTypes === 1 && randomMainAmmoTwo === undefined && randomSideAmmoTwo !== undefined) {return `Total cost of loadout: ${randomMain.Cost + randomMainAmmo.Cost + randomSide.Cost + randomSideAmmo.Cost + randomSideAmmoTwo.Cost + randomMelee.Cost}`}
    else if (ammoTypes === 1 && randomMainAmmoTwo !== undefined && randomSideAmmoTwo === undefined) {return `Total cost of loadout: ${randomMain.Cost + randomMainAmmo.Cost + randomMainAmmoTwo.Cost + randomSide.Cost + randomSideAmmo.Cost + randomMelee.Cost}`}
    else if (ammoTypes === 1 && randomMainAmmoTwo === undefined && randomSideAmmoTwo === undefined) {return `Total cost of loadout: ${randomMain.Cost + randomMainAmmo.Cost + randomSide.Cost + randomSideAmmo.Cost + randomMelee.Cost}`}
}

// Function for Bonus Loadouts

function bonusGame(number) {
    let randomNumber = _.random(0, number)
    let randomHelperArray = []
    if (randomNumber === 1) {
        randomMain = weapons[23]
        randomMainAmmo = mainGunAmmo(randomMain)
        randomMainAmmoTwo = secondAmmoType(randomMain)
        randomHelperArray.push(weapons[72], weapons[31], weapons [22]);
        randomSideAmmo = sideArmAmmo(randomSide)
        randomSideAmmoTwo = secondAmmoType(randomSide)
        randomMelee = melee[0]
        document.body.getElementsByTagName("h2")[0].style.color = "red";
        document.body.getElementsByTagName("h2")[0].innerText = `MEDIVAL TIMES!`
    }
    else if (randomNumber === 2) {
        randomHelperArray.push(weapons[45], weapons[1]);
        randomMain = randomHelperArray[_.random(0, randomHelperArray.length-1)]
        randomHelperArray = []
        randomMainAmmo = mainGunAmmo(randomMain)
        randomMainAmmoTwo = secondAmmoType(randomMain)
        
        randomHelperArray.push(weapons[18], weapons[22])
        randomSide = randomHelperArray[_.random(0, randomHelperArray.length-1)]
        randomHelperArray = []
        randomSideAmmo = sideArmAmmo(randomSide)
        randomSideAmmoTwo = secondAmmoType(randomSide)
        
        randomMelee = meleeWeapon(melee)
        document.body.getElementsByTagName("h2")[0].style.color = "red";
        document.body.getElementsByTagName("h2")[0].innerText = `Pssst, they're sleeping...`
    }
    else if (randomNumber === 3) {
        randomMain = weapons[80]
        randomHelperArray = []
        randomMainAmmo = weapons[80].Ammo[1]
        randomMainAmmoTwo = secondAmmoType(randomMain)
        
        randomSide = weapons[47]
        randomSideAmmo = weapons[47].Ammo[1]
        randomSideAmmoTwo = secondAmmoType(randomSide)
        
        randomMelee = meleeWeapon(melee)
        document.body.getElementsByTagName("h2")[0].style.color = "red";
        document.body.getElementsByTagName("h2")[0].innerText = `Stop That Ship! Blast Them!`
    }
    else if (randomNumber === 4) {
        randomHelperArray.push(weapons[24], weapons[25], weapons[26]);
        randomMain = randomHelperArray[_.random(0, randomHelperArray.length-1)]
        randomHelperArray = []
        randomMainAmmo = mainGunAmmo(randomMain)
        randomMainAmmoTwo = secondAmmoType(randomMain)
        randomSide = sideArm(weapons)
        randomSideAmmo = sideArmAmmo(randomSide)
        randomSideAmmoTwo = secondAmmoType(randomSide)
        
        randomMelee = meleeWeapon(melee)
        document.body.getElementsByTagName("h2")[0].style.color = "red";
        document.body.getElementsByTagName("h2")[0].innerText = `Buechsenmanufactur VETTERLI`
    }
    else if (randomNumber === 5) {
        randomHelperArray.push(weapons[32], weapons[33], weapons[34], weapons[35]);
        randomMain = randomHelperArray[_.random(0, randomHelperArray.length-1)]
        randomHelperArray = []
        randomMainAmmo = mainGunAmmo(randomMain)
        randomMainAmmoTwo = secondAmmoType(randomMain)
        randomSide = sideArm(weapons)
        randomSideAmmo = sideArmAmmo(randomSide)
        randomSideAmmoTwo = secondAmmoType(randomSide)
        
        randomMelee = meleeWeapon(melee)
        document.body.getElementsByTagName("h2")[0].style.color = "red";
        document.body.getElementsByTagName("h2")[0].innerText = `Herr Heinrich comes to visit.`
    }
    else if (randomNumber === 6) {
        
        randomMain = weapons[85]        
        randomMainAmmo = mainGunAmmo(randomMain)
        randomMainAmmoTwo = secondAmmoType(randomMain)
        randomSide = sideArm(weapons)
        randomSideAmmo = sideArmAmmo(randomSide)
        randomSideAmmoTwo = secondAmmoType(randomSide)
        
        randomMelee = meleeWeapon(melee)
        document.body.getElementsByTagName("h2")[0].style.color = "red";
        document.body.getElementsByTagName("h2")[0].innerText = `Sir Lancelot.`
    }
    else if (randomNumber === 7) {
        for (let item of weapons) {if (item.Type === "Pistol" || item.Type === "Pistol-Shotgun Hybrid") {randomHelperArray.push(item)}}
        randomMain = randomHelperArray[_.random(0, randomHelperArray.length-1)]
        randomMainAmmo = mainGunAmmo(randomMain)
        randomMainAmmoTwo = secondAmmoType(randomMain)
        randomSide = randomHelperArray[_.random(0, randomHelperArray.length-1)]
        randomSideAmmo = sideArmAmmo(randomSide)
        randomSideAmmoTwo = secondAmmoType(randomSide)
        randomMelee = meleeWeapon(melee)
        document.body.getElementsByTagName("h2")[0].style.color = "red";
        document.body.getElementsByTagName("h2")[0].innerText = `Its high noon.`
    }
    else if (randomNumber === 8) {        
        for (let item of weapons) {if (item.Size === 3) {
            for (let ammo of item.Ammo) {if (ammo.Name === "Poison") {randomHelperArray.push(item)}}}}
        randomMain = randomHelperArray[_.random(0, randomHelperArray.length-1)]
        randomMainAmmo = weapons[16].Ammo[1]
        randomMainAmmoTwo = secondAmmoType(randomMain)
        randomHelperArray = []

        for (let item of weapons) {if (item.Size === 1) {
            for (let ammo of item.Ammo) {if (ammo.Name === "Poison") {randomHelperArray.push(item)}}}}
        randomSide = randomHelperArray[_.random(0, randomHelperArray.length-1)]
        randomSideAmmo = weapons[16].Ammo[1]
        randomSideAmmoTwo = secondAmmoType(randomSide)
        randomHelperArray = []
        randomMelee = meleeWeapon(melee)
        document.body.getElementsByTagName("h2")[0].style.color = "red";
        document.body.getElementsByTagName("h2")[0].innerText = `I'm not feeling well...`
    }
    else if (randomNumber === 9) {        
        for (let item of weapons) {if (item.Size === 3) {
            for (let ammo of item.Ammo) {if (ammo.Name === "Dumdum") {randomHelperArray.push(item)}}}}
        randomMain = randomHelperArray[_.random(0, randomHelperArray.length-1)]
        randomMainAmmo = weapons[38].Ammo[2]
        randomMainAmmoTwo = secondAmmoType(randomMain)
        randomHelperArray = []

        for (let item of weapons) {if (item.Size === 1) {
            for (let ammo of item.Ammo) {if (ammo.Name === "Dumdum") {randomHelperArray.push(item)}}}}
        randomSide = randomHelperArray[_.random(0, randomHelperArray.length-1)]
        randomSideAmmo = weapons[38].Ammo[2]
        randomSideAmmoTwo = secondAmmoType(randomSide)
        randomHelperArray = []
        randomMelee = meleeWeapon(melee)
        document.body.getElementsByTagName("h2")[0].style.color = "red";
        document.body.getElementsByTagName("h2")[0].innerText = `Dum dum dum dummmm.`
    }
    else {document.body.getElementsByTagName("h2")[0].style.color = "black"; 
          document.body.getElementsByTagName("h2")[0].innerText = `Bonus Mode Activated!`}
}
