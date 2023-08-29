const Chandrayan = require('./chandrayan');
describe("Test for the functionality - Turn the spacecraft left/right", () => {
    test("Turn left from current direction - 'N' ", ()=>{
        const currentDirection = 'N';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.turnLeft();
        expect(spacecraft.direction).toBe('W');
    })
})