var chocolateBars=[
  'snickers',
  'hundred grand',
  'kitkat'
  ]

function addElementToBeginningOfArray(arr,add){
  return [add,...arr]
}
function destructivelyAddElementToBeginningOfArray(arr,add){
  return arr.unshift(add)
}
function addElementToEndOfArray(arr,add){
  return [...arr,add]
}
function destructivelyAddElementToEndOfArray(arr,add){
  arr.push(add)
  return add
}
function accessElementInarray(arr,indx){
  return arr[indx];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  return arr.shift(arr)
}
function removeElementFromBeginningOfArray (arr){
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (arr){
  return arr.pop()
}
function removeElementFromEndOfArray(arr){
  return arr.slice(0,arr.length-1)
}
