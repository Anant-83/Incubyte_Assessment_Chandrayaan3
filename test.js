const Chandrayan = require('./chandrayan');
describe("Test for the functionality - Turn the spacecraft left/right", () => {
    test("Turn left from current direction - 'North' ", ()=>{
        const currentDirection = 'N';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.turnLeft();
        expect(spacecraft.direction).toBe('W');
    })
    test("Turn left from current direction - 'West' ", ()=>{
        const currentDirection = 'W';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.turnLeft();
        expect(spacecraft.direction).toBe('S');
    })
    test("Turn left from current direction - 'South' ", ()=>{
        const currentDirection = 'S';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.turnLeft();
        expect(spacecraft.direction).toBe('E');
    })
    test("Turn left from current direction - 'East' ", ()=>{
        const currentDirection = 'E';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.turnLeft();
        expect(spacecraft.direction).toBe('N');
    })



    test("Turn Right from current direction - 'North' ", ()=>{
        const currentDirection = 'N';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.turnRight();
        expect(spacecraft.direction).toBe('E');
    })
})