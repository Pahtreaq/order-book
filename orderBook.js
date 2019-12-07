function getUpdatedBook(existingBook, incomingOrder) {
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
  let updatedBook = []

  if (!existingBook.length) {
    updatedBook = existingBook.concat(incomingOrder)

  } else {
    updatedBook = getUpdatedBook(existingBook, incomingOrder)
  }
  return updatedBook
}

module.exports = reconcileOrder