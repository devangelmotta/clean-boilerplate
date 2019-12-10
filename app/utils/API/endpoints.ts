const URL_BASE = "http://ec2-3-136-125-107.us-east-2.compute.amazonaws.com:3010";
export const endpoints = {
    auth: `${URL_BASE}/v1/auth/login/`, /** {email, password }**/
    register: `${URL_BASE}/v1/auth/register/`, /** {email, password }**/
    get_details: `${URL_BASE}/v1/details`, /** {tokenAccess, tokenID }**/
    set_details: `${URL_BASE}/v1/details/create`, /** {tokenAccess, tokenID, items }**/
    verify_credentials: `${URL_BASE}/v1/auth/verify-tokens` /** {tokenAccess, tokenID }**/
}

