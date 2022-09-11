
import React from "react";
import axios from "axios"
import {
    RECEIVE_AUTH_TOKEN
} from './types'


import { loginRequest } from "../auth.config";

export const requestAccessToken = (accounts, instance) => async (dispatch) => {

    const request = {
        ...loginRequest,
        account: accounts[0]
    };

    try {
        console.log("Before acquiring token")
        const response = await instance.acquireTokenSilent(request);
        console.log("Token")
        dispatch({
            type: RECEIVE_AUTH_TOKEN,
            payload: response.accessToken
        })
    } catch (e) {
        const response = instance.acquireTokenPopup(request);
        dispatch({
            type: RECEIVE_AUTH_TOKEN,
            payload: response.accessToken
        })
    }
}