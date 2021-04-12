const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  // update type for image
  link: { type: String, required: true },
});

const googleBooks = mongoose.model("Books", booksSchema);

module.exports = googleBooks;