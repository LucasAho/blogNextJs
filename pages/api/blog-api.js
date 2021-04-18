import axios from 'axios';

const queryURL = "https://guarded-bastion-16379.herokuapp.com" 

const API = {
    //Article Routes
    getAllPosts: function() {
        return axios.get(queryURL + "/blog/find/all");
    },
    getPostById: function(id) {
        return axios.get(queryURL + "/blog/find/" + id);
    },
    getTopics: function(){
        return axios.get(queryURL + "/blog/findGenres");
    },
    createArticle: function(obj) {
        return axios.post(queryURL + "/blog/create", obj);
    }
    
}
export default API;