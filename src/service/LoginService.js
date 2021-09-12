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