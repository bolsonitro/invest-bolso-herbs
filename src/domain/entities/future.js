const { entity, id, field } = require('@herbsjs/herbs')
const { herbarium } = require('@herbsjs/herbarium')

const Future =
  entity('Future', {
    id: id(String, {default: () => '123'}),
      name: field(String),
      underlying: field(String),
      description: field(String),
      type: field(String),
      expiry: field(Date),
      perpetual: field(Boolean),
      expired: field(Boolean),
      enabled: field(Boolean),
      postOnly: field(Boolean),
      priceIncrement: field(Number),
      sizeIncrement: field(Number),
      last: field(Number),
      bid: field(Number),
      ask: field(Number),
      index: field(Number),
      mark: field(Number),
      imfFactor: field(Number),
      lowerBound: field(Number),
      upperBound: field(Number),
      underlyingDescription: field(String),
      expiryDescription: field(String),
      marginPrice: field(Number),
      imfWeight: field(Number),
      positionLimitWeight: field(Number),
      group: field(String),
      closeOnly: field(Boolean),
      change1h: field(Number),
      change24h: field(Number),
      changeBod: field(Number),
      volumeUsd24h: field(Number),
      volume: field(Number),
      openInterest: field(Number),
      openInterestUsd: field(Number),
  })

module.exports =
  herbarium.entities
    .add(Future, 'Future')
    .entity
