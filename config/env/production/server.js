module.exports = ({ env }) => ({
  url: env("API_URL"),
  admin: {
    url: env("ADMIN_URL"),
  },
});
