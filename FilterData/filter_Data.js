function filterData(req) {
  let value = {};
  let condition = [];
  if (req.query.bookTitle) {
    condition.push({ bookTitle: req.query.bookTitle });
  }
  if (req.query.bookPrice) {
    condition.push({ bookPrice: req.query.bookPrice });
  }
  if (req.query.bookCatagory) {
    condition.push({ bookCatagory: req.query.bookCatagory });
  }

  if (condition.length > 0) {
    value["$or"] = condition;
  }
  return value;
}

export { filterData };
