const contentful = require("contentful");

// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js

const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
};

// export `createClient` to use it in my-project components
export function createClient() {
  return contentful.createClient(config);
}
