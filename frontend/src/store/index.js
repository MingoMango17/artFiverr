import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            userUID: '',
            isLoggedIn: false,
            isArtist: false,
        }
    },
    getters: {
        checkLogin(state) {
            return state.isLoggedIn;
        },
        getUserUID(state) {
            return state.userUID;
        },
    },
    mutations: {
        LOGIN(state) {
            state.isLoggedIn = true;
        },
        LOGOUT(state) {
            state.isLoggedIn = false;
        },
        SETUSERUID(state, uid) {
            state.userUID = uid;
        }
    },
    actions: {
        login({ commit }, title) {
            commit('LOGIN');
        },
        logout({ commit }, title) {
            commit('LOGOUT');
        },
        setUserUID({ commit }, uid) {
            commit('SETUSERUID', uid);
        }
    }
});

export default store;