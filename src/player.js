import Gameboard from './gameboard';

export default class Player {
    constructor(name, isComputer = false) {
        this.name = name; 
        this.isComputer = isComputer; 
        this.gameboard = new Gameboard(); 
    }

    placeShip(ship, coordinates) {
        this.gameboard.placeShip(ship, coordinates);
    }

    receiveAttack(coordinates) {
        return this.gameboard.receiveAttack(coordinates);
    }

    allShipsSunk() {
        return this.gameboard.allShipsSunk();
    }
}
