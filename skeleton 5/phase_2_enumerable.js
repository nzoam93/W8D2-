function doubler(num){
  return num * 2;
}

Array.prototype.myEach = function(func){

  for(let i= 0; i < this.length; i ++){
    func(this[i]);
  }

}

Array.prototype.myMap = function(prc){
  let res = [];
  this.myEach(function(ele){

      res.push(prc(ele));

  })
  return res;
}

let test = [1, 2, 3 , 4, 5];

//console.log(test.myMap(doubler));

Array.prototype.myReduce = function(callback, initialValue = 0){
  let acc;
  if(initialValue === 0){
    acc = this.shift();
  }
  else{
    acc = initialValue;
  }
  this.myEach(function(ele){
    acc += callback(ele);
  })
  return acc;
}


console.log(test.myReduce(doubler,69));