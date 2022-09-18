function modifyMultiply (str,loc,num) {
  output = []
  for(i = 0; i < Number(num); i++){
    output.push(str.split(' ')[Number(loc)])
  }
  return output.join(' ')
} 

module.exports = modifyMultiply