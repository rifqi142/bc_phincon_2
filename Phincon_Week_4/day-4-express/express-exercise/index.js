const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use(cors());

const router = express.Router();
// console.log(process.env.PORT);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/add", (req, res) => {
  const { number1, number2 } = req.query;
  const result = parseInt(number1) + parseInt(number2);
  res.send(`Hasil penjumlahan dari ${number1} dan ${number2} adalah ${result}`);
});

app.post("/calculate", (req, res) => {
  const { number1, number2, operator } = req.body;
  let result;

  switch (operator) {
    case "+":
      result = parseInt(number1) + parseInt(number2);
      break;
    case "-":
      result = parseInt(number1) - parseInt(number2);
      break;
    case "*":
      result = parseInt(number1) * parseInt(number2);
      break;
    case "/":
      result = parseInt(number1) / parseInt(number2);
      break;
    default:
      result = "Invalid operator";
  }
  res.send(`Hasil dari ${number1} ${operator} ${number2} adalah ${result}`);
});

const middleware = (req, res, next) => {
  const { id } = req.params;
  if (id === "1") {
    next();
  } else {
    res.send("Middleware gagal dijalankan");
  }
};

app.post("/profile/:id", middleware, (req, res) => {
  res.send("Middleware berhasil dijalankan");
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

/* Buatlah API dengan ketentuan sebagai berikut:
  data mengambil dari json
  1. Mendapatkan semua produk
  2. Mendapatkan produk berdasarkan id
  3. Mendapatkan produk berdasarkan nama produk
  4. Mendapatkan produk berdasarkan dari harga
  5. Mendapatkan produk berdasarkan sampai harga
*/
const products = require("./products.json");

app.get("/products", (req, res) => {
  products ? res.json(products) : res.status(404).send("Product not found");
});

app.get("/products/id/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === parseInt(id));

  product ? res.json(product) : res.status(404).send("Product not found");

  res.send("Mendapatkan produk berdasarkan id");
});

app.get("/products/name/:productName", (req, res) => {
  const { productName } = req.params;

  const product = products.find((product) => {
    return product.productName
      .toLowerCase()
      .includes(productName.toLowerCase());
  });

  product ? res.json(product) : res.status(404).send("Product not found");

  res.send("Mendapatkan produk berdasarkan nama produk");
});

app.get("/products/price/:price", (req, res) => {
  const { price } = req.params;

  const product = products.filter(
    (product) => product.price === parseInt(price)
  );

  product ? res.json(product) : res.status(404).send("Product not found");

  res.send("Mendapatkan produk berdasarkan dari harga");
});

// total price
app.get("/products/getTotalPrice", (req, res) => {
  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price;
  });

  totalPrice ? res.json(totalPrice) : res.status(404).send("Product not found");
});
