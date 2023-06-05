require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT || 3001;

const startServer = async () => {
  try {
    // await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is running on port ${port}`));
  } catch (err) {
    console.error(err);
  }
};

startServer();