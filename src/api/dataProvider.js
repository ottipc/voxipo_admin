import {fetchUtils} from 'react-admin';
import postgrestRestProvider from "@raphiniert/ra-data-postgrest";

require('dotenv').config();

export const API_URL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL;


/**
 *
 * dataProvider configurations
 *  Authorization Token for the API
 *
 * @param url
 * @param options
 * @returns {Promise<{status: number; headers: Headers; body: string; json: any}>}
 *
 */
const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({Accept: 'application/json'});
    }
    options.headers.set('Authorization', process.env.REACT_APP_API_KEY);
    return fetchUtils.fetchJson(url, options);
};

/**
 * send the Authorization Token in header
 * @type {DataProvider}
 *
 */
const dataProvider = postgrestRestProvider(API_URL, httpClient);


export default dataProvider
