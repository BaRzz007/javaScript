#!/usr/bin/node
import { create } from "./blogpost.mjs";
// from "classic_modules.js" import BlogPost;

var forAgainstLet = create(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();
