//Zadanie 1

//sumOfCubes([1, 5, 9]) ➞ 855
// 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
//sumOfCubes([3, 4, 5]) ➞ 216
//sumOfCubes([2]) ➞ 8
//sumOfCubes([]) ➞ 0

function sumOfCubes(oSet){
  nResult = 0;
  for (let i=0;i<oSet.length;i++){
    nResult = nResult + Math.pow(oSet[i], 3)
  }
  return nResult
}

console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([3, 4, 5]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));

//Zadanie 2

//societyName(["Adam", "Marcin", "Tomasz"]) ➞ "AMT"
//societyName(["Miłosz", "Kasia", "Wiola", "Lena"]) ➞ "MKWL"

function societyName(oSet){
  oSet= oSet.sort()
  nResult = "";
  for (let i=0;i<oSet.length;i++){
    nResult = nResult.concat(oSet[i][0])
  }
  return nResult
}

console.log(societyName(["Adam", "Marcin", "Tomasz"]))
console.log(societyName(["Miłosz", "Kasia", "Wiola", "Lena"]))
console.log(societyName(["Wiola", "Miłosz", "Kasia", "Lena"]))

//Zadanie 2

//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
//minMax([2334454, 5]) ➞ [5, 2334454]
//minMax([1]) ➞ [1, 1]

function minMax(oSet){
  const nResult = [oSet[0],oSet[0]];
  for (let i=1;i<oSet.length;i++){
    if (oSet[i] < nResult[0]) {
      nResult[0] = oSet[i] 
    }
    if (oSet[i] > nResult[1]) {
      nResult[1] = oSet[i] 
    }
  }
  return nResult
}

console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([2334454, 5]))
console.log(minMax([1]))






