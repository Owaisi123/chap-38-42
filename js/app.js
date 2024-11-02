// Qno1:

// function power(a, b) {
//     return a ** b; 
// }


// Qno:2


// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }

// const year = prompt("Enter a year:");
// console.log(isLeapYear(year) ? "Leap Year" : "Not a Leap Year");


// Qno:3


// function calculateArea(a, b, c) {
//     let S = (a + b + c) / 2;
//     return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }

// console.log(calculateArea(3, 4, 5)); 


// Qno:4


// function average(marks) {
//     return marks.reduce((sum, mark) => sum + mark) / marks.length;
// }

// function percentage(marks) {
//     return (average(marks) / 100) * 100; 
// }

// function mainFunction() {
//     const marks = [80, 90, 70]; 
//     const avg = average(marks);
//     const perc = percentage(marks);
//     console.log(`Average: ${avg}, Percentage: ${perc}%`);
// }

// mainFunction();



// Qno:5


// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1; 
// }

// console.log(customIndexOf("hello", "e")); 


// Qno:6;

// function removeVowels(sentence) {
//     return sentence.replace(/[aeiouAEIOU]/g, '');
// }

// console.log(removeVowels("Hello World")); 


// Qno:7


// function countDoubleVowels(text) {
//     let count = 0;
//     const vowels = "aeiouAEIOU";

//     for (let i = 0; i < text.length - 1; i++) {
//         if (vowels.includes(text[i]) && vowels.includes(text[i + 1])) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countDoubleVowels("Pleases read this application and give me gratuity")); 


// Qno:8;


// function toMeters(km) {
//     return km * 1000;
// }

// function toFeet(km) {
//     return km * 3280.84;
// }

// function toInches(km) {
//     return km * 39370.1;
// }

// function toCentimeters(km) {
//     return km * 100000;
// }

// const distance = prompt("Enter distance in km:");
// console.log(`Meters: ${toMeters(distance)}, Feet: ${toFeet(distance)}, Inches: ${toInches(distance)}, Centimeters: ${toCentimeters(distance)}`);


// Qno:9;


// function calculateOvertimePay(hoursWorked) {
//     if (hoursWorked > 40) {
//         const overtimeHours = hoursWorked - 40;
//         return overtimeHours * 12;
//     }
//     return 0;
// }

// console.log(calculateOvertimePay(45)); 


// Qno:10;

// function currencyNotes(amount) {
//     let notes100 = Math.floor(amount / 100);
//     amount %= 100;

//     let notes50 = Math.floor(amount / 50);
//     amount %= 50;

//     let notes10 = Math.floor(amount / 10);

//     return { notes100, notes50, notes10 };
// }

// const withdrawalAmount = prompt("Enter amount to withdraw in hundreds:");
// const notes = currencyNotes(withdrawalAmount);
// console.log(`100s: ${notes.notes100}, 50s: ${notes.notes50}, 10s: ${notes.notes10}`);
