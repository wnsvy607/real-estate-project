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
    }
};

const mutations = {

    setToken(state, payload) {
        state.token = payload.token;
        state.expireTime = new Date(payload.expireTime)
        state.isLogin = true
    },

    setRole(state, _role) {
        state.role = _role
    },

    setRefresh(state, payload) {
        state.refresh = payload.refresh
        state.refreshExpireTime = new Date(payload.refreshExpireTime);
    },

    logOut(state) {
        state.isLogin = false;
        state.token = null;
        state.role = null;
        state.refresh = null;
        state.expireTime = null;
        alert('로그아웃 되었습니다.')
    }
};

const actions = {
    login({ state, commit }, loginObj) {
        axios.post(process.env.VUE_APP_BACKEND_URL + "/api/basic/login",loginObj)
        .then((res) => {
            //islogin true
        }).catch((err) => {
            console.log(err);
            //isloginerror => true
            //errormessage
            err.response.data.errorMessage;
        })

        

    },
    // dispatch 로 부를 수 있다.
    setToken: ({ commit }, payload) => {
        commit('setToken', payload);
    },
    setRole: ({ commit }, _role) => {
        commit('setRole', _role);
    },
    setRefresh: ({ commit }, payload) => {
        commit('setRefresh', payload);
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