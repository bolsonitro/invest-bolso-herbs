const { entity, id, field } = require('@herbsjs/herbs')
const { herbarium } = require('@herbsjs/herbarium')

const Position =
entity('Position', {
  id: id(String, { default: () => '123' }),
  future: field(String),
  size: field(Number),
  side: field(String),
  netSize: field(Number),
  longOrderSize: field(Number),
  shortOrderSize: field(Number),
  cost: field(Number),
  entryPrice: field(Number),
  unrealizedPnl: field(Number),
  realizedPnl: field(Number),
  initialMarginRequirement: field(Number),
  maintenanceMarginRequirement: field(Number),
  openSize: field(Number),
  collateralUsed: field(Number),
  recentAverageOpenPrice: field(Number),
  recentPnl: field(Number),
  recentBreakEvenPrice: field(Number),
  cumulativeBuySize: field(Number),
  cumulativeSellSize: field(Number),
})

module.exports =
  herbarium.entities
    .add(Position, 'Position')
    .entity
