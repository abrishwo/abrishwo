const { env } = require('@strapi/utils');

module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            env('CLOUDINARY_URL') ? env('CLOUDINARY_URL') : '',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            env('CLOUDINARY_URL') ? env('CLOUDINARY_URL') : '',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
 
  {
    name: 'strapi::cors',
    config: {
      origin: env('FRONTEND_URL', '*'), // <-- env is undefined here
    },
  },
'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];