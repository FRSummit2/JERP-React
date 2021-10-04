import * as API from '../api/api'
import axios from 'axios';

export const login = async (username, password) => {
    const url = API.login
    return await axios({
        url: url,
        method: 'POST',
        data: { username, password }
    })
}

export const testUser = async () => {
    // const url = 'https://script.google.com/macros/s/AKfycbxP9rZr8DSTpMuAjPisJmnpMZwotWs8ze9yj2CG/exec'
    const url = 'https://script.google.com/macros/s/AKfycbzTRst1XQOqAmEIqF00dmNqg7sDQ9G2qT92xbQMcDosq3xQyvQ/exec'
    return axios(url, {
        method: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        withCredentials: false,
        params: {
            action: 'EMPLOYER_READ_ALL'
        }
    })
}