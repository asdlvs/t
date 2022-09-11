import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../auth.config";

function handleLogin(instance) {
    instance.loginPopup(loginRequest).catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <input type="button" className="btn btn-primary" onClick={() => handleLogin(instance)} value="Login" />
    );
}

function handleLogout(instance) {
    instance.logoutPopup().catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will open a popup for logout
 */
export const SignOutButton = () => {
    const { instance } = useMsal();

    return (
        <input type="button" variant="secondary" className="btn btn-primary"  onClick={() => handleLogout(instance)} value="Logout" />
    );
}