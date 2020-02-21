
exports.min = function min (array) {
  if ( array == null ){
    return 0;
  };
  let min = 0;

  for (let i = 0; i<array.length; i++){
    if (array[i]<=min){
      min = array[i];
    };
  }
  return min;
}

exports.max = function max (array) {
  let max =0;
  if ( array == null ){
    return 0;
  };
  for (let i = 0; i<array.length; i++){
    if (array[i]>max){
      max = array[i];
    };
  }
  return max;
}

exports.avg = function avg (array) {
  if ( array == null || array.length == 0){
    return 0;
  };
  let summ = 0;
  let avg =0;
  for (let i = 0; i<array.length; i++){
    summ+=array[i];
  };
  avg = summ/array.length;
  return avg;
}

// let array=[34,26,21,-8,10,39,-14,20,20,27,1,1,27,-15,14,-8,20,17,5,-36];
// let max =0;
//   if (array.length==0){
//     return 0;
//   }
//   for (let i = 0; i<array.length; i++){
//     if (array[i]>max){
//       max = array[i];
//     };
//   }
//   console.log(max);
