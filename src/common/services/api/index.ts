import * as fetchival from 'fetchival';
import * as _ from 'lodash';
import * as sessionSelectors from '../session/selectors';
import {default as apiConfig} from './config';

export const exceptionExtractError = (exception: any) => {
    if (!exception.Errors) return false;
    let error = false;
    const errorKeys = Object.keys(exception.Errors);
    if (errorKeys.length > 0) {
        error = exception.Errors[errorKeys[0]][0].message;
    }
    return error;
};


export const fetchApi = (endPoint: string, payload: any = {}, method: string = 'get', headers: any = {}) => {
    const accessToken = sessionSelectors.get().tokens.access.value;
    console.log('token');
    console.log(accessToken);

    return fetchival(`${apiConfig.url}${endPoint}`,
        {
            headers: _.pickBy(
                {
                    ...(accessToken ? {
                        Authorization: `Bearer ${accessToken}`,
                    } : {
                        'Client-ID': apiConfig.clientId,
                    }),
                    ...headers,
                }, (item: any) => !_.isEmpty(item)),
        })[method.toLowerCase()](payload);
};