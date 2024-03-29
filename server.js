const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
require("./db/mongoose");
const UserRoutes = require("./routes/userRoutes");
const ConnectionRoutes = require("./routes/connectionRoutes");
const PostRoutes = require("./routes/postRoutes");

const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setting up cors, headers
app.use(cors());
app.use(compression());
app.use(UserRoutes);
app.use(ConnectionRoutes);
app.use(PostRoutes);

// port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
