interface characterLocation {
    x: number,
    y: number,
    direction: Direction;
}

interface playerStats {
    lives: number,
    score: number
}

interface monster { 
    location: characterLocation,
    strategy: Strategy; 
}