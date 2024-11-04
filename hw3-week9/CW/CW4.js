// let a=10, b=10, e=7;
// let isStudent = true
// let isAlumni = true

// if(!isStudent || !isAlumni){
//     console.log("кіруге болмайды");
// }else if(isAlumni && isStudent){
//     console.log("Сізге кыруге болады");
// }


// // ==(тең) Салыстыру
// console.log(a==b);//true - Бұрыс 

// // ===(тен) Салыстыру 
// console.log(a===b); //true

// // !=(тең емес)
// console.log(a!=b);//false

// // > Улкен
// console.log(a>b );//false

// // < Кіші
// console.log(a<b);//false

// // > Улкен немесе тең
// console.log(a>=b);//10>=10 true

// // < Кіші немесе тең
// console.log(a<=b);//10<=10true

// /* let age = 17 */

// if(age>=18){
//     console.log("Сізге кешке кыру тыйым салдынады");
// }else{
//     console.log("кіруге болады");
// }

// // && (жане) кем дегенде быреуы
// // false болган жагдайда false кайтарады
// console.log((a>b) && (e<a));
// //          10>10   7<10 =>false


// // || (немесе) кем дегенде быреуы
// // true болган жагдайда true кайтарады
// console.log((a>b) || (e<a));
// //         10>10     7<10 => true кайтарады


// let age = 25
// let isVip = false;
// let hasTicket = true;

// if((age>=18 && hasTicket) || isVip){
//     console.log("сіз кіре алмасыз");
// }else{
//     console.log("Сіз кіре алмайсыз");

// }

let age = Number(prompt("Введите ваш возраст число"))

alert(age>=20 && age<=50 && age%2==0);
