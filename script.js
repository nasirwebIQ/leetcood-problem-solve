
let n = 16
var isPowerOfTwo = function(n) {
    if(n > 1){
      return isPowerOfTwo(n/2)
    }
    if(n == 1){
        return true;

    }
    if(n < 1){
        return false
    }
   
};
isPowerOfTwo(n)