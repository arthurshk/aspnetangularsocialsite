export const environment = {
  production: true,
  auth0: {
    domain: process.env['NG_AUTH0_DOMAIN'] || 'default-domain',
    clientId: process.env['NG_AUTH0_CLIENT_ID'] || 'default-client-id'
  }
};
