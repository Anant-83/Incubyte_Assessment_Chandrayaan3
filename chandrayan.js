class Chandrayan{
    constructor(initialDirection, initialCoordinates)
    {
        this.direction = initialDirection;
        this.coordinates = {...initialCoordinates};
        this.prevDirection = initialDirection;
    }

    turnLeft(){
        switch (this.direction){
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
        }
    }

    turnRight(){
        switch (this.direction){
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
        }
    }

    turnUp(){
        this.prevDirection = (this.prevDirection != 'U' && this.prevDirection != 'D') ? this.direction : this.prevDirection;
        this.direction = 'U';
    }
}

module.exports = Chandrayan;