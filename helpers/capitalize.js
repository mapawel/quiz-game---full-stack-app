module.exports.capitalize = (string) => {
  const strArr = string.toLowerCase().split(' ')
  const x = strArr.map(str => str[0].toUpperCase() + str.slice(1))
  return x.join(' ')
}