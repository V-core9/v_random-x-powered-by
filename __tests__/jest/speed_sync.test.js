const { xpbRandomSync } = require('../..')
let { gotItems, duration } = require('../shared/settings')

test('Base Speed Test JS', async () => {
  const started = Date.now() // start time
  const endTime = started + duration

  do {
    xpbRandomSync()
    gotItems++
  } while (Date.now() < endTime)

  // Speed test / Items per millisecond [ipms]
  const ipms = gotItems / duration
  expect(ipms).toBeGreaterThan(400)
})
