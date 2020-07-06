const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Grab the mongo uri
const db = require("./config/keys").mongoURI;

// Initialize mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


// Import routes
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");

// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up routes
app.use("/api/users", users);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 5000;

// Start server
app.listen(port, () => console.log(`Server is running on port ${ port }`));