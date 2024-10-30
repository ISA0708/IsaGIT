let display = document.getElementById('display');

function appendCharacter(character) {
    display.value += character;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Ошибка';
    }
}

let name = "Ислам"; // Типі: string
let age = 16; //Типі: number
let isStudent = true; // Типі: boolean
let ageAsString = "16"; //Типі: string


console.log("Аты:", name, "| Типі:", typeof name);
console.log("Жасы:", age, "| Типі:", typeof age);
console.log("Студент пе:", isStudent, "| Типі:", typeof isStudent);
console.log("Жасы(жол ретінде):" , age, "| Типі:" , typeof ageAsString);
