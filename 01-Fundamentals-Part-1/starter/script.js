/*
let js = 'amazing';
console.log(1337 + 1337);

console.log("janz1k");
console.log(16);

let firstName = "janz1k";
console.log(firstName);

let inimene = 'simmo';
let PI = 3.1337;

let myCountry = "Estonia";
let myCountryPopulation = "1.4million";

console.log("I live in " + myCountry + "and our population is " + myCountryPopulation)
/// LET, CONST VAR (Pigem kasutada const ja let (var vana))
let age = 23
age = 18
console.log(age) //Prindib 18 kuna muutsin variable ära.

const birthYear = 1998

var job = "programmer"
job = "footballer"
console.log(job)

///////// MATH OPERATORS
const now = 2037
const ageJanis = now - 12
const ageSarah = now - 4
console.log(ageJanis, ageSarah)

console.log(ageJanis * 2, ageSarah / 2, 2 ** 3)
// 2 ** 3 = 2 * 2 * 2 (2 tothe power of )

const fName = "Simmo"
const lName = "Cmon"
console.log(fName + " " + lName)

// Assignment operators
let x = 10 + 5 // 15
x += 10 // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++ // x = x + 1
x-- // x = x - 1
x-- // x = x - 1
console.log(x)

// Comparison operators
console.log(ageJanis > ageSarah) // >, <, >= , <=
console.log(ageSarah >= 18)

const averageAge = (ageJanis + ageSarah) / 2
console.log(ageJanis, ageSarah, averageAge)
*/

/*////Coding Challange #1
let markWeight = 78
let markLength = 1.69
const markBmi = markWeight / (markLength * markLength)
console.log(markBmi)

let johnWeight = 92
let johnLength = 1.95
const johnBmi = johnWeight / (johnLength * johnLength)
console.log(johnBmi)

let markHigherBMI = markBmi - johnBmi
("Mark has " + markHigherBMI + " higher body mass index than John.")

/*
const firstName = "Jannu"
const job = "tester"
const birthYear = 1998
const year = 2022


const jannuNew = `My name is ${firstName}, a ${year - birthYear} years old ${job}.`
console.log(jannuNew) // imo parem kasutada, palju paremini arusaadavam

console.log(`tAvAliNe sTrIng.w0w \n\
mitu rida.w0w \n\
frfrfrfrfr`) // \n\ teeb rea vahele*/

/*////IFFFFFFFFFFFFFFF
const age = 17

if (age >= 18) {
  console.log(`Olete lubatud klubi Stuudiosse!`)
} else {
  const yearsLeft = 18 - age
  console.log(`Olete liiga noor klubi Stuudiosse sisse saamiseks. Proovige ${yearsLeft} aasta pärast uuesti.`)
}

const birthYear = 2012

let century
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21
}
console.log(century) */

/*/Coding challange 2

function roundNum(num) {
  return Math.round(num * 100) / 100
}

let markWeight = 78
let markLength = 1.69
const markBmi = roundNum(markWeight / (markLength * markLength))
console.log(markBmi)

let johnWeight = 92
let johnLength = 1.92
const johnBmi = johnWeight / (johnLength * johnLength) * 100 / 100
console.log(roundNum(johnBmi))

console.log(markBmi, johnBmi)
let markHigherBMI = markBmi - johnBmi

if (markBmi > johnBmi) {
  console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`)
} else {
  console.log(`John's BMI (${johnBmi}) is high than Mark's (${markBmi})!`)
}

//Type conversion and Coercion

let n = "1" + 1; // "11" kuna number läheb stringile juurde
n = n - 1; // 11 - 1 = 10
console.log(n);

console.log("1" + "3")
/*//// Java progejad soovitavad kasutada pigem === kui ==, sest sel juhul peab täpselt vastama. (Kui == ja võrdluses on string ("12) ja number 12 siis result false"))

//const age = "18";
//if (age === 18) console.log("You just became an adult :D (strict)")

//if (age == 18) console.log("You just became an adult :D (loose)")


/*/BOOLEAN

const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);

if (hasDriverLicense && hasGoodVision) {
  console.log("Sarah can drive!")
} else {
  console.log("Someone else should drive")
}

const isTired = false; // C
console.log(hasDriverLicense || hasGoodVision);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah can drive!")
} else {
  console.log("Someone else should drive")
}

////Coding challange 3

let pointsDolphins = 1 + 1 + 1
let pointsKoalas = 88 + 91 + 110
let averageDolphins = pointsDolphins / 3
let averageKoalas = pointsKoalas / 3
let scoreDiffrence = pointsDolphins - pointsKoalas
let scoreDiffrence2 = pointsKoalas - pointsDolphins



if (averageDolphins > averageKoalas) {
  console.log(`Team Dolphins has won the competition against Team Koalas by winning with ${scoreDiffrence} points`)
} else if (averageDolphins < averageKoalas) {
  console.log(`Team Koalas has won the competition against Team Dolphins by winning with ${scoreDiffrence2} points`)
} else if (averageDolphins === averageKoalas) {
  console.log(`Team Koalas vs Team Dolphins result ended in draw. Both teams average score was ${averageDolphins}`)
}

///BONUS 1

let pointsDolphins = 97 + 112 + 101
let pointsKoalas = 109 + 95 + 106
let averageDolphins = pointsDolphins / 3
let averageKoalas = pointsKoalas / 3
let scoreDiffrence = pointsDolphins - pointsKoalas
let scoreDiffrence2 = pointsKoalas - pointsDolphins



if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log(`Team Dolphins has won the competition against Team Koalas by winning with ${scoreDiffrence} points`)
} else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
  console.log(`Team Koalas has won the competition against Team Dolphins by winning with ${scoreDiffrence2} points`)
} else if (averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100) {
  console.log(`Team Koalas vs Team Dolphins result ended in draw. Both teams average score was ${averageDolphins}`)
} else {
  console.log(`No one wins the trophy`)
}

//// SWITCH

const day = "wednesday"

switch (day) {
  case "monday": //day === "monday"
    console.log("Go to Gym!")
    console.log("Eat Chicken!")
    break;
  case "tuesday":
    console.log("Go to K1!")
    break;
  case "wednesday":
  case "thursday":
    console.log("Write some code!")
    break;
  case "friday":
    console.log("Read some books!")
    break;
  case "saturday":
  case "sunday":
    console.log("Get some rest!")
    break;
  default:
    console.log("Not a valid day!")
}

if (day === "wednesday" || day === "thursday") {
  console.log("Write some code!")
} else {
  console.log("Not a valid day!")
}

//// Conditional Operator (Asendus if ja caseile) Saab palju lihtsamalt ja kergemalt teha

const age = 5;
age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water`);

const drink = age >= 15 ? "wine" : "water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
/*/
//CODING CHALLANGE #4

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100)
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

const tipOne = bill * (15 / 100);
const tipTwo = bill * (20 / 100);
bill >= 50 && bill <= 300 ? console.log(`The bill was ${bill}, the tip was ${tipOne}, and the total value ${bill + tipOne}`) : console.log(`The bill was ${bill}, the tip was ${tipTwo}, and the total value ${bill + tipTwo}`)
// ülemine pigem liiga pikk ja pigem kasutada lühemat mis üleval pool.




