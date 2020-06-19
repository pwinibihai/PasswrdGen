var generateBtn = document.querySelector("#generate");

var lowercase= "abcdefghijklmnopqrstuvwxyz";
var uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols= "!@#$%_-*?/";
var numbers= "1234567890";

// Write password to the #password input
function writePassword() {
  var printPW= document.getElementById("password"); 

  var pLength; 
  var pwCharacSet= "";
  var generatePassword= "";
  
  var pLength= prompt ("Between 8 and 128. how many charcaters do you want your password to be?");
  if (pLength<8){
    alert ("Select a larger number");
    return;
  }
  if (pLength>128){
    alert ("Select a smaller number");
    return;
  } 

 var lrCase= confirm ("Would you like to use lowercase letters in your password?");
 if (lrCase==true){
   pwCharacSet += lowercase;
 }
 var uprCase= confirm ("Would you like to use uppercase letters in your password?");
 if (uprCase==true){
   pwCharacSet += uppercase;
 }
 var symb= confirm ("Would you like to use symbols in your password?");
 if (symb==true){
   pwCharacSet += symbols;
 }
 var nmbrs= confirm ("Would you like to use numbers in your password?");
 if (nmbrs==true){
   pwCharacSet += numbers;
 }
 
 for(var i=0; i<pLength; i++ ) {
   generatePassword += pwCharacSet.charAt(Math.floor(Math.random() * pwCharacSet.length));
 }
 
 printPW.innerHTML = generatePassword; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
