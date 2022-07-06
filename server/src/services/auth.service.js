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

/**
 * const authDto = {
    email: '',
    password: ''
}
 * 
 */

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
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        });
        const content = await res.json();

        return content;
    } catch (error) {
        return {};
    }
}

/**
 * const authDto = {
    names: '',
    phone: '',
    nationalId: '',
    address: '',
}
 * 
 */

async function createOwner(ownerDto) {
    //get current user profile
    try {
        const res = await fetch(`${BASE_URL}/owners/owner`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(ownerDto)
        });
        const content = await res.json();

        return content;
    } catch (error) {
        return {};
    }
}

async function createVehicle(vehicleDto) {
    //get current user profile
    try {
        const res = await fetch(`${BASE_URL}/vehicles/vehicle`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(vehicleDto)
        });
        const content = await res.json();

        return content;
    } catch (error) {
        return {};
    }
}

async function getOwners() {
    //get current user profile
    try {
        const res = await fetch(`${BASE_URL}/owners/owner`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        });
        const content = await res.json();

        return content;
    } catch (error) {
        return {};
    }
}

async function getVehicles() {
    //get current user profile
    try {
        const res = await fetch(`${BASE_URL}/vehicles/vehicle`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        });
        const content = await res.json();

        return content;
    } catch (error) {
        return {};
    }
}

//get current user profile 



export { register, login, userProfile, createOwner, createVehicle, getOwners, getVehicles };