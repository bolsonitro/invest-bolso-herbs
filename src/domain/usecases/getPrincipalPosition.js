const { usecase, step, Ok, Err } = require('@herbsjs/herbs')
const { herbarium } = require('@herbsjs/herbarium')
const Position = require('../entities/position')
const { RestClient } = require('ftx-api')
require('dotenv').config()

const dependency = {}

const getPrincipalPosition = injection =>
  usecase('Get position', {
    request: {},

    // Output/Response metadata
    response: Position,

    //Authorization with Audit
    authorize: () => Ok(),

    setup: ctx => (ctx.di = Object.assign({}, dependency, injection)),

    'Get the principal position and return': step(async ctx => {
      const client = new RestClient(
        process.env.PUBLIC_API_KEY,
        process.env.PRIVATE_API_KEY
      )
      const positions = await client.getPositions(true)
      const bolsonaroPosition = positions.result.find((position) => {
        return position.future == "BOLSONARO2022";
      });
      return Ok(ctx.ret = bolsonaroPosition)
    })
  })

module.exports =
  herbarium.usecases
    .add(getPrincipalPosition, 'getPrincipalPosition')
    .metadata({ group: 'position', operation: herbarium.crud.readAll, entity: Position })
    .usecase
