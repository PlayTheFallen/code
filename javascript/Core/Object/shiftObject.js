// es6 | Single index target
/**
 * @param {Object<string, *>} s The source object
 * @param {number} i The index to target
 * @returns {Object<string, *>} A copy of the source object without the target index
 */
let shiftObj = (s, _i) => Object.assign({}, Object.values(s).filter((v, i) => i != _i));

// test
Array(4).fill("").forEach((_, i) => console.log(shiftObj({0: '0', 1: '1', 2: '2', 3: '3'}, i)));

// es6 | Multi index target
/**
 * @param {Object<string, *>} s The source object
 * @param {number[]} i The index(es) to target
 * @returns {Object<string, *>} A copy of the source object without the target index(es)
 */
let shiftObj = (s, _i) => Object.assign({}, Object.values(s).filter((v, i) => !_i.includes(i)));
let shiftObj = (s, ..._i) => Object.assign({}, Object.values(s).filter((v, i) => !_i.includes(i)));

// test
shiftObj({0: '0', 1: '1', 2: '2', 3: '3'}, [0, 2])
shiftObj({0: '0', 1: '1', 2: '2', 3: '3'}, [1, 3])

// Notes:
// Result of test command: https://did-you-get.ratelimited.today/8dbd4d.png
// Challenged by @Sven65 alongside @Willard21

/** Explaination
 * 
 * Where 's' is the source object and where '_i' is either the target index or indexes (depending on what scenario you are using),
 * filter the values of 's' to find '_i' or an element of '_i' and check for Boolean negation.
 * Therefore removing the target element(s).
 */
