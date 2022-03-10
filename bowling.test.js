const Bowling = require('./bowling.js');

test('launch 2 balls without spare or strike)', () => {
    const game = new Bowling();
    const gameScores = [2, 4]
    for (score of gameScores) {
        game.newThrow(score);
    }
    expect(game.getCurrentScore()).toBe(6);
});
