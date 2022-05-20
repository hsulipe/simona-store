const database = []

const create = ({ email, cep, products = [] }) => {
  if (!findByEmail(email)) {
    database.push({ email, cep, products })
    return true
  }
  return false
}

const addProduct = (email, product) => {
  const aux = findByEmail(email)
  if (aux) {
    aux.products.push(product)
    return true
  }
  return false
}

const removeProduct = (email, product) => {
  const aux = findByEmail(email)
  if (aux) {
    const index = database.indexOf(aux)
    database.splice(index, 1)
    return true
  }
  return false
}

const findByEmail = (email) => {
  return database.find(el => el.email === email)
}

module.exports = {
  create,
  findByEmail,
  addProduct,
  removeProduct
}
