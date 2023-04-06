const { Shapes, TextBox, Circle, Triangle, Square } = require('./shapes');

describe('Shapes', () => {
  test('appDraw() should render SVG with the correct shape, text, and colors', () => {
    const shapes = new Shapes('WORLD', '24', '#000', 'red', 'Triangle');
    const svg = shapes.appDraw(Triangle);
    expect(svg).toContain('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
    expect(svg).toContain('<text x="100" y="100" font-size="24" fill="#000">WORLD</text>');
  });
});

describe('TextBox', () => {
  test('render() should render SVG text with the correct text, text size, and text color', () => {
    const textBox = new TextBox('WORLD', '24', '#000');
    const svg = textBox.render();
    expect(svg).toEqual('<text x="100" y="100" font-size="24" fill="#000">WORLD</text>');
  });
});

describe('Circle', () => {
  test('render() should render SVG circle with the correct radius, stroke color, fill color, and stroke width', () => {
    const circle = new Circle('HELLO', '20', '#FFF', 'green', 'Circle', '2', 'red');
    const svg = circle.render();
    expect(svg).toEqual('<circle cx="100" cy="100" r="100" stroke="red" stroke-width="2" fill="green"/>');
  });
});

describe('Triangle', () => {
  test('render() should render SVG triangle with the correct points, stroke color, fill color, and stroke width', () => {
    const triangle = new Triangle('WORLD', '18', '#000', 'blue', 'Triangle', '2', 'yellow');
    const svg = triangle.render();
    expect(svg).toEqual('<polygon points="100,100 100,200 200,200" stroke="yellow" stroke-width="2" fill="blue"/>');
  });
});

describe('Square', () => {
  test('render() should render SVG rectangle with the correct width, height, stroke color, fill color, and stroke width', () => {
    const square = new Square('HELLO', '16', '#FFF', 'purple', 'Square', '3', '#888');
    const svg = square.render();
    expect(svg).toEqual('<rect width="200" height="200" stroke="#888" stroke-width="3" fill="purple"/>');
  });
});