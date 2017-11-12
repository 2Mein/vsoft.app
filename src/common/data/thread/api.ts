import {fetchApi} from '../../services/api';

const endPoints = {
    get: '/v1/threads',
};

export const get = () => fetchApi(endPoints.get, {}, 'get', {});