const dotenv = require('dotenv');

const pathEnvConfig = ['dev'].includes(process.env.NODE_ENV) ? '.env.dev' : '.env.production';

process.env.NODE_ENV !== 'production' && dotenv.config({
  path: pathEnvConfig
})

module.exports = {
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : null,
  migrations: [process.env.TYPEORM_MIGRATIONS],
  entities: [process.env.TYPEORM_ENTITIES],
  cli: { "migrationsDir": process.env.TYPEORM_MIGRATIONS_DIR },
  autoLoadEntities: false,
  synchronize: false
}