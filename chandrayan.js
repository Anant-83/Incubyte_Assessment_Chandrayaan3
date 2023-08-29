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
            
        }
    }
}

module.exports = Chandrayan;