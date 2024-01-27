const { asyncXPBR, syncXPBR, xPowerList } = require('../..')

const app = require('express')()

app.use(asyncXPBR)

app.get('/', function (req, res) {
  return res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
