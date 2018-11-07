if(!Array.prototype.swap) {
  /** https://jsperf.com/swap-array-vs-variable/38 (in order of ops/sec, fastest first)
   * @param {number} a
   * @param {number} b
   */
  Array.prototype.swap = function(a, b) {
    // bit (test 3)
    a = this[a], b = this[b];
    
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    // variable (test 2)
    var x = this[a], y = this[b]
    this[a] = y;
    this[b] = x;
    
    // array (1 - test 1)
    this[b] = [this[a], this[a] = this[b]][0];
    
    // array (2 - test 4)
    [this[a], this[b]] = [this[b], this[a]]
        
    return this;
  }
}
