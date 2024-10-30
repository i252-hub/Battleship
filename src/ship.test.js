const Ship = require('./ship'); 

test('creates a ship with the correct length', () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
    expect(ship.hits).toBe(0);
});

test('increments hits when hit() is called', () => {
    const ship = new Ship(3);
    ship.hit();
    expect(ship.hits).toBe(1);
    ship.hit();
    expect(ship.hits).toBe(2);
});

test('returns false for isSunk when hits are less than length', () => {
    const ship = new Ship(3);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
});

test('returns true for isSunk when hits equal length', () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});
