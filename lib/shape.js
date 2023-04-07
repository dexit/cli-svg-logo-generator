class Shape {
  constructor(type, bgColor, shapeColor) {
    this.type = type;
    this.bgColor = bgColor;
    this.shapeColor = shapeColor;
  }

  render() {
    return `  <rect x="0" y="0" width="300" height="200" stroke="red" stroke-width="3px" fill="${this.shapeColor}"/>\n`;
  }
}

class Circle extends Shape {
  constructor(bgColor, shapeColor) {
    super("circle", bgColor, shapeColor);
  }

  render() {
    return `<circle  cx="150" cy="100" r="99.5" fill="${this.shapeColor}" stroke-width="2px" stroke="${this.shapeColor}"/>\n`;
  }
}

class Square extends Shape {
  constructor(bgColor, shapeColor) {
    super("square", bgColor, shapeColor);
  }

  render() {
    return `<rect  x="50" y="0" fill="${this.shapeColor}" stroke="${this.shapeColor}" stroke-width="2px" width="200" height="200" />\n`;
  }
}

class Triangle extends Shape {
  constructor(bgColor, shapeColor ) {
    super("triangle", bgColor, shapeColor);
  }

  render() {
    return `<polygon points="150,50 75,150 225,150" fill="${this.shapeColor}" />\n`;
  }
}

module.exports = {
  Shape,
  Circle,
  Square,
  Triangle
};