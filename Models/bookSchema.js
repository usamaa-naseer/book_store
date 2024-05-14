import mongoose from "mongoose";
import Joi from "joi";

let book_Schema = new mongoose.Schema({
  bookTitle: String,
  bookdescription: String,
  bookPrice: String,
  bookAuther: String,
  bookPublisher: String,
  bookRating: String,
  bookCatagory: String,
});

book_Schema.index({ bookTitle: 1 }, { unique: true });

let bookJoiSchema = Joi.object({
  bookTitle: Joi.string().required(),
  bookdescription: Joi.string().required(),
  bookPrice: Joi.string().required(),
  bookAuther: Joi.string().required(),
  bookPublisher: Joi.string().required(),
  bookRating: Joi.string().required(),
  bookCatagory: Joi.string().required(),
});

let bookModel = mongoose.model("book_DB", book_Schema);
export { bookModel, bookJoiSchema };
