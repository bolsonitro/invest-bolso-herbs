const { usecase, step, Ok, Err } = require('@herbsjs/herbs')
const { herbarium } = require('@herbsjs/herbarium')
const axios = require('axios')
const Price = require('../entities/price')

const dependency = {}

const getBolsonaroPrice = injection =>
  usecase('Get price of Bolsonaro2022', {
    request: {},
    
    // Output/Response metadata
    response: Price,

    //Authorization with Audit
    authorize: () => Ok(),

    setup: ctx => (ctx.di = Object.assign({}, dependency, injection)),

    'Get the Bolsonaro price and return': step(async ctx => {
      await axios.get("https://ftx.com/api/markets/BOLSONARO2022")
        .then(({ data }) => {
          return Ok(ctx.ret = data.result)
        })
        .catch((err) => {
          return Err()
        })
    })
  })

module.exports =
  herbarium.usecases
    .add(getBolsonaroPrice, 'getBolsonaroPrice')
    .metadata({ group: 'bolsonaro-price', operation: herbarium.crud.readAll, entity: Price })
    .usecase
