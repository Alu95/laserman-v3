export const state = () => (
    {
        menu: {
            isOpen: false,
        }
    }
);

export const getters = {
    getMenu(state) {
        return state.menu;
    }
};

export const actions = {
    menu({state,commit}) {
        console.log(state)
        commit('menuChange', state.menu.isOpen = !state.menu.isOpen)
    }
};

export const mutations = {
    menuChanges(state, payload) {
        state.menu.isOpen = !state.menu.isOpen;
    },
};