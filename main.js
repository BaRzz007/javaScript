#!/usr/bin/node
import { create as newBlogPost } from "blogpost.js";
// from "classic_modules.js" import BlogPost;

var forAgainstLet = newBlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();
