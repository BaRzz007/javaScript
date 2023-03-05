# Let's talk LEXICAL SCOPING

## What is a scope?
A scope is simply a block of code enclosed in `{ .. }`. The outer scope is called the global scope; all other scopes are contained within this scope. Blocks like functiions and loops create new scopes. Scoped can be nested.
### Lexical scoping
In simple terms, lexical scoping is the accessibility of variables based on the block or scope in which they are declared.
When variables declaration is encountered during compilation (initial parsing of the code by the JITs for instance), it is added to the current scope. When a variable is encountered without a declaration, the engine or compiler checks the outer scope for the declaration of the variable. If there is no more outer scope a `ReferenceError` is thrown.
