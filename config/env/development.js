module.exports = {
  env: 'development',
  db: 'mongodb://localhost/projetopi',
  clientID: process.env.CLIENT_ID, 
  clientSecret: process.env.CLIENT_SECRET,
  seleniumUser: process.env.SELENIUM_USER, 
  seleniumUserPassword: process.env.SELENIUM_USER_PASSWORD,
  port: 3000,
  address: 'localhost',
  domain: 'localhost'
};