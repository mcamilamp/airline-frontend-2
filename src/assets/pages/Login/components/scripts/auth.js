import axios from "axios"
import {baseUrl} from "./shared";
import {Component} from "react";

export default class Auth {
    createUser(user) {
        return axios.post(`${baseUrl}/auth/signup`, user)
            .then(res => {
                console.log("User registered successfully:")
                console.log(res)
            })
            .catch(err => {
                console.log("Error registering user:")
                console.log(err)
            })
    }
    login(user) {
        return axios.post(`${baseUrl}/auth/login`, user)
            .then(res => {
                console.log("User logged in successfully:")
                console.log(res)
                this.saveToken(res.data.token)
                this.saveUserId(res.data.userId)
                return res
            })
            .catch(err => {
                console.log("Error logging in:")
                console.log(err)
            })
    }
    isAuthenticated() {
        return this.getUserId() != null
    }
    saveToken(token) {
        window.localStorage.setItem("auth-token", token)
    }
    saveUserId(userId) {
        window.localStorage.setItem("auth-user-id", userId)
    }
    getAuthToken() {
        return window.localStorage.getItem("auth-token")
    }
    getUserId() {
        return window.localStorage.getItem("auth-user-id")
    }
}