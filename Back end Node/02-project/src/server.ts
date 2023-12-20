/* eslint-disable prettier/prettier */
import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify()

app.get('/hello',async () => {

// })
  const transaction = await knex('transactions')
    .where('amount',1000)
    
    .select('*')
    .returning('*')

  return transaction})
// const transaction = await knex('transactions').select('*').returning("*")
// return transaction})

app.post('/hello', async (request, reply) => {
  try {
    const { title, amount } = request.body

    const transaction = await knex('transactions').insert({
      id: crypto.randomUUID(),
      title,
      amount,
      session_id: crypto.randomUUID()
    }).returning('*')

    reply.send(transaction)
  } catch (error) {
    reply.status(500).send({ error: 'Internal Server Error' })
  }
})



app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('running')
  })
