/* Class Enemy */

/* Properties :
-sprite:enemy's image
-x:the x location of an enemy (default-0=left side, gets off the screen after 4)
-y:the y location of an enemy (randomly picked between 1 and 3 and can not changed)
-speed:randomly picked between 1 and 5. 1-slowest. */

var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = Math.floor((Math.random() * 3) + 1);
    this.speed = Math.floor((Math.random() * 2) + 1);
};

// Update enemy's position every dt, time delta between ticks-ensures the game runs the same speed for all PC's
Enemy.prototype.update = function(dt) {
    this.x = this.x + this.speed;
};

// Draw the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y * 75);
};

/* Class Player */

/* Properties :
-sprite:players's image
-x:the x location of a player (default-2=center, has to be between 0 and 4).
-y:the y location of an enemy (default-4=top of grass, has to be between 0 and 5).
-score:the score of the playet. gets 1 for each win and lost 1 for each collision */

var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 2;
    this.y = 4;
    this.score = 0;
}

// Update player's position every dt, time delta between ticks-ensures the game runs the same speed for all PC's
Player.prototype.update = function(dt) {
    //not sure what todo with this function yet
};

//checks if the player reached to y=0, means that he won the game. if so - msg and reset.
Player.prototype.checkWin = function()  {
    if (this.y == 0)    {
        this.render();
        alert("Congrats");
        this.updateScore(true);     //responsible to update the player's score
        this.reset();
    }
}

// Draw the Player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 75);
};

//this functions receives the user input and move the player character accordingly
//checks if the move is valid (will not move the player off the screen)
Player.prototype.handleInput = function(side) {
    if (side == "left") {
        if (this.x > 0)     {
            this.x = this.x - 1;
        }
    }
    if (side == "right") {
        if (this.x < 4)     {
            this.x = this.x + 1;
        }
    }
    if (side == "up") {
        if (this.y > 0)     {
            this.y = this.y - 1;
        }
        player.checkWin();
    }
    if (side == "down") {
        if (this.y < 5)     {
            this.y = this.y + 1;
        }
    }
}

//reset function - works in case that the player won or lost.
Player.prototype.reset = function() {
    this.x = 2;
    this.y = 4;
}

//works in case of win/lose - player's score changes accordingly
Player.prototype.updateScore = function(isWon)   {
    if (isWon)  {
        this.score = this.score + 1;
    }
    else    {
        if (this.score > 0) {
            this.score = this.score - 1;
        }
    }
    document.getElementById("score").innerHTML = "Score: "+this.score;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var Enemy1 = new Enemy();
var Enemy2 = new Enemy();
var Enemy3 = new Enemy();
var Enemy4 = new Enemy();
allEnemies = [Enemy1, Enemy2, Enemy3, Enemy4];
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {

    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
