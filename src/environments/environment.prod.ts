import { clientId } from './auth0.config';

export const environment = {
  production: true,
  apiUrl: 'http://localhost:5139',
  auth: {
    audience: 'https://sonab-api/',
    domain: 'dev-mgq18l033qsult02.us.auth0.com',
    clientId,
    redirectUri: window.location.origin,
  },
};
