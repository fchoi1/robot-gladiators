// First sample function window.alert("This is an alert!! JavaScript is running!");

// Call the function 
//fight();

// Some psuedo Code:
/*
Win Conidtion: - player robot has defea ted all enemy-robots
    *   Fight all enemy robots
    *   Defeate each enemy robots

Lose Condition: - Player robot's health is zero or less
*/

// Store Robot name in variable
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roberto","Amy Android", "Robo Trumble" ]; //Array of enemy robots
var enemyHealth = 20;
var enemyAttack = 15;

// New Fight Function - Functio Expression (assinged to variable)
var fight = function(enemyName){ //Local var in function 

    while (playerHealth > 0 && enemyHealth > 0){ // Keep looping until either enemy or player robot is defeated

        // Decision to Fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight.toLowerCase() === "skip"){ // Choose to skip

            var confirmSkip = window.confirm("Are you sure you'd like to quit?"); // Confirm to skip: Window pops up
            if(confirmSkip){ 
                window.alert(playerName + " has chosen to skip the fight!");
                playerMoney -= 10; //Subtract 2 from money (Penalty)
                console.log("playerMoney", playerMoney);
                break;
            }else fight() //Rerun the fight function
        }
        
        // Fight logic
        window.alert("The fight has begun!");
        enemyHealth = enemyHealth - playerAttack;
        console.log( playerName + " attacked " + enemyName + ". " + enemyName + " Health: " + enemyHealth);
        
        // Check Enemy Health
        if (enemyHealth <= 0){
            window.alert(enemyName + " has been defeated!");
            playerMoney += 20; //Reward for beating robot
            break; //Leave while loop
        }else{
            window.alert(enemyName + " still has " + enemyHealth + " Health left.");
        }

        playerHealth = playerHealth - enemyAttack;
        console.log( enemyName + " attacked " + playerName + ". " + playerName + " Health: " + playerHealth);

        // Check Robot Health
        if (enemyHealth <= 0){
            window.alert(playerName + " has been defeated!");
            break; // exit loop
        }else{
            window.alert(playerName + " still has " + playerHealth + " Health left.");
        }

        // }else{ // If users input incorrectly
        //     window.alert("You need to choose a valid option. Try again!");
        // }
    }  
}

//Display enemy Info
for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0){ //Check if player can still play
        window.alert("Welcome to Robot Gladiators! Round: " + (i+1) ); //Parentheses allow for arithmetic operations
        var pickedEnemyName = enemyNames[i]; 
        enemyHealth = 50; //Reset Enemy Health
        //Debugger; // For debugging code
        fight(pickedEnemyName);
    }else{
        window.alert("You have lost your robot in Battle! Game Over!");
        break;
    }
  }


