import axios from 'axios';

const queryURL = "https://guarded-bastion-16379.herokuapp.com/blog/" 

const API = {
    //Article Routes
    getAllPosts: function() {
        return axios.get(queryURL + "find/all");
    },
    getPostById: function(id) {
        return axios.get(queryURL + "find/" + id);
    },

    //User Routes
    newUser: function (userData) {
        return axios.post("/api/users", userData);
    },
    login: function (userData) {
        return axios.post("/api/login", userData);
    },
    logout: function() {
        return axios.get("/logout");
    }
    
}
export default API;