import {API_URL, httpClient} from '../api/dataProvider';

function buildAndQuery(prop, params) {
    let querystring = "";
    for (prop in params.filter) {
        if(prop == 'isactive'){
            querystring += "&" + prop + "=eq." + params.filter[prop];
        }
        else if(prop == 'question_id'){
            querystring += "&" + prop + "=eq." + params.filter[prop];
        }
        else if(prop == 'category_id'){
            querystring += "&" + prop + "=eq." + params.filter[prop];
        }
        else{
            //console.log("Prop is surname or givenname or username");
            querystring += "&" + prop + "=ilike.*" + params.filter[prop] + "*";
        }
    }
    return querystring;
}


const myApiService = {
    async getList(resource, params) {
        const {page, perPage} = params.pagination;
        const {field, order} = params.sort;
        let limit = perPage;
        let offset = (page - 1) * perPage;
        let prop;
        let options = {};
        options.headers = new Headers({'Prefer': 'count=exact'});
        let querystring = buildAndQuery(prop, params);
        let url = API_URL + "/" + resource + "?limit=" + limit + "&offset=" + offset + "&order="+ field+"." + order.toLowerCase() + querystring;
        console.log("URL : " + url);
        return httpClient(url, options).then((response) => {
            let contentrange = [0, 100];
            for (let pair of response.headers.entries()) {
                if (pair[0] === 'content-range') {
                    contentrange = pair[1].split('/');
                }
            }
            let jsondata = response.json;
            var totalcount = parseInt(contentrange[1]);
            return ({data: jsondata, total: totalcount});
        })
    },

};


export default myApiService
