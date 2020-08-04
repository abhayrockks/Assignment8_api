import axios from 'axios'

export default {
    state: {
        error: false,
        login_progress: false,
        user: {},
    },
    getters: {
        api_error: state => state.error,
        isLoggedIn: state => state.user.username
    },
    actions: {
        async login({ commit }, payload) {
            try {
                commit("login_progress", true);
                const response = await axios.post("https://reqres.in/api/login", payload);
                delete payload.password;
                commit("login", payload);
                payload.token = response;
                commit("login_progress", false);
                return true
            } catch (err) {
                commit("login_progress", false);
                commit("login_fail", err)
                return false
            }
        },
        logout({ commit }) {

            commit("logout")
        }
    },
    mutations: {
        login: (state, data) => {
            state.user = data;
        },
        login_fail: (state, data) => {
            state.error = data;
        },
        login_progress: (state, data) => {
            state.login_progress = data;
        },
        logout: (state) => {
            state.user = {};
        }
    }
}