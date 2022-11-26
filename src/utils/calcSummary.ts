import { Item, SummaryInfo } from '../app/slices/summarySlice'

const PRICE_M2 = Number( import.meta.env.PRICE_M2 )

export const calcSummary = (items: Item[]): SummaryInfo => {
  const totalItems = items.reduce((acc, item) => {
    return acc + item.amount
  }, 0)

  const totalVolume = items.reduce((acc, item) => {
    const volume = item.amount * item.volume
    return acc + volume
  }, 0)

  const subtotal = Number( (totalVolume * PRICE_M2).toFixed(2) )
  const tax = Number( (subtotal * .16).toFixed(2) )
  const total = subtotal + tax

  return {
    subtotal,
    tax,
    total,
    totalItems,
    totalVolume
  }
}