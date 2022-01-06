import axios from 'axios'
import config from '../configs/axios.js'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class ReqPack {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }
    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            method: 'GET',
        }

        return config
    }

    interceptors(instance) {
        // 添加请求拦截器
        instance.interceptors.request.use(function (config) {
            // console.log('处理请求');
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // console.log('请求', error.message);
            // 对请求错误做些什么
            return Promise.reject(error);
        });


        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
            // console.log('处理响应');
            // 对响应数据做点什么
            return response.data;
        }, function (error) {
            // console.log('响应', error.message);
            // 对响应错误做点什么
            return Promise.reject(error);
        });

    }

    request(options) {
        const instance = axios.create()
        options = { ...(this.getInsideConfig()), ...options }
        this.interceptors(instance)
        return instance(options)
    }
}
export default new ReqPack(baseUrl)