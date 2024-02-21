import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    plugins: [createPersistedState()],
    state() {
        return {
            userUID: '',
            isLoggedIn: false,
            isArtist: false,
            user: {
                name: '',
                profileURL: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
            }
        }
    },
    getters: {
        checkLogin(state) {
            return state.isLoggedIn;
        },
        getUserUID(state) {
            return state.userUID;
        },
        getUser(state) {
            return state.user;
        }
    },
    mutations: {
        LOGIN(state) {
            state.isLoggedIn = true;
        },
        LOGOUT(state) {
            state.isLoggedIn = false;
            state.userUID = '';
        },
        SETUSERUID(state, uid) {
            state.userUID = uid;
        },
        SETUSER(state, user) {
            state.user = user;
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
        },
        setUser({ commit }, user) {
            commit('SETUSER', user);
        }
    }
});

export default store;