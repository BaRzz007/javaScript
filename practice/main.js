#!/usr/bin/env node
"use strict"
import { range } from "./closure.js";

console.log(range(3, 8));
var second = range(7);
console.log(second(10));
