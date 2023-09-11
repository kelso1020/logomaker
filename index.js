const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require("./lib/circle")
const Square = require("./lib/square")
const Triangle = require("./lib/triangle")

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Text',
      message: 'Please enter text (Max Length is 3 characters)',
    },
    {
      type: 'input',
      name: 'textColour',
      message: `Please enter text color keyword or a hexadecimal number for the logo's text color`,
    },
    {
      type: 'list',
      name: 'shapeType',
      message: `Please select logo shape`,
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColour',
      message: `Please enter a color keyword or a hexadecimal number for the logo's background (shape) color`,
    },
  ])
  .then((data) => {

    if (data.shapeType == "Circle") {
        var output = new Circle(data.Text, data.textColour, data.shapeColour, data.shapeType)
    }
    if (data.shapeType == "Square") {
        var output = new Square(data.Text, data.textColour, data.shapeColour, data.shapeType)
    }
    if (data.shapeType == "Triangle") {
        var output = new Triangle(data.Text, data.textColour, data.shapeColour, data.shapeType)
    }
  
    fs.writeFile("Logo.svg", output.render(), (err) => err ? console.log(err) : console.log('Generated logo.svg'));

  })
  .catch((err) => console.error(err));