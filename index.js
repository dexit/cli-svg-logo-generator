const fs = require('fs');
//const chalk = import('chalk');


const {Shape, Triangle, Circle, Square} = require("./lib/shape");

const inquirer = require('inquirer');
// Importing module

  


const questions =[
    {
      name: 'text',
      message: 'Please enter a text with 7 or fewer characters:',
      validate:  (input) => {
        if (input.length <= 7) {
          return true;
        } else {
          
          // inquire return message on error
          return 'ERROR: Please enter a text with 7 or fewer characters';
         // return false;
        }
      },
      
    },
    {
      name: 'textColor',
      message: 'Enter text color (e.g. red or #FF0000):',
      validate: (input) => isValidColor(input),
    //  transformer: (input) => chalk(input)(input),
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Please choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      name: 'shapeColor',
      message: 'Enter Shape Background color (e.g. red or #FF0000):',
      validate: (input) => isValidColor(input),
    },
  ];
  function isValidColor(color) {
    const hexRegex = '';
    if (color.length > 1) {
      return true;
    }else{
             return false;
      }
  }

function runme(){   
    inquirer.prompt(questions).then((answers) => {
        const { text, textColor, shape, shapeColor } = answers;
      
        let shapeObj;
        switch (shape.toLowerCase()) {
          case 'circle':
            shapeObj = new Circle(shapeColor, shapeColor);
            break;
          case 'triangle':
            shapeObj = new Triangle(shapeColor, shapeColor);
            break;
          case 'square':
            shapeObj = new Square(shapeColor, shapeColor);
            break;
          default:
            throw new Error('Invalid shape');
        }
      
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="300" height="200" style="">
                        ${shapeObj.render()}
                        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
                      </svg>`;
      
        fs.writeFile('./examples/logo.svg', svg, (err) => {
          if (err) throw err;
          
          console.log
         
           ('Generated logo.svg');
        });
      }).catch((err) => {
        console.error(error(err));

    });


  }

  runme();