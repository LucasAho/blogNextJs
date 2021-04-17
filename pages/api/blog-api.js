import axios from 'axios';

const queryURL = "https://guarded-bastion-16379.herokuapp.com" 

const API = {
    //Article Routes
    getAllPosts: function() {
        return axios.get(queryURL + "/blog/find/all");
    },
    getPostById: function(id) {
        return axios.get(queryURL + "/blog/find/" + id);
    }
    
}
export default API;