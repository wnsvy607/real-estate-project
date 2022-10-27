// import store from '@/store/index';
// import axios from 'axios';

// const ax = axios.create({
//     baseURL: process.env.VUE_APP_BACKEND_URL,
//     headers: {
//         Authorization: null,
//     },
// })

// ax.interceptors.request.use(function (config) {
//     // 요청이 전달되기 전에 처리
//     config.headers.Authorization = store.state.token;
//     return config;
// }, function (error) {
//     // 요청 오류에 대한 처리
//     return Promise.reject(error);
// });

// export default ax;