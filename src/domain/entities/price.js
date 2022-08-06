const { entity, id, field } = require('@herbsjs/herbs')
const { herbarium } = require('@herbsjs/herbarium')

const Price =
  entity('Price', {
    id: id(String, {default: () => '123'}),
    name: field(String),
    enabled: field(Boolean),
    postOnly: field(Boolean),
    priceIncrement: field(Number),
    sizeIncrement: field(Number),
    minProvideSize: field(Number),
    last: field(Number),
    bid: field(Number),
    ask: field(Number),
    price: field(Number),
    type: field(String),
    futureType: field(String),
    isEtfMarket: field(Boolean),
    underlying: field(String),
    restricted: field(Boolean),
    highLeverageFeeExempt: field(Boolean),
    largeOrderThreshold: field(Number),
    change1h: field(Number),
    change24h: field(Number),
    changeBod: field(Number),
    quoteVolume24h: field(Number),
    volumeUsd24h: field(Number),
    priceHigh24h: field(Number),
    priceLow24h: field(Number),
  })

module.exports =
  herbarium.entities
    .add(Price, 'Price')
    .entity
