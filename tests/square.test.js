const Square = require("../lib/square")

describe('Square', () => {
  it('Should produce Square SVG File', () => {
    const Squ = new Square("SVG", "Black", "Black", "Square");

    expect(Squ.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="75" y="35" width="150" height="150" fill="Black" />

        <text x="150" y="130" font-size="60" text-anchor="middle" fill="Black">SVG</text>

        </svg>`);
  });
});