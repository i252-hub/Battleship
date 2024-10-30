export default class Gameboard {
    constructor() {
        this.ships = [];
        this.missedAttacks = [];
    }


    placeShip(ship, coordinates) {

        for (let placedShip of this.ships) {
            if (placedShip.coordinates && placedShip.coordinates.some(coord => 
                coord[0] === coordinates[0] && coord[1] === coordinates[1]
            )) {
                throw new Error('Cannot place ship on occupied coordinates');
            }
        }


        ship.coordinates = Array.from({ length: ship.length }, (_, i) => [coordinates[0], coordinates[1] + i]);
        this.ships.push(ship);
    }


    receiveAttack(coordinates) {
        for (let ship of this.ships) {
            if (ship.coordinates.some(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1])) {
                ship.hit(); 
                return 'hit';
            }
        }

        this.missedAttacks.push(coordinates); 
        return 'miss';
    }

   
    allShipsSunk() {
        return this.ships.every(ship => ship.isSunk());
    }
}

