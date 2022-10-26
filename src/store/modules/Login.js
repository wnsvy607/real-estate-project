import router from "@/router";
import axios from "axios";

const state = {
    isLogin: false,
    isLoginError: false,
    errorMessage: null,
    token: null,
    expireTime: null,
    refresh: null,
    refreshExpireTime: null,
    userInfo: null,
};

const getters = {
    isLogin(state) {
        return state.isLogin;
    },
    isLoginError(state) {
        return state.isLoginError;
    },
    errorMessage(state) {
        return state.errorMessage;
    }
};

const mutations = {

    setToken(state, payload) {
        state.token = payload.token;
        state.expireTime = new Date(payload.expireTime)
        state.refresh = payload.refresh
        state.refreshExpireTime = new Date(payload.refreshExpireTime);
        state.isLogin = true
    },

    setRole(state, _role) {
        state.role = _role
    },

    logOut(state) {
        state.isLogin = false;
        state.token = null;
        state.role = null;
        state.refresh = null;
        state.expireTime = null;
        alert('로그아웃 되었습니다.')
    },

    loginError(state) {
        state.isLoginError = true;
    },

    errorMessage(state, message) {
        state.errorMessage = message;
    }
};

const actions = {
    login({ state, commit }, loginObj) {
        axios.post(process.env.VUE_APP_BACKEND_URL + "/api/basic/login", loginObj)
            .then((res) => {
                let data = {
                    token: res.data.grantType + " " + res.data.accessToken,
                    expireTime: res.data.accessTokenExpireTime,
                    refresh: res.data.grantType + " " + res.data.refreshToken,
                    refreshExpireTime: res.data.refreshTokenExpireTime,
                };
                commit("setToken", data);
                router.push({ name: "home" })
            }).catch((err) => {
                console.log(err);
                //isloginerror => true
                commit('loginError');
                //errormessage
                commit('errorMessage',err.response.data.errorMessage);
            })



    },
    setRole: ({ commit }, _role) => {
        commit('setRole', _role);
    },
    logOut: ({ commit }) => {
        commit('logOut');
        router.push({ name: "home" })
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
}