const express = require("express");
const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');

// Routes
app.get("/", (req, res)  => {
  res.render("index");
});

app.get("/contact-me", (req, res)  => {
  res.render("contact-me");
});

app.get("/about", (req, res)  => {
  res.render("about");
});

app.get("/error", (req, res)  => {
  res.render("404");
});

// App listener
app.listen(port, () => {
  console.log(`Server running on ${port}.`);
});
