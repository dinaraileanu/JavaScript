

/*const numar = Number( prompt('Input a number'));

switch(numar){

    case 0:
        alert("Zero");
        break;
    case 1:
         alert("One");
         break;
    case 2:
        alert("Two");
        break;
    case 3:
        alert("Three");
        break;
    case 4:
        alert("Four");
        break;
    case 5:
        alert("Five");
        break;
    case 6:
        alert("Six");
        break;
     case 7:
        alert("Seven");
        break;
    case 8:
        alert("Eight");
        break;
    case 9:
        alert("Nine");
        break;
}*/
//exercitiul 2
/*var sum = 0;

var start = +prompt("Inceputul: ", 0);
var finish = +prompt("Sfarsitul: ", 0);
var i = start; 
  
while (i <= finish) {
      if (i % 2 == 0) {
          sum += i; 
      }  
      i++;
}

alert( "Suma numerelor pare " + start + " pana la " + finish + " = " + sum );
console.log(sum);*/
//exercitiul 3

/*var a = prompt('Introduceti а', '');
var b = prompt('Introduceti b', '');
var c = prompt('Introduceti c', '');
  
if (a >= b && a >= c) {
  alert( "maxim " + a );
}
else if (b >= a && b >= c) {
  alert( "maxim " + b );
}
else {
  alert( "maxim " + c );
}*/
//exercitiul 4
/*function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("dina") );*/
//exercitiul 5
/*
function extractCurrencyValue(str){
  str.splice(1);
  alert(str);
}*///nu-mi iese
//exercitiul 6

/*var a = prompt('Introduceti  а', '');

if (a > 0) {
  alert( "1" );
}
  else if (a < 0) {
  alert( "-1" );
}
  else if (a == 0) {
  alert( "0" );
}
  else {
  alert( "Error" );
}*/
//exercitiul 7 a
/*var age = prompt("Introduceti varsta :, ")
if (!(age >= 14 && age <= 90)){
    alert("Nu apartine");
}
else {
    alert("Apartine ");
}*/
//exercitiul 7 b
/*var age = prompt("Introduceti varsta :, ")
if (age < 14 || age > 90){
    alert("Nu apartine");
}
else {
    alert("Apartine ");
}*/
//exercitiul 9

/*var nume = prompt("Introduceti numele ")
    alert(`Salut ${nume} `);

    let text= confirm("Esti cunoscut cu limbajul de programare JavaScript? ");
    if(text == true){
   alert( "Bravo");
    }
    else{
        alert("Poti incepe chiar acum");
    }*/
// exercitiul 10
/*var numar = prompt("Introduceti numarul ")
 
for (var i=1; i<=numar; i++) {
if (numar%i==0) {
console.log(i);
}
}*/
//Arrays
//Exercitiul 3

/*let styles = ["Jazz", "Blues"];
console.log(styles);
styles.push("Rock and Roll");
console.log(styles);
styles[1] = "Clasica"
console.log(styles);
alert(styles.shift());
console.log(styles);
styles.unshift("Rap", "Reggy");
console.log(styles);*/

//Exercitiul 1
//let numar = ["1",'2',"3","4","5"];
/*for (let i = 0; i < numar.length; i++) {
    console.log(numar);
}*/
/*for (let numere of numar){
    console.log(numar);
}*/
//exercitiul 4
/*function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("Introduceti", 0);
  
      
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );*/
  //exercitiul 6
/*let numar = [1, 2, 3, 4, 5, 6, 7, 8, 9];  
numar.splice(4,1, "0", "0","0");
console.log(numar);*/

//exercitiul 5
/*function convert(fn, array) {
  const newArray = []
  for (let i = 0; i < array.length; ++i) {
    newArray.push(fn(array[i]))
  }
  return newArray
}*/
//
//exercitiul 10
/*
const num =[8, 7,  2,  2,  3, 4, 2,  5, 5, 6, 7, 8, 5, 9, 0, 1];
function uniqueSorted(numar){
  var obj = {},
      out=[];
  for (var i = 0; i < num.length; i++) {
    var str = num[i];
    obj[str] = true; // запомнить строку в виде свойства объекта
  }
     for (i in obj) {
       out.push(i);
     }
     return out;
 // return Object.keys(obj); // вместо второго цикла можно так
}
result = uniqueSorted(num);
alert(num); // 
alert(result);*/

//exercitiul 9
/*var num =[1, "a", 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];

var ap = num.filter(function(number) {
  return number < 10;
});
alert(num);*/

//Object

//exercitiul 1
/*let user = new Object();
console.log(user);*/
/*let user = {     
  name: "John"
};
console.log(user);*/
/*let user = {     
  name: "John",
  surname:"Smith"
};
console.log(user);*/
/*function User() {

  this.name = "John";

  return { name: "Peter" }; 
}

console.log( new User().name );*/
/*let user = {     
  name: "John",
  surname:"Smith"
};
delete user.name;
console.log(user);*/

//exercitiul 2
/*let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function SumSalary(salaries){
  let sum = 0;
  for(let salariu of Object.values(salaries))  
  sum+=salariu;
  return(sum);
}
console.log(SumSalary(salaries));*/
//exercitiul 3






 



