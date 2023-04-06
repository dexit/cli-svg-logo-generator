const inquirer = import('inquirer');
const chalk = import('chalk');
const chalkPipe = import('inquirer-chalk-pipe');
const fs = import('fs');

const Shapes = require('./lib/shape');
const questions = [
    {
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: function (value) {
        return value.length >= 7 ? true : 'Please enter up to 7 characters.';
      },
    },
    {
      name: 'textColor',
      message: 'Enter text color (e.g. red or #FF0000):',
      validate: isValidColor,
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Please choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      name: 'shapeColor',
      message: 'Enter shape color (e.g. blue or #0000FF):',
      validate: isValidColor,
    },
  ];
  function isValidColor(color) {
    const hexRegex = '/^#([A-Fa-f0-9]{3,6})$/';
    if (color.match(hexRegex) || ['black', 'white', 'red', 'green', 'blue', 'yellow', 'pink', 'purple'].includes(color.toLowerCase())) {
      return true;
    }  try {
        return !!chalk(color);
      } catch (error) {
        return false;
      }
  }

   
    inquirer.prompt(questions).then((answers) => {
        const { text, textColor, shape, shapeColor } = answers;
      
        let shapeObj;
        switch (shape.toLowerCase()) {
          case 'circle':
            shapeObj = new Circle(shapeColor);
            break;
          case 'triangle':
            shapeObj = new Triangle(shapeColor);
            break;
          case 'square':
            shapeObj = new Square(shapeColor);
            break;
          default:
            throw new Error('Invalid shape');
        }
      
        const svg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        ${shapeObj.render()}
                        <text x="50" y="60" font-size="20" text-anchor="middle" fill="${textColor}">${text}</text>
                      </svg>`;
      
        fs.writeFile('logo.svg', svg, (err) => {
          if (err) throw err;
          
          console.log(
          chalk.green('Generated logo.svg'));
        });
      }).catch((err) => {
        console.error(chalk.red(err));

    });


