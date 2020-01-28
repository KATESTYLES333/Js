function squareArea(A){
  let r = 2 * A /Math.PI;
  return Number(Math.pow(r, 2).toFixed(2));
}

function correctPolishLetters (string) {
  string res = String.replace('ą', 'a')
  .replace("ć", "c")
  return res;
}

console.log("Jćdrze");
console.log(squareArea(2));