#!/usr/bin/env node
"use strict"
const closure = require("./closure");
//import { range } from "./closure.js";

console.log(closure.range(3, 8));
var second = closure.range(7);
console.log(second(10));
