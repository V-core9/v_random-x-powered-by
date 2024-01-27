# X-Powered-By Random

Middleware for express that will produce random value for x-powered-by header.

## Installing

```sh
npm i x-powered-by-random -save
```

# Using

```js
const { syncXPBR } = require('x-powered-by-random')
// or 
// import { asyncXPBR, syncXPBR } from 'x-powered-by-random'

const app = require('express')()

app.use(syncXPBR) // or app.use(asyncXPBR)
```

# Additional info

There are also available two functions that will return random value for x-powered-by header, and a list of all possible values.

```js
const { xpbRandomSync, xpbRandom, xPowerList } = require('x-powered-by-random')
// or 
// import { xpbRandomSync, xpbRandom } from 'x-powered-by-random'

console.log(xpbRandomSync())
console.log(await xpbRandom())
console.log(xPowerList)
```

>### ⚠ NOTE  
>
> If you are using Helmet middleware you should put it afterwards because otherwise it might get overwritten/removed by the helmet/other middleware.
