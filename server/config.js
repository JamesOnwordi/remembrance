// Load environment variables from .env file
require('dotenv').config({ path: './.env' });

// Export configuration object
module.exports = {
  oAuthClientID: process.env.OAUTH_CLIENT_ID,
  oAuthclientSecret: process.env.OAUTH_CLIENT_SECRET,
  // The API end point to use. Do not change.
  apiEndpoint: 'https://photoslibrary.googleapis.com'
}


console.log(process.env.OAUTH_CLIENT_ID,process.env.OAUTH_CLIENT_SECRET)