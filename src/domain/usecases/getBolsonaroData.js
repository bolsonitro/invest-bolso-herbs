const { usecase, step, Ok, Err } = require('@herbsjs/herbs')
const { herbarium } = require('@herbsjs/herbarium')
const axios = require('axios')
const Future = require('../entities/future')

const dependency = {}

const getBolsonaroData = injection =>
  usecase('Get data of Bolsonaro2022', {
    request: {},

    // Output/Response metadata
    response: Future,

    //Authorization with Audit
    authorize: () => Ok(),

    setup: ctx => (ctx.di = Object.assign({}, dependency, injection)),

    'Get the Bolsonaro fata and return': step(async ctx => {
      await axios.get("https://ftx.com/api/futures/BOLSONARO2022")
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
    .add(getBolsonaroData, 'getBolsonaroData')
    .metadata({ group: 'bolsonaro-data', operation: herbarium.crud.readAll, entity: Future })
    .usecase
