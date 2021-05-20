var a=90;
let a1=901;
console.log(a);
// redeclaring let variable
//let a1=99;
console.log(a1);
//redeclaring var with let not allowed
//let a=89;// not allowed as already declare in var
//console.log(a)
var q=909;
{
    var q=89;
console.log(q);
}
console.log(q);// in case of var value modified in block
let  x = 2;       // Allowed

{
  let x = 3;   // Allowed
}

{
  let x = 4;   // Allowed
}
console.log(x);// in case let value is not modified in block
//var declaration and assignment
var ab;
console.log(ab);//undefined
ab=78;

let af;
console.log(af);//undefined
af=67;

let ar;
console.log(ar);//undefined
//qw;
//console.log(qw);//reference error
//car  ="volvo";
//let car;//reference error
const pi=45;
console.log(pi);
const cars = ["Saab", "Volvo", "BMW"];
cars[0]="ADI";
console.log(cars);//we can change properties value but not complete array
var x2 = 5;
var z = Math.pow(x2,2); 
console.log(z);
var cv=9000;
var cv="jkj";
console.log(cv);
let ss=90909;
//let ss=89898;//already has been declared
//console.log(ss);
//function
function add(a,  b){
var c= a+b;
console.log(c);

}
var df=add(34,56);
 console.log(add(2,3));
//object 
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person);
console.log(person.firstName);

//var x2= "john";
//var y= new String("john");
//console.log(x2==y);//true
//console.log(x2===y);//false
//window.console.log(2+3);//window is not defined

//let sss=90;
//{
 // var sss=8932;// cant be declared
////}
//console.log(sss);//syntax error

