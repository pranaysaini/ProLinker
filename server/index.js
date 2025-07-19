const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

const allowedOrigins = [
  'http://localhost:3000',
  'https://pro-linker-two.vercel.app'
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));


app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({extended: false, limit: '10mb'}));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB connected"))
  .catch(err => console.log(err));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use('/portfolios', express.static(path.join(__dirname, 'uploads/portfolios')));

app.use('/api/signup', require('./routes/signup'))
app.use('/api/createprofile', require('./routes/profile'))
app.use('/api/login', require('./routes/login'))
app.use('/api/creategig', require('./routes/creategig'))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
