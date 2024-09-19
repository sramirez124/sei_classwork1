console.log('Functions');
// Verbs of our code

// Three ways to define a function

//1. Function Declaration
function sayHello() {
  console.log('hello world!');
}

//2 Function Expression
const sayHi = function () {
  console.log('hi!');
};

//3. Arrow Function ES6
const sayGoodMorning = () => {
  console.log('Good morning!');
  return 'Good morning!';
};

// implicit returning whatever is behind the arrow (=>)
const sayGoodnight = () => 'Goodnight!';

//========================================================
/**
 *
 * Hoisting explained
 *
 */
// Whichever scope the fnDeclaration was define in, is the scope that the functit to theon will get hois top of.

fnDeclaration(); // thank you function declarations :)
// fnExpression(); // TypeError: fnExpression is not a function

// this function gets hoisted
function fnDeclaration() {
  console.log("I'm coming from a function declaration.");
}

// does NOT get hoisted
const fnExpression = function () {
  console.log("I'm coming from a function expression.");
};
// console.log(fnExpression);
// fnExpression(); // works just fine, because we are referenceing after it's been defined.
//========================================================

/**
 * Calling Functions
 */

//Add

const add = (a, b) => {
  return a + b;
};

const sum = add(25, 100); // returns 125

const sum2 = add(75, 25); // returns 100

// Exercise

function areBothEven(n1, n2) {
  return !(n1 % 2) && !(n2 % 2);
}

console.log(areBothEven(8, 6));

// Practice Activity 1: Write a Function Declaration
function computeArea(width, height) {
  let area = width * height;
  let s = `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`;
  return s;
}

console.log(computeArea(5, 10));

// Extra
//========================================================
const squares = [
  {
    width: 5,
    height: 5,
  },
  {
    width: 5,
    height: 20,
  },
  {
    width: 10,
    height: 5,
  },
];
const squareAreas = [];

for (let i = 0; i < squares.length; i++) {
  const area = computeArea(squares[i].width, squares[i].height);
  squareAreas.push(area);
}
// console.log(squareAreas);
//========================================================

// Practice Activity 2: Write a Function Expression

const planetHasWater = function (planet) {
  // edge case handling
  if (typeof planet !== 'string') {
    return 'Param not a string, try again';
  }

  const lowercasePlanet = planet.toLowerCase();

  return lowercasePlanet === 'earth' || lowercasePlanet === 'mars';
};

console.log(planetHasWater(9));

console.log(planetHasWater('EaRtH'));

// Parameters and Arguments
// arguments give the parameter their value

function foo(a, b, c) {
  console.log(a, b, c);
}

foo(18, 20);

// endless arguments
function getDevObject(name) {
  let skills = [];
  for (let i = 1; i < arguments.length; i++) {
    skills.push(arguments[i]);
  }
  return {
    devName: name,
    jobSkills: skills,
  };
}

const devObject = getDevObject(
  'Maria',
  'HTML',
  'CSS',
  'JS',
  'Bootstrap',
  'React',
  'Redux',
  'GraphQL'
);

// console.log(devObject);

function getDevObject2(name, ...skills) {
  return {
    devName: name,
    jobSkills: skills,
  };
}

const devObject2 = getDevObject2(
  'Maria',
  'HTML',
  'CSS',
  'JS',
  'Bootstrap',
  'React',
  'Redux',
  'GraphQL'
);

console.log(devObject2);

// Default Params

const bike = {
  color: 'red',
  type: 'offroad',
  brand: 'Huffy',
};

function setColor(bicycle, color) {
  bicycle.color = color || 'purple';

  console.log(bicycle);
}

// setColor(bike, 'green');

function setColorES6(bicycle, color = 'purple') {
  bicycle.color = color;

  console.log(bicycle);
}

setColorES6(bike, 'yellow');

/**
 * 
 *  Functions as Arguments
 * 
 */

function foo (){

}

foo