const state = {
    isLogin: false,
    token: null,
    expireTime: null,
    role: null,
    refresh: null,
    refreshExpireTime: null,
};

const getters = {
    isLogin(state) {
        return state.isLogin;
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
    }
};

const actions = {
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
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
}