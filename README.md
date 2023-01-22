From *zero* to *hero* in **JavaScript**
----------------------------------------

- [Hello world!](helloWorld.js) - My first js code *16/01/23*

## Each file is a program in JS
The reason this matters is primarily around error handling. Since JS treats files as programs, one file may fail (during parse/compile or execution) and that will not necessarily prevent the next file from being processed. Obviously, if your application depends on five .js files, and one of them fails, the overall application will probably only partially operate, at best. It's important to ensure that each file works properly, and that to whatever extent possible, they handle failure in other files as gracefully as possible.

## Values
The most fundamental unit of information in a program is a value.
Values are data.
Values comes in two forms in JS: **primitive** and **object**.

```js
console.log("My name is Ezekiel")
```

The value `"My name is Ezekiel"` is a primitive string literal.

- [Use of quotes and back-ticks](quotesAndBacktick.js) - Illustrates the behavioral differences in the use of double-quote, single-quote, and back-ticks *16/01/23*

```js
console.log(`My name is ${ firstname }`);
```

Assuming the above code has already defined a variable `firstname` with the string `"Ezekiel"`, the \`-delimited string then resolve the variable expression (indicated with `${ ... }`) to its current value. It is called **interpolation**.

Js programs often also contains other primitive literal values such as boolean and numbers.

```js
while (false) {
    console.log(3.141592);
}
```
In addition to strings, booleans and numbers, two other primitive values in JS are `null` and `undefined`. While there are differences between them, for the most parts the both serve the purpose of expressing *emptiness* or absence of value.
However, it's safest and best to use `undefined` as the single empty value.

```js
while (value != undefined) {
    console.log("Still got something!");
}
```
The final primitive value to be aware of is a symbol, which is a special-purpose value that behaves as a hidden unguessable value. Symbols are almost exclusively used as special keys on objects:

```js
hitchhickersGuide[ Symbol("meaning of life") ];
// 42
```

### Arrays and Objects
Besides primitive values the other value types in JS is an **Object** values.

**Array**
Arrays are a special type of object that's comprised of an ordered and numerically indexed list of data.
Example - [Array](array.js) *21/01/2023*
JS arrays can hold any value type, either primitive or object (including othe arrays).

**Object**
Objects are an ordered collection of keyed values (like dictionaries in python). In other words, elements are accessed by a string locator name rather than numeric index as in array.
Example - [object](object.js) *21/01/2023*

### Value type determination
For distinguishing values, the `typeof` operator tells you the built in type, if primitive or object:

```js
typeof 42;			// "number"
typeof "abc";			// "string"
typeof true;			// "boolean"
typeof undefined;		// "undefined"
typeof null;			// "object"
typeof { "a": 1 };		// "object"
typeof [1, 2, 3];		// "object"
typeof function hello() {};	//"function"
```

`typeof null` unfortunately returns `"object"`, that is why the use of `undefined` to express emptiness of value should be prefered.
Converting from one value to another in JS is known as **coersion**.

### Declaring and using variables
In JS, values can either appear as literals or be stored in variables. Think of variables as names given to values.
Variables have to be declared to be used. The various syntax forms for declaring variables are highlighted below:
- `var` statement
```js
var name = "Ezekiel";
var age;
```
- `let` statement
```js
let name = "Ezekiel";
let age;
```
The major difference with these two syntax is that `let` only allows for a limited access to the declared variable than the `var`, this is called **block scoping**.
Example - [var and let](variableScope.js) *22/01/23*

- `const` statement
`const` is like `let` but the limitation is that it must be initialized at declaration and cannot be re-assigned a different value later.
```js
const myBirthday = true;
let age = 39;

if (myBirthday) {
    age = age + 1;	// ok
    myBirthday = false	// error
}
```

Besides `var`, `let` and `const` there are other syntatical forms that declare identifiers (variables) in various scopes.
consider:
```js
function hello(myName) {
    console.log(`Hello ${ myName }.`);
}

