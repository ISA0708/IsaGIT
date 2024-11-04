function checkConditions(age, isStudent, num1, num2) {
    const discountEligibility = age > 65 || isStudent; // Жеңілдік алуға құқылы
    const numberRange = (num) => num >= 10 && num <= 20; // 10 мен 20 арасында
    const negativeCheck = num1 < 0 || num2 < 0; // Біреу теріс

    alert("Жеңілдік алуға құқылы: " + discountEligibility); // true немесе false
    const enteredNumber = parseInt(prompt("Санды енгізіңіз:")); // Пайдаланушыдан сан сұрау
    alert("Сан 10 мен 20 арасында: " + numberRange(enteredNumber)); // true немесе false
    alert("Біреу теріс: " + negativeCheck); // true немесе false
}

// Мысалдар
const age = 70; // Адамның жасы
const isStudent = false; // Адам студент пе?
const number1 = -5; // Бірінші сан
const number2 = 10; // Екінші сан

checkConditions(age, isStudent, number1, number2);

