/* eslint-disable prettier/prettier */
import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify()

app.get('/hello',async () => {
  const transaction = await knex('transactions').insert({
    id:crypto.randomUUID(),
    tittle:'deposit igor',
    amount: 350,
  }).returning('*')

  return transaction
})
// const transaction = await knex('transactions').select('*').returning("*")
// return transaction})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('running')
  })
