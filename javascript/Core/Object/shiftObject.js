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

// Alternative es6 solution using pure string keys | Both do the exact same task, just that the 2nd runs on a single line
// (Explained below) replace !<array>.includes($1) with <array>.indexOf($1) === -1
// 1) https://caniuse.com/#feat=array-includes
// 2) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#Browser_compatibility

/**
 * 
 * @param {Object<string, number>} s 
 * @param  {...string} _k 
 */
let shiftObj = (source, ...props) => {
    let copy = {};
    for (const key in source) {
        if(!props.includes(key)) {
            copy[key] = source[key];
        }
    }
    return copy;
}

let shiftObj = (s, ..._k) => Object.entries(s).filter((v) => !_k.includes(v[0])).reduce((p, c) => (p[c[0]] = c[1], p), {});

// Test
shiftObj({id: Math.random() * Number.MAX_SAFE_INTEGER, propA: Math.random(), propB: Math.random()}, "propA", "propB");
