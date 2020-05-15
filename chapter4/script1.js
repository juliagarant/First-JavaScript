var theBiggest = function(a, b){
  var result;
  //Ternary operator - if true ? do this : else do this
  a>b ? result = ["a", a] : result = ["b", b];
  return result;
}
console.log(theBiggest(7/9, 13/25));
