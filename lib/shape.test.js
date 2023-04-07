const { Shape, Circle, Square, Triangle } = require('./shape');

describe('Shape', () => {
  test('should be instance of Shape', () => {
    const shape = new Shape('rectangle', 'white', 'blue');
    expect(shape).toBeInstanceOf(Shape);
  });

  test('render() should render SVG rectangle with the correct attributes', () => {
    const shape = new Shape('rectangle', 'white', 'blue');
    const svg = shape.render();
    expect(svg).toEqual('  <rect x="0" y="0" width="300" height="200" stroke="red" stroke-width="3px" fill="blue"/>\n');
  });
});

describe('Circle', () => {
  test('should create an instance of Circle', () => {
    const circle = new Circle('white', 'green');
    expect(circle).toBeInstanceOf(Circle);
  });

  test('render() should render SVG circle with the correct attributes - THis is default', () => {
    const circle = new Circle('white', 'green');
    const svg = circle.render();
    expect(svg).toEqual('<circle  cx="150" cy="100" r="99.5" fill="green" stroke-width="2px" stroke="green"/>\n');
  });
});

describe('Square', () => {
  test('should create an instance of Square', () => {
    const square = new Square('white', 'red');
    expect(square).toBeInstanceOf(Square);
  });

  test('render() should render SVG square with the correct attributes', () => {
    const square = new Square('white', 'red');
    const svg = square.render();
    expect(svg).toEqual('<rect  x="50" y="0" fill="red" stroke="red" stroke-width="2px" width="200" height="200" />\n');
  });
});

describe('Triangle', () => {
  test('should create an instance of Triangle', () => {
    const triangle = new Triangle('white', 'yellow');
    expect(triangle).toBeInstanceOf(Triangle);
  });

  test('render() should render SVG triangle with the correct attributes', () => {
    const triangle = new Triangle('white', 'yellow');
    const svg = triangle.render();
    expect(svg).toEqual('<polygon points="150,50 75,150 225,150" fill="yellow" />\n');
  });
});