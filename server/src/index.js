const express = require('express')
const cors = require('cors')
const app = express()
const yup = require('yup')
const userService = require('./services/users')

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.post('/users/register', async (req, res) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().matches(/^[0-9]{11}$/).required(),
    cep: yup.string().matches(/^[0-9]{8}$/).required(),
    cpf: yup.string().matches(/^[0-9]{11}$/).required(),
    email: yup.string().email().required(),
    address: yup.string().required()
  })

  try {
    await schema.validate(req.body)
  } catch (err) {
    console.error(err)
    res.status(400).send('Bad Request.')
  }
  const result = userService.register(req.body)
  if (result) {
    res.status(204).send()
  } else {
    res.status(409).send()
  }
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
