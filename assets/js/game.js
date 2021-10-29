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

 // Util Math Function
 var randomNumber = function(min, max) {
    var value = 0;
    if (max > min){
        value = Math.floor(Math.random() * (max-min+1)) + min;
    }
    return value;
};

//Variables!

// Store Robot name in variable (object)
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    },
    refillHealth: function(healthValue, healthCost){
        if (this.money >= healthCost){
            window.alert("Refilling player's health by " + healthValue + " for $" + healthCost);
            this.health += healthValue;
            this.money -= healthCost;
        }else{
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function(attackValue, attackCost){
        if (this.money >= attackCost){
            window.alert("Refilling player's health by " + attackValue + " for $" + attackCost);
            this.attack += attackValue;
            this.money -= attackCost;
        }else{
            window.alert("You don't have enough money!");
        }
    }
};

// You can also log multiple values at once like this
console.log("Name: ", playerInfo.name, " Attack: ", playerInfo.attack, "Health: ",playerInfo.health);

var enemyInfo =[
    {
        name: "Roberto",
        attack: randomNumber(10, 14),
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14),
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14),
    }
];


// Shop variables object???

var shopInfo = {
    healthcost: 7,
    upgradecost: 7,
    healthincrease: 20,
    upgradeincrease: 6
}



// Fight Function - Functio Expression (assinged to variable)
var fight = function(enemy){ //Local var in function 

    while (playerInfo.health > 0 && enemy.health> 0){ // Keep looping until either enemy or player robot is defeated

        // Decision to Fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight.toLowerCase() === "skip"){ // Choose to skip

            var confirmSkip = window.confirm("Are you sure you'd like to quit?"); // Confirm to skip: Window pops up
            if(confirmSkip){ 
                window.alert(playerInfo.name + " has chosen to skip the fight!");
                playerInfo.money = Math.max(0,playerInfo.money - 10); //Subtract 2 from money (Penalty)
                console.log("playerInfo.money", playerInfo.money);
                break;
            }else fight() //Rerun the fight function
        }
        
        // Fight logic
        window.alert("The fight has begun!");
        // Random enemy attack
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack + 1);
        enemy.health= Math.max(0,enemy.health - damage);
        console.log( playerInfo.name + " attacked " + enemy.name+ ". " + enemy.name+ " Health: " + enemy.health);
        
        // Check Enemy Health
        if (enemy.health<= 0){
            window.alert(enemy.name+ " has been defeated!");
            playerInfo.money += 10; //Reward for beating robot
            break; //Leave while loop
        }else{
            window.alert(enemy.name+ " still has " + enemy.health+ " Health left.");
        }

        damage = randomNumber(enemy.attack - 3, enemy.attack + 1);
        playerInfo.health = Math.max(0,playerInfo.health - damage);
        console.log( enemy.name+ " attacked " + playerInfo.name + ". " + playerInfo.name + " Health: " + playerInfo.health);

        // Check Robot Health
        if (enemy.health<= 0){
            window.alert(playerInfo.name + " has been defeated!");
            break; // exit loop
        }else{
            window.alert(playerInfo.name + " still has " + playerInfo.health + " Health left.");
        }

        // }else{ // If users input incorrectly
        //     window.alert("You need to choose a valid option. Try again!");
        // }
    }  
}

// Shop function
var shop = function(discountHealth, discountAttack){
    console.log("Entered the shop");
    
    healthPrice = shopInfo.healthcost - discountHealth;
    upgradePrice = shopInfo.upgradecost - discountAttack;

    
    let shopChoice = window.prompt("What do you want to do: REFILL health, UPGRADE your attack, LEAVE the store? Prices todays: REFILL health: $" + (healthPrice) + "    UPGRADE attack: $" + upgradePrice );

    //Switch Case

    switch (shopChoice.toLowerCase()){
        case "REFILL":
        case "refill":
            playerInfo.refillHealth(shopInfo.healthincrease,healthPrice);
            shop(discountHealth, discountAttack);
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack(shopInfo.upgradeincrease,upgradePrice);
            shop(discountHealth, discountAttack);
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;
        default: // equivalent to else
            window.alert("You did not pick a valid option. Try again.");
            shop(discountHealth, discountAttack);
            break;

    }
}

// Check end game condition
var endGame = function(){
    
    if (playerInfo.health > 0) { // Player win
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }else{     // Player lost
        window.alert("You've lost your robot in battle :(");
    }

    var playAgainConfirm = window.confirm("Do you want to play again?");
    if (playAgainConfirm){
        startGame();
    }else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}
// start the game function
var startGame = function(){

    //Reset Stats
    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;

    //Display enemy Info
    for(i = 0; i < enemyInfo.length; i++) {
        var pickedEnemyObj = enemyInfo[i];
        if (playerInfo.health > 0){ //Check if player can still play
            window.alert("Welcome to Robot Gladiators! Round: " + (i+1) ); //Parentheses allow for arithmetic operations
            pickedEnemyObj.health= randomNumber(40, 60); //Reset Enemy Health random
            //Debugger; // For debugging code
            fight(pickedEnemyObj);
        }else{
            window.alert("You have lost your robot in Battle! Game Over!");
            break;
        }

        if (playerInfo.health > 0 && i < enemyInfo.length - 1){// Check if last enemy and still alive

            var storeConfirm = window.confirm("The fight is over, visit the store before next round?");
            // add discount feature in store
            shop(randomNumber(0,3),randomNumber(0,3));
        }
    }

    // play again
    endGame();
    
    startGame();
}



//start Game
startGame();