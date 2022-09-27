const prompt= require ('prompt-sync')();

let SceltaG1=0;

 SceltaG1= prompt("G1 scelga fra carta, forbice o sasso: ").toLowerCase();
console.log("Questa è la scelta del G1: " + SceltaG1);

while ((SceltaG1 != "carta") && (SceltaG1 != "forbice") && (SceltaG1 != "sasso")) {
    console.log("Scelta non corretta");
    SceltaG1= prompt("Si scelga fra carta, forbice o sasso: ");
    console.log("Questa è la scelta del G1: " + SceltaG1);
}

let SceltaG2= prompt("G2 scelga fra carta, forbice o sasso: ").toLowerCase();
console.log("Questa è la scelta del G2: " + SceltaG2);

while ((SceltaG2 != "carta") && (SceltaG2 != "forbice") && (SceltaG2 != "sasso")) {
    console.log("Scelta non corretta");
    SceltaG2=prompt("Si scelga fra carta, forbice o sasso: ");
    console.log("Questa è la scelta del G2: " + SceltaG2);
} 

if ((SceltaG1=="carta") && (SceltaG2== "carta")) {
    console.log("PAREGGIO!");
} else if ((SceltaG1=="carta") && (SceltaG2== "forbice")) {
    console.log("Ha vinto G2!");
} else if ((SceltaG1=="carta") && (SceltaG2== "sasso")) {
    console.log("Ha vinto G1!");
} else if ((SceltaG1=="forbice") && (SceltaG2== "forbice")) {
    console.log("PAREGGIO!");
} else if ((SceltaG1=="forbice") && (SceltaG2== "sasso")) {
    console.log("Ha vinto G2!");
} else if ((SceltaG1=="forbice") && (SceltaG2== "carta")) {
    console.log("Ha vinto G1!");
} else if ((SceltaG1=="sasso") && (SceltaG2== "sasso")) {
    console.log("PAREGGIO!");
} else if ((SceltaG1=="sasso") && (SceltaG2== "carta")) {
    console.log("Ha vinto G2!");
} else if ((SceltaG1=="sasso") && (SceltaG2== "forbice")) {
    console.log("Ha vinto G1!");
}