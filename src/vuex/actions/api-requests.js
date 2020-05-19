import axios from "axios";

export default {
    GET_PRODUCTS_FROM_API({commit}) {
        return axios('http://localhost:3000/products', {
            method: "GET"
        })
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    },
    GET_USERS_FROM_API({commit}) {
        return axios('http://localhost:3000/users', {
            method: "GET"
        })
            .then((users) => {
                commit('SET_USERS_TO_STATE', users.data);
                return users;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }
}