

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
    var numar = prompt("Introduceti numarul ")
    
for (var i=1; i<=numar; i++) {
  if (numar%i==0) {
    console.log(i);
  }
}

 