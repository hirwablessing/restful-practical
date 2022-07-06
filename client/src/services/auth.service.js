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

import { BASE_URL } from "../constants/url";
import axios from "axios";

async function register(authDto) {
  //register new user

  return axios.post(`${BASE_URL}/auth/register`, authDto);
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
  return await axios.post(`${BASE_URL}/auth/signin`, authDto);
}

async function userProfile(authDto) {
  return await axios.get(`${BASE_URL}/auth/profile`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
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
  return await axios.post(`${BASE_URL}/owners`, ownerDto, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}

async function createVehicle(vehicleDto) {
  return await axios.post(`${BASE_URL}/vehicle`, vehicleDto, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}

async function getOwners() {
  return await axios.get(`${BASE_URL}/owners`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}

async function getVehicles() {
  return await axios.get(`${BASE_URL}/vehicle`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}

//get current user profile

export {
  register,
  login,
  userProfile,
  getVehicles,
  getOwners,
  createVehicle,
  createOwner,
};
