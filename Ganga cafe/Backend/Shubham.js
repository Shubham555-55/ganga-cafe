const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("hello you are welcome to  SAHUBHAM CAFE server");
});
app.get("/about", (req, res) => {
  res.json({
    name: "Shubham cafe",
    city: "Varanasi",
    open: "8 AM - 8 PM"
  });
});
app.get("/contact", (req, res) => {
  res.json({
    phone: "9876543210",
    email: "meraman@iefjj"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});