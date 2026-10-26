export default {
  async fetch(request, env) {
    // Serves static files from the ./public directory configured in wrangler.toml
    return env.ASSETS.fetch(request);
  },
};
