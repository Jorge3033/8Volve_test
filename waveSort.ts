const waveSort = (arr: number[]): number[] => {

  arr.sort((a, b) => a - b);
  
  for (let i = 1; i < arr.length; i ++) {

    //we valiate Length of Array not to be out of bounds
    if (i + 1 < arr.length) {

      const temp = arr[i];

      arr[i] = arr[i + 1];
      arr[i + 1] = temp;

    
    
    }
  }
  return arr;
}

console.log(waveSort([1, 2, 6, 19, 12, 3, 1]));