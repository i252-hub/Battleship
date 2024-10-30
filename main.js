/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\r\n\r\n\r\nconst domModule = {\r\n    player: null,\r\n    computer: null,\r\n\r\n    initGame: function () {\r\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Player');\r\n        this.computer = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Computer', true);\r\n\r\n        this.player.placeShip(new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3), [0, 0]);\r\n        this.player.placeShip(new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](2), [2, 2]);\r\n        this.computer.placeShip(new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3), [0, 0]);\r\n        this.computer.placeShip(new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](2), [2, 2]);\r\n\r\n        this.renderBoard(this.player, 'player-board');\r\n        this.renderBoard(this.computer, 'computer-board', true);\r\n\r\n        document.getElementById('computer-board').addEventListener('click', this.handleAttack.bind(this, this.computer));\r\n    },\r\n\r\n    renderBoard: function (player, boardId, isComputer = false) {\r\n        const board = document.getElementById(boardId);\r\n        board.innerHTML = '';\r\n\r\n        for (let row = 0; row < 5; row++) {\r\n            const rowDiv = document.createElement('div');\r\n            rowDiv.classList.add('board-row');\r\n\r\n            for (let col = 0; col < 5; col++) {\r\n                const cell = document.createElement('div');\r\n                cell.classList.add('board-cell');\r\n                cell.dataset.coordinates = JSON.stringify([row, col]);\r\n\r\n                if (!isComputer && player.gameboard.ships.some(ship =>\r\n                    ship.coordinates.some(coord => coord[0] === row && coord[1] === col)\r\n                )) {\r\n                    cell.classList.add('ship');\r\n                }\r\n\r\n                rowDiv.appendChild(cell);\r\n            }\r\n\r\n            board.appendChild(rowDiv);\r\n        }\r\n    },\r\n\r\n    handleAttack: function (computer, event) {\r\n        const coordinates = JSON.parse(event.target.dataset.coordinates);\r\n        const result = computer.receiveAttack(coordinates);\r\n\r\n        if (result === 'hit') {\r\n            event.target.classList.add('hit');\r\n        } else if (result === 'miss') {\r\n            event.target.classList.add('miss');\r\n        }\r\n\r\n        if (computer.allShipsSunk()) {\r\n            alert('Player wins!');\r\n            return;\r\n        }\r\n\r\n        this.computerTurn();\r\n    },\r\n\r\n    computerTurn: function () {\r\n        let row, col;\r\n        let attackResult;\r\n\r\n        do {\r\n            row = Math.floor(Math.random() * 5);\r\n            col = Math.floor(Math.random() * 5);\r\n            attackResult = this.player.receiveAttack([row, col]);\r\n        } while (attackResult === 'already-hit');\r\n\r\n        const cell = document.querySelector(`#player-board .board-cell[data-coordinates=\"[${row},${col}]\"]`);\r\n        if (attackResult === 'hit') {\r\n            cell.classList.add('hit');\r\n        } else {\r\n            cell.classList.add('miss');\r\n        }\r\n\r\n        if (this.player.allShipsSunk()) {\r\n            alert('Computer wins!');\r\n        }\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domModule);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZG9tLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QjtBQUNKO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwrQ0FBTTtBQUNoQyw0QkFBNEIsK0NBQU07QUFDbEM7QUFDQSxrQ0FBa0MsNkNBQUk7QUFDdEMsa0NBQWtDLDZDQUFJO0FBQ3RDLG9DQUFvQyw2Q0FBSTtBQUN4QyxvQ0FBb0MsNkNBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFNBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFNBQVM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSw0RkFBNEYsSUFBSSxHQUFHLElBQUk7QUFDdkc7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcz9jYmYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xyXG5cclxuY29uc3QgZG9tTW9kdWxlID0ge1xyXG4gICAgcGxheWVyOiBudWxsLFxyXG4gICAgY29tcHV0ZXI6IG51bGwsXHJcblxyXG4gICAgaW5pdEdhbWU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoJ1BsYXllcicpO1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZXIgPSBuZXcgUGxheWVyKCdDb21wdXRlcicsIHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllci5wbGFjZVNoaXAobmV3IFNoaXAoMyksIFswLCAwXSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucGxhY2VTaGlwKG5ldyBTaGlwKDIpLCBbMiwgMl0pO1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZXIucGxhY2VTaGlwKG5ldyBTaGlwKDMpLCBbMCwgMF0pO1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZXIucGxhY2VTaGlwKG5ldyBTaGlwKDIpLCBbMiwgMl0pO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlckJvYXJkKHRoaXMucGxheWVyLCAncGxheWVyLWJvYXJkJyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJCb2FyZCh0aGlzLmNvbXB1dGVyLCAnY29tcHV0ZXItYm9hcmQnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyLWJvYXJkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUF0dGFjay5iaW5kKHRoaXMsIHRoaXMuY29tcHV0ZXIpKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVuZGVyQm9hcmQ6IGZ1bmN0aW9uIChwbGF5ZXIsIGJvYXJkSWQsIGlzQ29tcHV0ZXIgPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYm9hcmRJZCk7XHJcbiAgICAgICAgYm9hcmQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDU7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICByb3dEaXYuY2xhc3NMaXN0LmFkZCgnYm9hcmQtcm93Jyk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA1OyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jZWxsJyk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuY29vcmRpbmF0ZXMgPSBKU09OLnN0cmluZ2lmeShbcm93LCBjb2xdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ29tcHV0ZXIgJiYgcGxheWVyLmdhbWVib2FyZC5zaGlwcy5zb21lKHNoaXAgPT5cclxuICAgICAgICAgICAgICAgICAgICBzaGlwLmNvb3JkaW5hdGVzLnNvbWUoY29vcmQgPT4gY29vcmRbMF0gPT09IHJvdyAmJiBjb29yZFsxXSA9PT0gY29sKVxyXG4gICAgICAgICAgICAgICAgKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJvd0Rpdi5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93RGl2KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZUF0dGFjazogZnVuY3Rpb24gKGNvbXB1dGVyLCBldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gSlNPTi5wYXJzZShldmVudC50YXJnZXQuZGF0YXNldC5jb29yZGluYXRlcyk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29tcHV0ZXIucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgPT09ICdoaXQnKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gJ21pc3MnKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29tcHV0ZXIuYWxsU2hpcHNTdW5rKCkpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1BsYXllciB3aW5zIScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbXB1dGVyVHVybigpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjb21wdXRlclR1cm46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgcm93LCBjb2w7XHJcbiAgICAgICAgbGV0IGF0dGFja1Jlc3VsdDtcclxuXHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KTtcclxuICAgICAgICAgICAgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSk7XHJcbiAgICAgICAgICAgIGF0dGFja1Jlc3VsdCA9IHRoaXMucGxheWVyLnJlY2VpdmVBdHRhY2soW3JvdywgY29sXSk7XHJcbiAgICAgICAgfSB3aGlsZSAoYXR0YWNrUmVzdWx0ID09PSAnYWxyZWFkeS1oaXQnKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXItYm9hcmQgLmJvYXJkLWNlbGxbZGF0YS1jb29yZGluYXRlcz1cIlske3Jvd30sJHtjb2x9XVwiXWApO1xyXG4gICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09ICdoaXQnKSB7XHJcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIuYWxsU2hpcHNTdW5rKCkpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0NvbXB1dGVyIHdpbnMhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9tTW9kdWxlO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/dom.js\n");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\nclass Gameboard {\r\n    constructor() {\r\n        this.ships = [];\r\n        this.missedAttacks = [];\r\n    }\r\n\r\n\r\n    placeShip(ship, coordinates) {\r\n\r\n        for (let placedShip of this.ships) {\r\n            if (placedShip.coordinates && placedShip.coordinates.some(coord => \r\n                coord[0] === coordinates[0] && coord[1] === coordinates[1]\r\n            )) {\r\n                throw new Error('Cannot place ship on occupied coordinates');\r\n            }\r\n        }\r\n\r\n\r\n        ship.coordinates = Array.from({ length: ship.length }, (_, i) => [coordinates[0], coordinates[1] + i]);\r\n        this.ships.push(ship);\r\n    }\r\n\r\n\r\n    receiveAttack(coordinates) {\r\n        for (let ship of this.ships) {\r\n            if (ship.coordinates.some(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1])) {\r\n                ship.hit(); \r\n                return 'hit';\r\n            }\r\n        }\r\n\r\n        this.missedAttacks.push(coordinates); \r\n        return 'miss';\r\n    }\r\n\r\n   \r\n    allShipsSunk() {\r\n        return this.ships.every(ship => ship.isSunk());\r\n    }\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZWJvYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MscUJBQXFCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanM/ZmMzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMubWlzc2VkQXR0YWNrcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwbGFjZVNoaXAoc2hpcCwgY29vcmRpbmF0ZXMpIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcGxhY2VkU2hpcCBvZiB0aGlzLnNoaXBzKSB7XHJcbiAgICAgICAgICAgIGlmIChwbGFjZWRTaGlwLmNvb3JkaW5hdGVzICYmIHBsYWNlZFNoaXAuY29vcmRpbmF0ZXMuc29tZShjb29yZCA9PiBcclxuICAgICAgICAgICAgICAgIGNvb3JkWzBdID09PSBjb29yZGluYXRlc1swXSAmJiBjb29yZFsxXSA9PT0gY29vcmRpbmF0ZXNbMV1cclxuICAgICAgICAgICAgKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcGxhY2Ugc2hpcCBvbiBvY2N1cGllZCBjb29yZGluYXRlcycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgc2hpcC5jb29yZGluYXRlcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHNoaXAubGVuZ3RoIH0sIChfLCBpKSA9PiBbY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzFdICsgaV0pO1xyXG4gICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xyXG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xyXG4gICAgICAgICAgICBpZiAoc2hpcC5jb29yZGluYXRlcy5zb21lKGNvb3JkID0+IGNvb3JkWzBdID09PSBjb29yZGluYXRlc1swXSAmJiBjb29yZFsxXSA9PT0gY29vcmRpbmF0ZXNbMV0pKSB7XHJcbiAgICAgICAgICAgICAgICBzaGlwLmhpdCgpOyBcclxuICAgICAgICAgICAgICAgIHJldHVybiAnaGl0JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5taXNzZWRBdHRhY2tzLnB1c2goY29vcmRpbmF0ZXMpOyBcclxuICAgICAgICByZXR1cm4gJ21pc3MnO1xyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICBhbGxTaGlwc1N1bmsoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoc2hpcCA9PiBzaGlwLmlzU3VuaygpKTtcclxuICAgIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/gameboard.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initGame();\r\n\r\n    document.getElementById('start-game-btn').addEventListener('click', () => {\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initGame();\r\n    });\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBaUM7QUFDakM7QUFDQTtBQUNBLElBQUksK0NBQVM7QUFDYjtBQUNBO0FBQ0EsUUFBUSwrQ0FBUztBQUNqQixLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZG9tTW9kdWxlIGZyb20gJy4vZG9tLmpzJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBkb21Nb2R1bGUuaW5pdEdhbWUoKTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtZ2FtZS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkb21Nb2R1bGUuaW5pdEdhbWUoKTtcclxuICAgIH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\r\n\r\nclass Player {\r\n    constructor(name, isComputer = false) {\r\n        this.name = name; \r\n        this.isComputer = isComputer; \r\n        this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); \r\n    }\r\n\r\n    placeShip(ship, coordinates) {\r\n        this.gameboard.placeShip(ship, coordinates);\r\n    }\r\n\r\n    receiveAttack(coordinates) {\r\n        return this.gameboard.receiveAttack(coordinates);\r\n    }\r\n\r\n    allShipsSunk() {\r\n        return this.gameboard.allShipsSunk();\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxheWVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9DO0FBQ3BDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0RBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzP2E4YTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgaXNDb21wdXRlciA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTsgXHJcbiAgICAgICAgdGhpcy5pc0NvbXB1dGVyID0gaXNDb21wdXRlcjsgXHJcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7IFxyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlU2hpcChzaGlwLCBjb29yZGluYXRlcykge1xyXG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwLCBjb29yZGluYXRlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBhbGxTaGlwc1N1bmsoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/player.js\n");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship{\r\n    constructor(length){\r\n        this.length = length;\r\n        this.hits = 0;\r\n    }\r\n\r\n    hit(){\r\n        this.hits += 1;\r\n    }\r\n\r\n    isSunk(){\r\n        return this.hits >= this.length;\r\n    }\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hpcC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzP2QwMzciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcHtcclxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCl7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBoaXQoKXtcclxuICAgICAgICB0aGlzLmhpdHMgKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpc1N1bmsoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5oaXRzID49IHRoaXMubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ship.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;