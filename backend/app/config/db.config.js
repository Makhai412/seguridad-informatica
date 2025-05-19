
export default {
  HOST: process.env.DB_HOST || '192.168.50.20',
  USER: process.env.DB_USER || 'vagrant',
  PASSWORD: process.env.DB_PASSWORD || 'vagrant',
  DB: process.env.DB_NAME || 'todoapp',
  dialect: 'postgres',
  PORT: process.env.DB_PORT || 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
