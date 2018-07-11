// reverse an array by creating a new array
function reverseArray(a){
  var newArray = [];
  var aLen = a.length; //store length of array
  for (var i = 0; i < aLen; i++) {
    var end = a.pop(); // take end value
    newArray.push(end); // give end value to new array
  }
  return(newArray);
}


// reverse an array by modifying the existing array
function reverseArrayInPlace(a){
  var half = Math.floor(a.length/2);//swap until halfway
  for (var i = 0; i < a.length-half; i++) {
    replaceMe = a[i]; // hold onto value that will be overwritten first
    var replacer = a[a.length-1-i]; //get the last/2nd to last/3rd to last/etc
    //swap:
    a[i] = replacer;
    a[a.length-1-i] = replaceMe;
  }
  return(a);
}



someArray = [8888,12,'cat','8',24,30];
console.log(reverseArrayInPlace(someArray));
