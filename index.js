var prompt=require("prompt-sync")();
function guess(n){
    var randomNumber=Math.floor((Math.random()*10)+1);
    if(randomNumber==n){
        return true;
    }
    else{
      return false;
    }
}
    
var i=3;
while(i>0){
    console.log("guess the number?")
    var guessedNumber=parseInt(prompt());
    if(guess(guessedNumber)){
        console.log("correct")
        break;
    }
    else{
        console.log("wrong")
        console.log(i-1 + "times left")
        i--;
    }
}
if(i==0){
    console.log("you lost")
}