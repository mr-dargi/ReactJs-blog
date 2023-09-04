const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");


const dbURI = "mongodb://localhost:27017/blogPosts";

mongoose.connect(dbURI)
.then(res => {
  app.listen(8000, () => {
    console.log("Server is listening on port 8000")
  })
})
.catch(err => console.log(err));


const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/api", (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => res.json(result))
    .catch(err => {
      console.log(err);
      res.end();
    })
  console.log("request was made")
});

app.get("/api/:id", (req, res) => {
  const id = req.params.id;

  Blog.findById(id)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.json("Could not fetch the data!!!")
    })
})

app.post("/create/blog", (req, res) => {
  const blog = new Blog(req.body);

  blog.save()
    .then(result => res.json("Blog post saved."))
    .catch(err => res.json("There is some problem to save data!"))
})