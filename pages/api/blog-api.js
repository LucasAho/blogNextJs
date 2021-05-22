import axios from 'axios';

const queryURL = "https://guarded-bastion-16379.herokuapp.com/api" 

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
    getMetaData: function(id){
        return axios.get(queryURL + "/blog/findData/except/" + id);
    },
    createArticle: function(obj) {
        return axios.post(queryURL + "/blog/create", obj);
    },
    
    getAllWords: function() {
        return axios.get(queryURL + "/conlang/tukren/wordlist");
    },
    getWord: function(word) {
        return axios.get(queryURL + "/conlang/tukren/wordlist/" + word);
    },
    createWord: function(obj) {
        if (obj.validate === "aholucascode@gmail.com") {
            let validObj = {
                data: obj.data,
                key: process.env.WORD_KEY 
            }
            return axios.post(queryURL + "/conlang/tukren/wordlist", validObj);
        } 
    },
    sendContactForm: function(obj) {
        return axios.post('/api/contact', obj);
    }
    
}
export default API;