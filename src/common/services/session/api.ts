import {fetchApi} from '../api';
import apiConfig from '../api/config';

const endPoints = {
    authenticate: '/v1/oauth/token',
    revoke: '/users/auth/revoke',
    refresh: '/users/auth/refresh',
};

export const authenticate = (email: string, password: string) => fetchApi(endPoints.authenticate, {
    client_id: apiConfig.clientId,
    client_secret: apiConfig.clientSecret,
    grant_type: 'password',
    username: email,
    password: password,
    scope: '*'
}, 'post', {});

export const refresh = (token: string) => fetchApi(endPoints.refresh, {token}, 'post', {});

export const revoke = (tokens: string) => fetchApi(endPoints.revoke, {tokens}, 'post');