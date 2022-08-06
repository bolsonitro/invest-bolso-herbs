const { usecase, step, Ok, Err } = require('@herbsjs/herbs')
const { herbarium } = require('@herbsjs/herbarium')
const axios = require('axios')
const Price = require('../../entities/price')

const dependency = {}

const getBitcoinPrice = injection =>
  usecase('Get price of Bitcoin', {
    request: {},

    // Output/Response metadata
    response: Price,

    //Authorization with Audit
    authorize: () => Ok(),

    setup: ctx => (ctx.di = Object.assign({}, dependency, injection)),

    'Get the Bitcoin price and return': step(async ctx => {
      console.log('caiu aqui')
      await axios.get("https://ftx.com/api/markets/BTC/USD")
        .then(({ data }) => {
          console.log(data)
          return Ok(ctx.ret = data.result)
        })
        .catch((err) => {
          return Err()
        })
    })
  })

module.exports =
  herbarium.usecases
    .add(getBitcoinPrice, 'getBitcoinPrice')
    .metadata({ group: 'bitcoin-price', operation: herbarium.crud.readAll, entity: Price })
    .usecase
