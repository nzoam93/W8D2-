
function range(start, end){
  if(start === end + 1){
    return [];
  }

  return [start] + (range(start + 1, end));

}




console.log(range(1,5))



function sumRec(arr){

  if(arr.length <= 1){
    return arr[0];
  }
  return arr[0] + sumRec(arr.slice(1, arr.length));
}


function binarySearch(arr, target){
  let mid;
  let l = 0;
  let r = arr.length - 1;

  while(l < r){
    mid = Math.floor((l + r)/2)
    if(arr[mid]=== target){
      return mid;
    }else if(arr[mid] > target){ 
        l = mid;

    }else{
      r = mid;
      
    }

  }
  return -1;
}


let test = [0,1,2,3,4,10]


//console.log(sumRec(test));
