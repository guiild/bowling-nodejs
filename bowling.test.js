const Bowling = require('./bowling.js');

test('launch 2 balls without spare or strike)', () => {
    const game = new Bowling();
    const gameScores = [2, 4]
    for (score of gameScores) {
        game.newThrow(score);
    }
    expect(game.getCurrentScore()).toBe(6);
});

test('launch 3 balls with a strike', () => {
    const game = new Bowling();
    const gameScores = [10, 3, 6]
    for (score of gameScores) {
        game.newThrow(score);
    }
    expect(game.getCurrentScore()).toBe(28);
});

test('launch 2 balls with 2 strikes', () => {
    const game = new Bowling();
    const gameScores = [10, 10, 4, 2]
    for (score of gameScores) {
        game.newThrow(score);
    }
    expect(game.getCurrentScore()).toBe(46);
});

test('perfect game', () => {
    const game = new Bowling();
    const gameScores = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    for (score of gameScores) {
        game.newThrow(score);
    }
    expect(game.getCurrentScore()).toBe(300);
});

test('launch 4 balls with a spare', () => {
    const game = new Bowling();
    const gameScores = [7, 3, 4, 2]
    for (score of gameScores) {
        game.newThrow(score);
    }
    expect(game.getCurrentScore()).toBe(20);
});

test('full game with spare, stike and final spare', () => {
    const game = new Bowling();
    const gameScores = [2, 4,
        5, 1,
        8, 2,
        3, 1,
        10,
        4, 3,
        1, 0,
        7, 2,
        4, 5,
        5, 5, 6]
    for (score of gameScores) {
        game.newThrow(score);
    }
    expect(game.getCurrentScore()).toBe(88);
});