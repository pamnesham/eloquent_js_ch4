
// This builds a sum function from scratch
function getRange(start, end, step){
  numbers = [];
  while (start < end +1) {
    numbers.push(start);
    if (step == undefined) {
      step = 1;
    }
    start += step;
  }
  return(numbers);
}

console.log(getRange(1,10,2));


// This builds a sum function from scratch
function getSum(start, end){
  count = 0;
  for (; start < end +1; start++) {
    count += start;

  }
  return(count);
}

console.log(getSum(1,10));
