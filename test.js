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
    test("Turn Right from current direction - 'West' ", ()=>{
        const currentDirection = 'W';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.turnRight();
        expect(spacecraft.direction).toBe('N');
    })
    test("Turn Right from current direction - 'South' ", ()=>{
        const currentDirection = 'S';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.turnRight();
        expect(spacecraft.direction).toBe('W');
    })
    test("Turn Right from current direction - 'East' ", ()=>{
        const currentDirection = 'E';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.turnRight();
        expect(spacecraft.direction).toBe('S');
    })


    test("Turn left from current angle upward", () => {
        const currentDirection = 'N';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.turnUp();
        spacecraft.turnLeft();
        expect(spacecraft.direction).toBe('W');
    })
    test("Turn left from current angle downward", () => {
        const currentDirection = 'N';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.turnDown();
        spacecraft.turnLeft();
        expect(spacecraft.direction).toBe('W');
    })



    test("Turn right from current angle upward", () => {
        const currentDirection = 'N';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.turnUp();
        spacecraft.turnRight();
        expect(spacecraft.direction).toBe('E');
    })
    test("Turn right from current angle downward", () => {
        const currentDirection = 'N';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.turnDown();
        spacecraft.turnRight();
        expect(spacecraft.direction).toBe('E');
    })
})


describe("Test for functionality - Turn the spacecraft up/down", () => {
    test("Turn upwards from any of current direction", ()=>{
        const currentDirection = 'N';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.turnUp();
        expect(spacecraft.direction).toBe('U');
    })


    test("Turn downwards from any of current direction", ()=>{
        const currentDirection = 'N';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.turnDown();
        expect(spacecraft.direction).toBe('D');
    })
})


describe("Test for functionality - Move the spacecraft forward/backward", () => {
    test("Move spacecraft forward from current direction - North", ()=>{
        const currentDirection = 'N';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.moveForward();
        expect(spacecraft.coordinates).toEqual({x:0,y:1,z:0});
    })
    test("Move spacecraft forward from current direction - South", ()=>{
        const currentDirection = 'S';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.moveForward();
        expect(spacecraft.coordinates).toEqual({x:0,y:-1,z:0});
    })
    test("Move spacecraft forward from current direction - East", ()=>{
        const currentDirection = 'E';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.moveForward();
        expect(spacecraft.coordinates).toEqual({x:1,y:0,z:0});
    })
    test("Move spacecraft forward from current direction - West", ()=>{
        const currentDirection = 'W';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.moveForward();
        expect(spacecraft.coordinates).toEqual({x:-1,y:0,z:0});
    })


    test("Move spacecraft forward from current direction - Upwards", ()=>{
        const currentDirection = 'U';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.moveForward();
        expect(spacecraft.coordinates).toEqual({x:0,y:0,z:1});
    })
    test("Move spacecraft forward from current direction - Downwards", ()=>{
        const currentDirection = 'D';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.moveForward();
        expect(spacecraft.coordinates).toEqual({x:0,y:0,z:-1});
    })



    test("Move spacecraft Backward from current direction - North", ()=>{
        const currentDirection = 'N';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.moveBackward();
        expect(spacecraft.coordinates).toEqual({x:0,y:-1,z:0});
    })
    test("Move spacecraft Backward from current direction - South", ()=>{
        const currentDirection = 'S';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.moveBackward();
        expect(spacecraft.coordinates).toEqual({x:0,y:1,z:0});
    })
    test("Move spacecraft Backward from current direction - East", ()=>{
        const currentDirection = 'E';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.moveBackward();
        expect(spacecraft.coordinates).toEqual({x:-1,y:0,z:0});
    })
    test("Move spacecraft Backward from current direction - West", ()=>{
        const currentDirection = 'W';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.moveBackward();
        expect(spacecraft.coordinates).toEqual({x:1,y:0,z:0});
    })


    test("Move spacecraft Backward from current direction - Upwards", ()=>{
        const currentDirection = 'U';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.moveBackward();
        expect(spacecraft.coordinates).toEqual({x:0,y:0,z:-1});
    })
    test("Move spacecraft Backward from current direction - Downwards", ()=>{
        const currentDirection = 'D';
        const currentCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(currentDirection, currentCoordinates);
        spacecraft.moveBackward();
        expect(spacecraft.coordinates).toEqual({x:0,y:0,z:1});
    })
})

describe("Test for perform multiple functionality together", () => {
    test("Perform sequence of operations test1", () => {
        const commands = ['f', 'r', 'u', 'b', 'l'];
        const initialDirection = 'N';
        const initialCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(initialDirection, initialCoordinates);
        spacecraft.execute(commands);

        const expected_spacecraft = new Chandrayan('N', {x:0,y:1,z:-1});
        expect(spacecraft).toEqual(expected_spacecraft);
    })

    test("Perform sequence of operations test2", () => {
        const commands = ['b', 'b', 'u', 'f', 'r'];
        const initialDirection = 'W';
        const initialCoordinates = { x: -2, y: 0, z: 0 };
        const spacecraft = new Chandrayan(initialDirection, initialCoordinates);
        spacecraft.execute(commands);

        const expected_spacecraft = new Chandrayan('N', {x:0,y:0,z:1});
        expect(spacecraft).toEqual(expected_spacecraft);
    })

    test("Perform sequence of operations test3", () => {
        const commands = ['d', 'r', 'f', 'b', 'l', 'l', 'f'];
        const initialDirection = 'N';
        const initialCoordinates = { x: 0, y: 1, z: 0 };
        const spacecraft = new Chandrayan(initialDirection, initialCoordinates);
        spacecraft.execute(commands);

        const expected_spacecraft = new Chandrayan('W', {x:-1,y:1,z:0});
        expect(spacecraft).toEqual(expected_spacecraft);
    })

    test("Perform sequence of operations test4", () => {
        const commands = ['u', 'l', 'd', 'r'];
        const initialDirection = 'S';
        const initialCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(initialDirection, initialCoordinates);
        spacecraft.execute(commands);

        const expected_spacecraft = new Chandrayan('S', {x:0,y:0,z:0});
        expect(spacecraft).toEqual(expected_spacecraft);
    })
})

describe("Test for invalid arguments", () => {

    test("Perform operations for invalid direction", () => {
        const commands = ['Z', 'l', 'b', 'b'];
        const initialDirection = 'N';
        const initialCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(initialDirection, initialCoordinates);
        spacecraft.execute(commands);
 
        const expected_spacecraft = new Chandrayan('N', {x:0,y:0,z:0});
        expect(spacecraft).toEqual(expected_spacecraft);
    })

    test("Perform operations for invalid command", () => {
        const commands = ['b', 'a', 'z', 'r'];
        const initialDirection = 'N';
        const initialCoordinates = { x: 0, y: 0, z: 0 };
        const spacecraft = new Chandrayan(initialDirection, initialCoordinates);
        spacecraft.execute(commands);

        const expected_spacecraft = new Chandrayan('N', {x:0,y:0,z:0});
        expect(spacecraft).toEqual(expected_spacecraft);
    })
})
