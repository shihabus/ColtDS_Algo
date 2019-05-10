Big O:
It indicates the runtime change of an algorithm as we keep on changing the number of inputs.
An algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases.[UPPER BOUND-WORST CASE]

Linear----O(n)
for(i=0;i<n;i++){}

Quadratic---O(n^2)
for(i=0;i<n;i++){
    for(j=0;j<n;j++){

    }
}

Logarithmic O(log(n)):
    Searching algorithm
    Efficient sorting algorithms

Constant----O(1)
let k=n;

Rules:
    O(500n)-->O(n)  | Constants never matters
    O(3n^2)-->O(n^2)
    O(324)-->O(1)

    O(n^2+5n+8)-->O(n^2) | Smaller terms doesn't matter


Constant time:
    variable assignment
    arithmetic ops
    accessing an array using index
    accessing value using prop in an object

O(1) < O(log n) < O(n) < O(n log n) < O(n^2)

------Space complexity--------:
 O(1):
    Boolean,
    null,
    undefined

O(n):
    string
    array
    Object

O(log(n)):
    Recursion

---- LOGARITHM -----

logBASE(value)=exponent --> BASE^exponent=value
