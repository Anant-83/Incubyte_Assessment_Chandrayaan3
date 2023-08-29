class Chandrayan{
    constructor(initialDirection, initialCoordinates)
    {
        this.direction = initialDirection;
        this.coordinates = {...initialCoordinates};
    }

    turnLeft(){
        switch (this.direction){
            case 'N':
                this.direction = 'W';
                break;
            case 'W':
                this.direction = 'S';
                break;
            case 'S':
                this.direction = 'E';
                break;
            case 'E':
                this.direction = 'N';
                break;
            
        }
    }
}

module.exports = Chandrayan;