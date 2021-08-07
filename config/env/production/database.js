const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL || "");

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        ssl:
          env.bool("POSTGRES_REJECT_UNAUTHORIZED", undefined) === undefined
            ? {
                rejectUnauthorized: env.bool(
                  "POSTGRES_REJECT_UNAUTHORIZED",
                  false
                ),
              }
            : undefined,
      },
      options: {
        ssl: env.bool("POSTGRES_SSL", false),
      },
    },
  },
});
