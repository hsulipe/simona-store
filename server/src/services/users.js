const database = []

const register = ({
  name,
  phone,
  email,
  cpf,
  cep,
  address
}) => {
  if (findByEmail(email) || findByCPF(cpf)) {
    return false
  }
  database.push({
    name,
    phone,
    email,
    cpf,
    cep,
    address
  })
  return true
}

const findByEmail = (email) => {
  return database.find(el => el.email === email)
}

const findByCPF = (cpf) => {
  return database.find(el => el.cpf === cpf)
}

module.exports = {
  register,
  findByEmail,
  findByCPF
}
