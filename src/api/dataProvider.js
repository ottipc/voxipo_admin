import {fetchUtils} from 'react-admin';
import postgrestRestProvider from "@raphiniert/ra-data-postgrest";
import myApiService from "./apiService";

require('dotenv').config();

export const API_URL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL;

export const httpClient = (url, options = {}) => {
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
const myDataProvider = {
    ...dataProvider,

    getList: function (resource, params) {
        console.log("PARAMS IN GET LIST : " + JSON.stringify(params));
        if (resource == "vote")
            return myApiService.getList(resource, params);
        if (resource == "user_vote")
            return myApiService.getList(resource, params);
        return myApiService.getList(resource, params);
    },

    /*getOne: function (resource, params) {
        return myApiService.getVote(resource, params)
    },
*/

};
export default myDataProvider
