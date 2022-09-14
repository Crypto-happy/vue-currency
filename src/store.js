import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currencyList: [],
    },
    mutations: {
        setCurrencyList(state, payload) {
            state.currencyList = payload
        },
    },
    actions: {
        setCurrency({commit} , payload) {
            commit("setCurrencyList", payload)
        },
        
    },
});
