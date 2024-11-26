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
                this.saveUser(res.data.user)
                return res
            })
            .catch(err => {
                console.log("Error logging in:")
                console.log(err)
            })
    }
    isAuthenticated() {
        return this.getUser() != null
    }
    saveToken(token) {
        window.localStorage.setItem("auth-token", token)
    }
    saveUser(user) {
        window.localStorage.setItem("auth-user", JSON.stringify(user))
    }
    getAuthToken() {
        return window.localStorage.getItem("auth-token")
    }
    getUser() {
        return JSON.parse(window.localStorage.getItem("auth-user"))
    }

    ensureAuthenticated(req) {

    }
}