hello("Ezekiel");
//Hello Ezekiel.
```
The `hello` identifier is created in the outer scope and is automatically associated with the function, the `myName` parameter is however accessible only inside and throughout the function in which scope it was defined.

Finally, the `catch` clause
```js
try {
    someError();
}
catch (err) {
    console.log(err);
}
```
The `err` is a block-scoped variable only accessible inside the `catch` clause.

### Functions
A Function also known as procedure is a collection of statement that can be invoked one or more times, may be given some inputs and may return an output.
Example - [functions](function.js) *22/01/23*
Functions can recieve parameter input as show in the example file above. Funtions can also return output using the `return` keyword. A function can only return a single value, but if you have multiple values, you can wrap them up in an object or a collection object like an array.
It is important to note that in JS, functions are values and can be assigned and passed around.
Since functions are values, they can be assigned as properties on objects:
```js
var whatToSay = {

    greeting() {
        console.log("Hello!");
    },

    question() {
        console.log("What is your name");
    },

    answer() {
        console.log("My name is Ezekiel");
    }
};

whatToSay.greeting();
// Hello!
```

### Comparison
In sum, the `===` operator does not allow coersive comparison. ***Coersion*** being the conversion of one type to its equivalent value in another type. The `===` operator however, is designed to lie in two cases of special values `NaN` and `-0`.
Try this:
```js
NaN === NaN;	// false
0 === -0;	// true
```
Use the `Number.isNaN(..)` utility for a non-lying `NaN` check and `Object.is(..)` utility for `-0` comparisons.
With Object values...
JS does not define `===` as *structural equality* for object values, instead it uses *identity equality* for object values. What does this mean? A comparison that is content aware is generally refered to as *"structural equality"*, on the other hand, object values in JS are assigned and passed by reference-copy (opposite of value) thus the comparison is by reference equality. Consider:
```js
[ 1, 2, 3 ] === [ 1, 2, 3 ];	// false
{ "a": 42 } === {"a": 42 };	// false
(x => x * 2) === (x => x * 2);	// false

var x = [ 1, 2, 3 ];

var y = x;
y === x			// true
y === [ 1, 2, 3 ]	// false
x === [1, 2, 3 ]	// false
```
In this snippet, `y === x` is true because both variables hold a reference to the same initial array. But the `=== [1,2,3]` comparisons both fail because `y` and `x`, respectively, are being compared to new *different* arrays `[1,2,3]`. The array structure and contents don't matter in this comparison, only the **reference identity**.
If you want structural comparison, you'll have to do some manual work.

#### Coersive comparison
The `==` operator and the `===` operator only differ in the way they handle comparison between values of different types. While `===` does not allow for type conversion `==` does, consequently, a comparison between `42` and `"42"` (`42 == "42"`) will yield `true`. Comparison between primitive numeric types is more preferred by the `==` operator so the `"42"` is converted to `42` before being compared.
Coersion also happens with relational operators `<`, `>`, `<=`, `>=`. Just like `==`, these operators will perform as if they're "strict" if the types being relationally compared already match, but they'll allow coercion first (generally, to numbers) if the types differ.
Another weird case...
```js
var x = "10";
var y = "9";

x < y	// true
```
Sadly true. The wiser approach is not to avoid coercive comparisons, but to embrace and learn their ins and outs.

## How we organize in JS
The two major pattern for organizing code in JS are classes and modules.

### Classes
A class is a definition of a type of custom data structure that include both data and behaviors hat operate on that data. A class defines how such a data structure works but is not concrete value in itself.
To get a concrete value, a class must be *instantiated* (with the `new` keyword) one or more times.
Example - [Class definition and instantiation](class.js) - *16/01/2023*

#### class inheritance
Inheritance is another aspect in class-oriented design.
Example - [Inheritance](inheritance.js) *22/01/23*
**polymorphism** is the fact that two methods can co-exist and have the same name in the parent and child class.

### Modules
Modules pattern in JS has essentially same goal as the class pattern, which groups data and behavior together into logical units. Also like classes, modules can "include" or "access" the data and behaviors of other modules, for cooperation's sake.

#### classic modules
The key hallmarks of a *classic module* are an outer function (that runs at least once), which returns an "instance" of the module with one or more functions exposed that can operate on the module instance's internal (hidden) data.
Example - [classic modules](classic_modules.js) *22/01/23*

#### ES modules
The ES module (ESM) is basically meant to serve the same purpose as the classic module, however the implementation does differ significantly.
First, there is no wrapping function to define a module. The wrapping context is a file. ESMs are file-based, one file, one module.
Secondly, you don't interact with a module's "API" explicitly, but rather use the `export` keyword to add a variable or method to its public API definition. Anything defined but not exported is hidden.
Third, you don't "instantiate" an ES module, you just `import` it to use it's single instance.

## Resources
[You-don't-know-js-yet](https://github.com/getify/You-Dont-Know-JS) - getify
