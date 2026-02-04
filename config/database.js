module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: false,
    },
  },
});

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'localhost'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'algoraz_cms'),
//       user: env('DATABASE_USERNAME', 'postgres'),
//       password: env('DATABASE_PASSWORD', 'password'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//     pool: {
//       min: env.int('DATABASE_POOL_MIN', 2),
//       max: env.int('DATABASE_POOL_MAX', 10),
//     },
//     acquireConnectionTimeout: env.int('DATABASE_TIMEOUT', 60000),
//   },
// });