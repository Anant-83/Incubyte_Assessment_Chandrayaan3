class Chandrayan {
    constructor(initialDirection, initialCoordinates) {
        this.direction = initialDirection;
        this.coordinates = { ...initialCoordinates };
        this.prevDirection = initialDirection;
    }

    turnLeft() {
        switch (this.direction) {
            case 'N':
                this.direction = 'W';
                this.prevDirection = 'W';
                break;
            case 'W':
                this.direction = 'S';
                this.prevDirection = 'S';
                break;
            case 'S':
                this.direction = 'E';
                this.prevDirection = 'E';
                break;
            case 'E':
                this.direction = 'N';
                this.prevDirection = 'N';
                break;
            case 'U':
                const tempForUp = new Chandrayan(this.prevDirection, this.coordinates);
                tempForUp.turnLeft();
                this.direction = tempForUp.direction;
                this.prevDirection = this.direction;
                break;
            case 'D':
                const tempForDown = new Chandrayan(this.prevDirection, this.coordinates);
                tempForDown.turnLeft();
                this.direction = tempForDown.direction;
                this.prevDirection = this.direction;
                break;
        }
    }

    turnRight() {
        switch (this.direction) {
            case 'N':
                this.direction = 'E';
                this.prevDirection = 'E';
                break;
            case 'E':
                this.direction = 'S';
                this.prevDirection = 'S';
                break;
            case 'S':
                this.direction = 'W';
                this.prevDirection = 'W';
                break;
            case 'W':
                this.direction = 'N';
                this.prevDirection = 'N';
                break;
            case 'U':
                const tempForUp = new Chandrayan(this.prevDirection, this.coordinates);
                tempForUp.turnRight();
                this.direction = tempForUp.direction;
                this.prevDirection = this.direction;
                break;
            case 'D':
                const tempForDown = new Chandrayan(this.prevDirection, this.coordinates);
                tempForDown.turnRight();
                this.direction = tempForDown.direction;
                this.prevDirection = this.direction;
                break;
        }
    }

    turnUp() {
        this.prevDirection = (this.direction != 'U' && this.direction != 'D') ? this.direction : this.prevDirection;
        this.direction = 'U';
    }

    turnDown() {
        this.prevDirection = (this.direction != 'U' && this.direction != 'D') ? this.direction : this.prevDirection;
        this.direction = 'D';
    }

    moveForward() {
        switch (this.direction) {
            case 'N':
                this.coordinates.y++;
                break;
            case 'S':
                this.coordinates.y--;
                break;
            case 'E':
                this.coordinates.x++;
                break;
            case 'W':
                this.coordinates.x--;
                break;
            case 'U':
                this.coordinates.z++;
                break;
            case 'D':
                this.coordinates.z--;
                break;
        }
    }

    moveBackward() {
        switch (this.direction) {
            case 'N':
                this.coordinates.y--;
                break;
            case 'S':
                this.coordinates.y++;
                break;
            case 'E':
                this.coordinates.x--;
                break;
            case 'W':
                this.coordinates.x++;
                break;
            case 'U':
                this.coordinates.z--;
                break;
            case 'D':
                this.coordinates.z++;
                break;
        }
    }

    execute(commands) {
        commands.forEach(command => {
            
        });
    }
}

module.exports = Chandrayan;