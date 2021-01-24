const { generateToken } = require('./helpers/generateToken');

const go = async () => {
  for (let index = 0; index < 5; index++) {
    setTimeout(async () => console.log(await generateToken()), 1000*index)
    
  }
}
go()