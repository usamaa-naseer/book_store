import express from "express";
import { connectionString } from "./connection_String.js";
import { bookPost, getbooks } from "./Controller/bookController.js";

const app = express();
app.use(express.json());
const port = 3001;
connectionString();

app.post("/api/add-detail", bookPost);
app.get("/api/get-detail", getbooks);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
