import Cookies from 'js-cookie';

let serviceConfig = {
    timeout: 1000,
    headers: {"X-XSRF-TOKEN": Cookies.get('XSRF-TOKEN')}
};

export default serviceConfig;