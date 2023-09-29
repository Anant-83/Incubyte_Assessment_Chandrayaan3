class Chandrayan {
    direction: string;
    coordinates: { x: number, y: number, z: number };
    prevDirection: string;
    static boundary: number = 10;

    constructor(initialDirection: string, initialCoordinates: { x: number, y: number, z: number }) {
        this.direction = initialDirection;
        this.coordinates = { ...initialCoordinates };
        this.prevDirection = initialDirection;
    }

    turnLeft(): void {
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

    turnRight(): void {
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

    turnUp(): void {
        this.prevDirection = (this.direction != 'U' && this.direction != 'D') ? this.direction : this.prevDirection;
        this.direction = 'U';
    }

    turnDown(): void {
        this.prevDirection = (this.direction != 'U' && this.direction != 'D') ? this.direction : this.prevDirection;
        this.direction = 'D';
    }

    moveForward(): void {
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

    moveBackward(): void {
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

<<<<<<< HEAD:chandrayan.ts
    execute(commands: string[]): void {
        const validArguments: string[] = ['N', 'S', 'E', 'W', 'f', 'b', 'l', 'r', 'u', 'd'];
        const invalidCommands: string[] = commands.filter(command => !validArguments.includes(command));
=======
    execute(commands) {
        const validArguments = ['N', 'S', 'E', 'W', 'f', 'b', 'l', 'r', 'u', 'd'];
        const invalidCommands = commands.filter(command => !validArguments.includes(command));
>>>>>>> ca88d025b4d3f2a23e658154f8965cf1d529eaea:chandrayan.js
        invalidCommands.length === 0 && commands.forEach(command => {
            switch (command) {
                case 'f':
                    this.moveForward();
                    break;
                case 'b':
                    this.moveBackward();
                    break;
                case 'l':
                    this.turnLeft();
                    break;
                case 'r':
                    this.turnRight();
                    break;
                case 'u':
                    this.turnUp();
                    break;
                case 'd':
                    this.turnDown();
                    break;
            }
            const current_x: number = this.coordinates.x;
            const current_y: number = this.coordinates.y;
            const current_z: number = this.coordinates.z;
            if (Math.abs(current_x) > Chandrayan.boundary || Math.abs(current_y) > Chandrayan.boundary || Math.abs(current_z) > Chandrayan.boundary) {
                throw new Error("Boundary crossed!");
            }
        });
    }
}

<<<<<<< HEAD:chandrayan.ts
export default Chandrayan;
=======
module.exports = Chandrayan;
>>>>>>> ca88d025b4d3f2a23e658154f8965cf1d529eaea:chandrayan.js
