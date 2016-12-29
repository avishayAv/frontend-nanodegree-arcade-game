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
    this.speed = Math.floor((Math.random() * 5) + 1);
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
-y:the y location of an enemy (default-4=top of grass, has to be between 0 and 5). */

var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 2;
    this.y = 4;
}

// Update player's position every dt, time delta between ticks-ensures the game runs the same speed for all PC's
Player.prototype.update = function(dt) {
    this.y = this.y - 0.02;
};

// Draw the Player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 75);
};

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
    //needs to be comment out when handleInput is implemented
    //player.handleInput(allowedKeys[e.keyCode]);
});
