/* eslint-disable prettier/prettier */
import {Knex ,knex as setupKnex} from 'knex'

export const config:Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: './db/app.db',
  },
  useNullAsDefault:true,
  migrations:{
    extension:'ts',
    directory:"./db/migrations"
  },

}

export const knex = setupKnex(config)
