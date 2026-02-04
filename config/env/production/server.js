module.exports = ({ env }) => ({
  host: '0.0.0.0',

  // Cloud Run injects PORT=8080
  port: env.int('PORT'),

  url: env('PUBLIC_URL'),

  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
