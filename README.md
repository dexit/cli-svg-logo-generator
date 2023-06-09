# CLI SVG Logo Generator
  [![License: GPL](https://img.shields.io/badge/License-GPL-green.svg)](https://opensource.org/licenses/GPL)

## Description
This code generates an SVG logo with customizable text & shape properties. It uses 'inquirer' module to prompt user input, 'fs' for file operations, & a custom shape module. User answers are used to create an SVG string that's written to a file.

## Table of Contents
- [CLI SVG LOGO GENERATOR](#cli-svg-logo-generator)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Walkthrough](#walkthrough)
  - [Screenshots](#screenshots)
  - [Example](#example)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)


## Installation

1. Clone the GitHub repository:
``` git clone git@github.com:dexit/cli-svg-logo-generator.git ```
2. Navigate to the cloned directory.
3. Install dependencies:
``` npm install ```

## Usage

Run by executing via node :
``` node index.js ``` or ``` npm start ```


## Walkthrough



https://user-images.githubusercontent.com/6205151/231274288-1b6be58d-c3d1-4cf8-ab63-e58aa0051863.mp4



## Screenshots
![image](https://user-images.githubusercontent.com/6205151/230527319-dadc761a-c4ee-475a-8ee0-e7322f9e5d9b.png)

## Example
![image](https://user-images.githubusercontent.com/6205151/230527406-04fab2a8-a308-4dea-a583-7f52c73c285e.png)


## Tests
![image](https://user-images.githubusercontent.com/6205151/230526863-c6454631-52d3-4e5e-b94c-a74dd6a5d506.png)

* The script tests shapes module/script (Shape, Circle, Square, Triangle) using Jest.
* It checks if instances of each shape are created correctly.
* It verifies if the render() method of each shape generates the expected SVG output with the correct attributes.

Please run the tests by:
``` npm test ```

## Licence
  [![License: GPL](https://img.shields.io/badge/License-GPL-green.svg)](https://opensource.org/licenses/GPL)
  \
Under a GPL License (or just GPL), a particular user can freely use, modify, or redistribute software without any restrictions. A popular example of software that uses GPL is WordPress, meaning anyone can use, modify, or extend the source code as desired. In the context of the WordPress project, GPL is equal to the software’s bill of rights.

- It grants open-source permissions for users including:

- The right to download and run the software freely

- The right to make changes to the software as desired

- The right to redistribute copies of the software

- The right to modify and distribute copies of new versions of the software

GPL achieves its goals by using the concept of copyleft. An obvious spin on copyright, copyleft uses copyright laws to enforce the open-source status of software. By copyrighting freedom into a software license, developers can ensure none of their software becomes proprietary when it’s modified or extended by another user.
  
## Questions
  
  If you have any questions, please contact me at dexit@dyc.lv. You can also check out my GitHub profile at <https://github.com/dExIT>.
