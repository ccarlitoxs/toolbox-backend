import { backendToken } from "../config/ENV.js";

export const setHeadersWithContent = (incomingHeaders) => {
    const headers = {
        accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${backendToken}`
    };
    return headers;
};

export const setHeaders = (incomingHeaders) => {
    const headers = {
        accept: 'application/json',
        authorization: `Bearer ${backendToken}`,
    };
    return headers;
};