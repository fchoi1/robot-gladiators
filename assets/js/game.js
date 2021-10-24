// First sample function window.alert("This is an alert!! JavaScript is running!");
/*
// This does math!
console.log(10 + 10);

// Displays strings
console.log("This logs a string, good for leaving yourself a message");

// What is this?
console.log("Our robot's name is: " + playerName);
*/

// Store Robot name in variable
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto"
var enemyHealth = 50;
var enemyAttack = 12;

// New Fight Function - Functio Expression (assinged to variable)
var fight = function(){
    window.alert("The fight has begun!");
    enemyHealth = enemyHealth - playerAttack;
    console.log( playerName + " attacked " + enemyName + ". " + enemyName + " Health: " + enemyHealth);
    playerHealth = playerHealth - enemyAttack;
    console.log( enemyName + " attacked " + playerName + ". " + playerName + " Health: " + playerHealth);

    // Check Enemy Health
    if (enemyHealth <= 0){
        window.alert(enemyName + " has been defeated!");
    }else{
        window.alert(enemyName + " still has " + enemyHealth + " Health left.");
    }

    // Check Robot Health
    if (enemyHealth <= 0){
        window.alert(playerName + " has been defeated!");
    }else{
        window.alert(playerName + " still has " + playerHealth + " Health left.");
    }

}
fight();
