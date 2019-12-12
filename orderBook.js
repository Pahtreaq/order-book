function findMatchingOrder(existingBook, incomingOrder) {
  let updatedBook = []
  let correspondingOrders = existingBook.filter((item) => {
    return item.type === incomingOrder.type
  })

  if (correspondingOrders.length === existingBook.length) {
    updatedBook = existingBook.concat(incomingOrder)
  }
  return updatedBook
}

function reconcileOrder(existingBook, incomingOrder) {
  if (existingBook.length = 0) {
    return existingBook.push(existingBook, incomingOrder)
  }
}

function findMatchingOrder(existingBook, incomingOrder) {
  return existingBook.filter(bookItem => (bookItem.type !== incomingOrder.type) && !((bookItem.price !== incomingOrder.price) && (bookItem.quantity !== incomingOrder.quantity)))
}


function filterMatchingOrder(existingBook, incomingOrder) {
  return existingBook.filter(bookItem => (bookItem.type === incomingOrder.type) && (bookItem.quantity <= incomingOrder.quantity) && (bookItem.price === incomingOrder.price))

}

function priceDecider(existingPrice, incomingPrice) {
  const priceIndex = existingPrice - incomingPrice
  if (priceIndex >= 0) {
    return true
  }
}

function reconcileOrder(existingBook, incomingOrder) {
  const filteredBook = findMatchingOrder(existingBook, incomingOrder)
  if (filteredBook.length && priceDecider(filteredBook[0].price, incomingOrder.price)) {
    let updatedBook = filterMatchingOrder(existingBook, incomingOrder)

    const updatedOrder = {
      type: ((filteredBook[0].quantity > incomingOrder.quantity) ? filteredBook[0].type : incomingOrder.type),
      quantity: Math.abs(filteredBook[0].quantity - incomingOrder.quantity),
      price: ((filteredBook[0].price > incomingOrder.price) ? filteredBook[0].price : incomingOrder.price)
    }

    if (updatedOrder.quantity === 0) {
      return updatedBook
    } else {
      updatedBook = [...updatedBook, updatedOrder]
      return updatedBook

    }
  } else {
    let updatedBook = [...existingBook, incomingOrder]
    return updatedBook
  }
}

module.exports = reconcileOrder