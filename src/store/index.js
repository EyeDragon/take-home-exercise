import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            currentPage: null,
            personalInfo: {
                name: "",
                age: 0,
                live: null,
                packageData: null
            }
        }
    },
    mutations: {
        changePage(state, newPage) {
            state.currentPage = newPage
        },
        resetPeronalInfo(state) {
            state.personalInfo = {
                name: "",
                age: 0,
                live: null,
                packageData: null,
                premium: ""
            }
        }
    }
});

export default store;