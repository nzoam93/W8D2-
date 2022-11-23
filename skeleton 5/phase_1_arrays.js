Array.prototype.uniq = function(){
  const res = new Set(this);
  return Array.from(res);
}

// console.log([1,2,2,3,3,3].uniq());

// Array.prototype.twoSum = function(){
//   const res = [];
//   const pairs = {-3 => 1};
//   for (let i = 0; i < this.length; i++){
//     if (-this[i] in pairs){
//       return "hi"
//     }
//   }
// }




Array.prototype.twoSum = function(){
  const res = [];
  for (let i = 0; i < this.length; i++){
    for (let j = i + 1; j < this.length; j++){
      if(this[i] === -this[j]){
        res.push([i,j]);
      }
    }
  }
  return res;
}

//console.log([1,2,2,3,3,-2].twoSum());



Array.prototype.transpose = function(){ 
  const res = [];

  for (let i = 0; i < this[0].length; i++){
    let row = [];

    for (let j = 0; j < this.length; j++){
      row.push(this[j][i])
    }
    res.push(row)
  }
  return res;


}

const matrix = [[1, 2, 5, 4],
          [7, 8, 9, 6], 
          [6, 5, 3, 5]];

//console.log(matrix.transpose());

