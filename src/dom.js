import Player from './player';
import Ship from './ship';

const domModule = (() => {
    const player = new Player('Player');
    const computer = new Player('Computer', true);


    function initGame() {
        player.placeShip(new Ship(3), [0, 0]);
        player.placeShip(new Ship(2), [2, 2]);
        computer.placeShip(new Ship(3), [0, 0]);
        computer.placeShip(new Ship(2), [2, 2]);


        renderBoard(player, 'player-board');
        renderBoard(computer, 'computer-board', true);


        document.getElementById('computer-board').addEventListener('click', handleAttack);
    }


    function renderBoard(player, boardId, isComputer = false) {
        const board = document.getElementById(boardId);
        board.innerHTML = ''; 

        for (let row = 0; row < 5; row++) {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('board-row');

            for (let col = 0; col < 5; col++) {
                const cell = document.createElement('div');
                cell.classList.add('board-cell');
                cell.dataset.coordinates = JSON.stringify([row, col]);


                if (!isComputer && player.gameboard.ships.some(ship => 
                    ship.coordinates.some(coord => coord[0] === row && coord[1] === col)
                )) {
                    cell.classList.add('ship');
                }

                board.appendChild(cell);
            }

            board.appendChild(rowDiv);
        }
    }


    function handleAttack(event) {
        const coordinates = JSON.parse(event.target.dataset.coordinates);
        const result = computer.receiveAttack(coordinates);

        if (result === 'hit') {
            event.target.classList.add('hit');
        } else if (result === 'miss') {
            event.target.classList.add('miss');
        }


        if (computer.allShipsSunk()) {
            alert('Player wins!');
            return;
        }


        computerTurn();
    }


    function computerTurn() {
        let row, col;
        let attackResult;

        do {
            row = Math.floor(Math.random() * 5);
            col = Math.floor(Math.random() * 5);
            attackResult = player.receiveAttack([row, col]);
        } while (attackResult === 'already-hit');


        const cell = document.querySelector(`#player-board .board-cell[data-coordinates="[${row},${col}]"]`);
        if (attackResult === 'hit') {
            cell.classList.add('hit');
        } else {
            cell.classList.add('miss');
        }


        if (player.allShipsSunk()) {
            alert('Computer wins!');
        }
    }

    return { initGame };
})();

export default domModule;
