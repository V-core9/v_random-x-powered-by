const { xpbRandom } = require('../..')
let { gotItems } = require('../shared/settings')

const testCount = 100

test('base test', async () => {
  for (var i = 0; i < testCount; i++) {
    await xpbRandom()
    gotItems++
  }

  expect(gotItems).toBe(testCount)
})
