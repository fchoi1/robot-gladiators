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
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto"
var enemyHealth = 50;
var enemyAttack = 12;

// New Fight Function - Functio Expression (assinged to variable)
var fight = function(){

    // Decision to Fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight.toLowerCase() === "skip"){ // Choose to skip
        
        var confirmSkip = window.confirm("Are you sure you'd like to quit?"); // Confirm to skip: Window pops up
        if(confirmSkip){
            window.alert(playerName + " has chosen to skip the fight!");
            playerMoney -= 2; //Subtract 2 from money (Penalty)
        }else{
            fight() //Rerun the fight function
        }

    }else if (promptFight.toLowerCase() === "fight"){ //Choose to fight

        // Fight logic
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
        
    }else{ // If users input incorrectly
        window.alert("You need to choose a valid option. Try again!");
    }
}
fight();
