function bouncer(array){
  let newArray = [];
  
  for(let i = 0; i<array.length; i++){
    let falsy = Boolean(array[i]);
    if(falsy == false){
      continue;
    }    
    newArray.push(array[i]);
  }
  return newArray;
} 

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));
console.log(bouncer([]));