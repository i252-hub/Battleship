import Ship from '../src/ship';
import Player from '../src/player';
import Gameboard from '../src/gameboard';

describe('Player', () => {
    let player;
    let computer;
    let ship;

    beforeEach(() => {
        player = new Player('Alice');
        computer = new Player('Computer', true);
        ship = new Ship(3);
    });

    test('creates a player with a gameboard', () => {
        expect(player.gameboard).toBeInstanceOf(Gameboard);
        expect(computer.gameboard).toBeInstanceOf(Gameboard);
    });

    test('places a ship on the player\'s gameboard', () => {
        player.placeShip(ship, [0, 0]);
        expect(player.gameboard.ships.length).toBe(1);
        expect(player.gameboard.ships[0].coordinates).toEqual([[0, 0], [0, 1], [0, 2]]);
    });

    test('player receives an attack', () => {
        player.placeShip(ship, [0, 0]);
        expect(player.receiveAttack([0, 1])).toBe('hit'); // Assuming this is a hit
        expect(ship.hits).toBe(1);
    });

    test('checks if all ships are sunk', () => {
        const ship2 = new Ship(2);
        player.placeShip(ship, [0, 0]);
        player.placeShip(ship2, [1, 0]);

        player.receiveAttack([0, 0]);
        player.receiveAttack([0, 1]);
        player.receiveAttack([1, 0]);
        player.receiveAttack([1, 1]);

        expect(player.allShipsSunk()).toBe(true);
    });
});
