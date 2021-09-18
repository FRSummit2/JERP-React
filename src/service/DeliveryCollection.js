import * as API from '../api/api'
import axios from 'axios';
import { pending_delivered_invoice_list } from '../response_data/delivery_collection.js'

const token = JSON.parse(localStorage.getItem('jerp_user_details')) ? JSON.parse(localStorage.getItem('jerp_user_details')).accessToken : null
const token_type = JSON.parse(localStorage.getItem('jerp_user_details')) ? JSON.parse(localStorage.getItem('jerp_user_details')).token_type : null

export const pending_delivered_invoice_list_service_demo = async () => {
    return await pending_delivered_invoice_list
    // return await axios({
    //     url: 'http://frs-json-server.herokuapp.com/delivery_schedule_invoice_chalan_list',
    //     // method: 'GET',
    //     // headers: {
    //     //   'Authorization': token_type + ' ' + token
    //     // },
    // })
}

export const pending_delivered_invoice_list_service = async () => {
    const url = API.pending_delivered_invoice_list
    return await axios({
        url: url,
        method: 'GET',
        headers: {
          'Authorization': token_type + ' ' + token
        },
    })
}