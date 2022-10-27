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
    memberId: null,
    memberName: null,
    role: null,
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
    },
    memberId(state) {
        return state.memberId;
    },
    memberName(state) {
        return state.memberName;
    }, 
    role(state) {
        return state.role;
    },
};

const mutations = {

    setToken(state, payload) {
        state.token = payload.token;
        state.expireTime = new Date(payload.expireTime)
        state.refresh = payload.refresh
        state.refreshExpireTime = new Date(payload.refreshExpireTime);
        state.isLogin = true
        axios.defaults.headers.common['Authorization'] = `${state.token}`;
    },

    setUserInfo(state, payload) {
        state.memberId = payload.memberId;
        state.memberName = payload.memberName;
        state.role = payload.role;
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
    },

    newLogin(state) {
        state.isLoginError = false;
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
                axios.get(process.env.VUE_APP_BACKEND_URL + "/api/member/info")
                .then((res) => {
                    commit("setUserInfo",res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
                router.push({ name: "home" })
            }).catch((err) => {
                console.log(err);
                //isloginerror => true
                commit('loginError');
                //errormessage
                commit('errorMessage', err.response.data.errorMessage);
            })



    },
    setRole: ({ commit }, _role) => {
        commit('setRole', _role);
    },
    logOut: ({ commit }) => {
        commit('logOut');
        router.push({ name: "home" })
    },

    newLogin({ commit }) {
        commit('newLogin');
    }

};

export default {
    state,
    getters,
    mutations,
    actions,
}