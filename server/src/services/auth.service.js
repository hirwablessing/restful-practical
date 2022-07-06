import { BASE_URL } from "../../constants/url";


/**
 * const authDto = {
    names: '',
    email: '',
    phone: '',
    nationalId: '',
    password: ''
}
 * 
 */

async function register(authDto) {
    try {
        const res = await fetch(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(authDto)
        });
        const content = await res.json();

        return content;
    } catch (error) {
        return {};
    }
}

async function login(authDto) {
    try {
        const res = await fetch(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(authDto)
        });
        const content = await res.json();

        return content;
    } catch (error) {
        return {};
    }
}


export { register, login };