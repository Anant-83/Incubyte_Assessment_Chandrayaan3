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
            case 'U':
                const temp = new Chandrayan(this.prevDirection,this.coordinates);
                temp.turnLeft();
                this.direction = temp.direction;
                this.prevDirection = this.direction;
                break;
            case 'D':
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
        this.prevDirection = (this.direction != 'U' && this.direction != 'D') ? this.direction : this.prevDirection;
        this.direction = 'U';
    }

    turnDown(){
        this.prevDirection = (this.direction != 'U' && this.direction != 'D') ? this.direction : this.prevDirection;
        this.direction = 'D';
    }
}

module.exports = Chandrayan;