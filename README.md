# X-Powered-By Random

Middleware for express that will produce random value for x-powered-by header.

## Installing

    npm i x-powered-by-random -save

# Using

    const app = require('express')();

    const {xPoweredByRandom} = require('x-powered-by-random');
    app.use(xPoweredByRandom);

# Using async verions

    const app = require('express')();

    const createXPoweredByRandom = require('x-powered-by-random');
    app.use(createXPoweredByRandom({ useAsync: true }));

>### NOTE
>
> If you are using Helmet middleware you should put it afterwards because otherwise it might get overwritten/removed by the helmet/other middleware.
