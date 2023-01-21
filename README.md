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
## Functions

## How we organize in JS

### Classes
A class is a definition of a type of custom data structure that include both data and behaviors hat operate on that data. A class defines how such a data structure works but is not concrete value in itself.
To get a concrete value, a class must be *instantiated* (with the `new` keyword) one or more times.

- [Class definition and instantiation](02_class.js) - *16/01/2023*
#### class inheritance
- polymorphism -

### Modules
Modules pattern in JS has essentially same goal as the class pattern, which groups data and behavior together into logical units. Also like classes, modules can "include" or "access" the data and behaviors of other modules, for cooperation's sake.

#### classic modules

#### es modules


## Resources
[You-don't-know-js-yet](https://github.com/getify/You-Dont-Know-JS) - getify
