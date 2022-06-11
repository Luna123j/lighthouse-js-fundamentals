const raining = true;

const cold = false;

   

if (cold){
    console.log("make sure you pick out a scarf");
    
}else{
     console.log("Don\'t forget your unbrella!");
}

console.log("Now you\'re ready to go outside");



const temperature = 12;
if (temperature < 0){
    console.log("Make sure you pick out a scarf!");
}else if (temperature < 15){
    console.log("Short sleeves won\'t cut it!")
} else{
    console.log("Short sleeves are fine.")
}
console.log("Now you are ready to go outside!");

if(temperature < -40|| temperature > 40){
    console.log("Maybe going outside isn\'t such a great idea...");
}

if(!raining){
    console.log("Leave unbrella at home!");
}