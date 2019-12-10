import Cookies from 'universal-cookie';

export function setCookie(key, payload) {
    try {
        const cookies = new Cookies();
        cookies.set(key, payload, { path: '/' });
        return true;
    } catch (error) {
        return false;
    }
}

export function getCookie(key) {
    try {
        const cookies = new Cookies();
        return cookies.get(key);
    } catch (error) {
        return {};
    }
}

