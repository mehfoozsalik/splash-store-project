import { REMOVE, INCREASE, DECREASE, ADDTOCARD, CLEARCARD } from './action'

export default (state, action) => {
  switch (action.type) {
    case REMOVE:
      return state.filter((item) => item.id !== action.payload)
    case INCREASE:
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, amount: item.amount + 1 }
          : { ...item }
      })
    case DECREASE:
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, amount: item.amount - 1 }
          : { ...item }
      })
    case ADDTOCARD:
      const { id, image, title, price } = action.payload
      let product = { id, image, title, price, amount: 1 }
      return { ...state, product }

    case CLEARCARD:
      return []

    default:
      return state
  }
}
