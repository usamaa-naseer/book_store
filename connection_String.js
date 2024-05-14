import mongoose from "mongoose";
function connectionString() {
  mongoose
    .connect("mongodb://localhost:27017/test")
    .then(() => {
      console.log("successful coonection");
    })
    .catch(() => {
      console.log("Error");
    });
}
export { connectionString };
