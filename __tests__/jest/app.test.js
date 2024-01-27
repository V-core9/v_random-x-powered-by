const supertest = require('supertest')
const { asyncXPBR, syncXPBR, xPowerList } = require('../..')

let app

let server

describe('async test', () => {
  beforeAll(async () => {
    app = require('express')()
    app.use(syncXPBR)

    app.get('/', function (req, res) {
      return res.send('Hello World!')
    })

    server = app.listen(null, () => {
      global.agent = supertest.agent(server)
    })
  })

  for (let i = 0; i < Math.trunc(xPowerList.length / 2); i++) {
    it(`GET should return x-powered-by-random [ ${i} ]`, async () => {
      const response = await supertest(app).get('/')
      expect(response.status).toBe(200)
      const xBy = response.headers['x-powered-by']
      const result = xPowerList.indexOf(xBy) > -1
      expect(result).toBe(true)
      return response
    })
  }

  afterAll(async () => {
    await server.close()
    app = null
    server = null
  })
})
describe('SYNC test', () => {
  beforeAll(async () => {
    app = require('express')()
    app.use(asyncXPBR)

    app.get('/', function (req, res) {
      return res.send('Hello World!')
    })

    server = app.listen(null, () => {
      global.agent = supertest.agent(server)
    })
  })

  for (let i = 0; i < 50; i++) {
    it(`GET should return x-powered-by-random [ ${i} ]`, async () => {
      const response = await supertest(app).get('/')
      expect(response.status).toBe(200)
      const xBy = response.headers['x-powered-by']
      const result = xPowerList.indexOf(xBy) > -1
      expect(result).toBe(true)
      return response
    })
  }

  afterAll(async () => {
    await server.close()
    app = null
    server = null
  })
})
