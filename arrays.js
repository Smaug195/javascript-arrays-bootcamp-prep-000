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
function destructivelyAddElementToBeginningOfArray(arr,add){
  return arr.push(add)
}
