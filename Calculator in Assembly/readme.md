# Calculator in EMU8086 using Assembly

> Supports various arithmetic operations with fluid functionality

## Quick Start Guide

``` bash
;symbol     operation           syntax

;+          addition            + [operand]   (a+b)
;-          subtraction         - [operand]   (a-b)
;*          multiplication      * [operand]   (a*b)
;/          division            / [operand]   (a/b)
;^          exponent            ^ [operand]   (a^b)
;%          percent             % [operand]   (b% of a)
;!          factorial           !             (a!)
;#          square root         #             (sqrt(a))

;N/n        new numeral         N or n
;E/e        exit program        E or e
```

## Specifications
The program has 3 total parts and contains 12 different segments. 8 of 12
segments are operation segments:
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Exponent
6. Factorial
7. Square-root
8. Percentage
The result after each operation is stored in a variable, which allows the 
program to reuse the result for a new operation

### Additional Notes
The program is kept simple and straightforward for increased efficiency and 
faster run time. Method of operation performance is rigid and will not break 
the program until a technical limit is exceeded by the emulator

### Author
ProgradeX

### Contributor(s)
Hhumayune

### Iteration
1.0
