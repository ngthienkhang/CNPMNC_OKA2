import axios from 'axios';
import * as Config from './../constants/Config';

export default function callApi(endpoint, method ='GET', body){
   return axios({
        method: method,
        url: `/${endpoint}`,
        data: body
      }).catch(error => {
        console.log('error' ,error);
        alert('không đúng')
      });
}