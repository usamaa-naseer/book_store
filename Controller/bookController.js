import { bookModel, bookJoiSchema } from "../Models/bookSchema.js";
import { filterData } from "../FilterData/filter_Data.js";
import {
  customResponse,
  customFailResponse,
} from "../Custom Response/Success_response.js";

let bookPost = async (req, res) => {
  const { error, value } = bookJoiSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error);
  }
  let details = new bookModel(value);
  try {
    let save = await details.save();
    return customResponse(res, 200, "Working Successful", save);
  } catch (err) {
    return customFailResponse(res, 500, "not working", err.message);
  }
};

// ----------------------------------------------------------------------------------

let getbooks = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 2;
    let skip = (page - 1) * limit;
    let filter = filterData(req);
    let value = await bookModel.find(filter).limit(limit).skip(skip);
    customResponse(res, 200, "Working Successful", value);
  } catch (error) {
    customFailResponse(res, 500, "not working", error.message);
  }
};

export { bookPost, getbooks };
