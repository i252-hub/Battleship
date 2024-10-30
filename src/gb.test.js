const Ship = require('../src/ship');
const Gameboard = require('../src/gameboard');

describe('Gameboard', () => {
    let gameboard;
    let ship;

    beforeEach(() => {
        gameboard = new Gameboard();
        ship = new Ship(3);
    });

    test('places a ship on the gameboard', () => {
        gameboard.placeShip(ship, [0, 0]);
        
        expect(gameboard.ships.length).toBe(1);
        expect(gameboard.ships[0].coordinates).toEqual([[0, 0], [0, 1], [0, 2]]);
    });

    test('receive attack hits a ship', () => {
        gameboard.placeShip(ship, [0, 0]);

        expect(gameboard.receiveAttack([0, 1])).toBe('hit');
        expect(ship.hits).toBe(1);
    });

    test('receive attack records a miss', () => {
        gameboard.placeShip(ship, [0, 0]);

        expect(gameboard.receiveAttack([1, 1])).toBe('miss');
        expect(gameboard.missedAttacks).toEqual([[1, 1]]);
    });

    test('all ships sunk returns true when all ships are sunk', () => {
        const ship1 = new Ship(2);
        const ship2 = new Ship(3);
        gameboard.placeShip(ship1, [0, 0]);
        gameboard.placeShip(ship2, [1, 0]);

        gameboard.receiveAttack([0, 0]);
        gameboard.receiveAttack([0, 1]);
        gameboard.receiveAttack([1, 0]);
        gameboard.receiveAttack([1, 1]);
        gameboard.receiveAttack([1, 2]);

        expect(gameboard.allShipsSunk()).toBe(true);
    });
});
