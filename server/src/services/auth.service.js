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

import { BASE_URL } from "../../../client/src/constants/url";

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
        const res = await fetch(`${BASE_URL}/auth/signin`, {
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

//get user


export { register, login };