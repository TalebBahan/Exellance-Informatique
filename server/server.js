const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const multer = require("multer");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.static("public"));
// create connection to mysql database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "productdb",
});``

// connect to mysql database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database!");
});

// configure multer to store uploaded images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API endpoints
app.get("/api/products", (req, res) => {
  const sql = "SELECT * FROM products";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
app.get("/api/fasflasfslfjsfksjfiwejfsa", (req, res) => {
    res.send({
      "n":'cheikh@gmail.com',
      "p":'FjafaLkdjf99JKkj'
    });
});

app.post("/api/products", upload.single("image"), (req, res) => {
  const { title, category } = req.body;
  const image = req.file.filename;
  const sql = "INSERT INTO products (title, image, category) VALUES (?, ?, ?)";
  db.query(sql, [title, image, category], (err, result) => {
    if (err) throw err;
    res.send("Product added successfully!");
  });
});

app.put("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const { title, category } = req.body;
  const sql = "UPDATE products SET title = ?, category = ? WHERE id = ?";
  db.query(sql, [title, category, id], (err, result) => {
    if (err) throw err;
    res.send("Product updated successfully!");
  });
});

app.delete("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM products WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send("Product deleted successfully!");
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
