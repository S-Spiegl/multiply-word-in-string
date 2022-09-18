function modifyMultiply (str,loc,num) {
  output = ''
  for(i = 0; i < Number(num); i++){
    output += str.split(' ')[Number(loc)]
  }
  return output
} 

module.exports = modifyMultiply