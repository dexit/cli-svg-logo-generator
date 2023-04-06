class Shape {
  constructor(type, bgColor = "#FFFFFF", shapeColor = "#000000") {
    this.type = type;
    this.bgColor = bgColor;
    this.shapeColor = shapeColor;
  }

  render() {
    return `<rect fill="${this.bgColor}" x="0" y="0" width="300" height="200"/>\n`;
  }
}

class Circle extends Shape {
  constructor(bgColor = "#FFFFFF", shapeColor = "#000000") {
    super("circle", bgColor, shapeColor);
  }

  render() {
    return `<circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />\n`;
  }
}

class Square extends Shape {
  constructor(bgColor = "#FFFFFF", shapeColor = "#000000") {
    super("square", bgColor, shapeColor);
  }

  render() {
    return `<rect fill="${this.shapeColor}" x="75" y="50" width="150" height="100" />\n`;
  }
}

class Triangle extends Shape {
  constructor(bgColor = "#FFFFFF", shapeColor = "#000000") {
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