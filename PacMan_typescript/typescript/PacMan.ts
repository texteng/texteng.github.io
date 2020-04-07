class PacMan extends Character {
    lives: number;
    score: number;
    
    constructor(x: number, y: number, direction: Direction) {
        super();
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.htmlId = 'pacman';
        this.lives = 3;
        this.score = 0;
    }

    get stats(): playerStats {
        return {lives: this.lives, score: this.score}
    }

    changeScore(addPoints: number): this {
        this.score += addPoints 
        document.getElementById('score').innerHTML = `Score: <span>${this.score}</span>`;
        return this;
    }

    display(): this {
        this.displayLocation();
        document.getElementById(this.htmlId).style.backgroundImage = `url('${this.htmlId}${this.direction}.gif')`;
        return this;
    }

    die(): this {
        this.lives--;
        this.x = 7;
        this.y = 7;
        this.display();
        document.getElementById('lives').innerHTML = `Lives: <span>${this.lives}</span>`;
        if (this.lives <= 0){
            document.getElementById('container').innerHTML = `<div id='gameover'><h1>Game Over</h1><p>Score = ${this.score}</p></div>`;
            return;
        }
        return this;
    }
}
