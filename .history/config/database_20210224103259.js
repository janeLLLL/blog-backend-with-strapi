// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'mongoose',
//       settings: {
//         client: 'mongo',
//         host: env('DATABASE_HOST', 'localhost'),//后端和数据库同一个服务器就是本机
//         port: env.int('DATABASE_PORT', 27017),
//         database: env('DATABASE_NAME', 'demo'),
//         username: env('DATABASE_USERNAME', ''),
//         password: env('DATABASE_PASSWORD', ''),
//       },
//       options: {
//         authenticationDatabase: env('AUTHENTICATION_DATABASE'),
//         ssl: env('DATABASE_SSL'),
//       },
//     },
//   },
// });

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});

