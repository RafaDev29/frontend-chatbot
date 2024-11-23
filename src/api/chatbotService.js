
import axiosInstance from '@/config/http.config';
// import axios from 'axios';

const baseURL = process.env.VUE_APP_BASE_URL;



export function chatbotApi( payload ) {

    return axiosInstance.post(`${baseURL}api/questionBank/query`,payload)
}