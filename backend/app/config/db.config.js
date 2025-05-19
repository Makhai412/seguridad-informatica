export default {
    HOST: 'localhost',
    USER: 'vagrant',
    PASSWORD: 'vagrant',
    DB: 'todoapp',
    dialect: 'postgres',
    PORT: 5432,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
