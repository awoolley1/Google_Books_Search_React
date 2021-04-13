import axios from "axios";

export default {
  getBook: function() {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes");
  }
};
