const arr = [123,232,43,34,125];

function bubbleSort(arr){
  let sorted = false;
  let temp;
  while(!sorted){
    sorted = true;
    for(let i = 0; i < arr.length - 1; i++){
      if(arr[i] > arr[i+1]){
        temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
        sorted = false;
      }
    }
  }
  return arr;
}

//console.log(bubbleSort(arr));


String.prototype.substrings = function(){
  const res = [];
  
  for(let i =0; i < this.length; i++){
    for(let j=i; j < this.length; j++){
        res.push(this.slice(i, j + 1))
    }

  }
  return res;
}


let s = 'Nestor';

//console.log(s.substrings());
