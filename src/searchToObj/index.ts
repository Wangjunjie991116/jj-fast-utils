import { parse } from 'qs';

const searchToObj = (url?: string) => {
    url = url || window.location.search;
    if (url.indexOf('?') > -1) {
        url = url.slice(1);
    }
    return parse(url);
};

export default searchToObj;
