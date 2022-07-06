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
    //register new user
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
    //login user
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

async function userProfile(authDto) {
    //get current user profile
    try {
        const res = await fetch(`${BASE_URL}/auth/profile`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `${localStorage.getItem('token')}`
            },
            body: JSON.stringify(authDto)
        });
        const content = await res.json();

        return content;
    } catch (error) {
        return {};
    }
}

//get current user profile 



export { register, login, userProfile };