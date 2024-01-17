import express from "express";

const app = express();
const port = 8699;
var title = [];
var description = [];

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.render("index.ejs", {title: title, description: description});
});

app.get("/about", (req,res) => {
    res.render("about.ejs");
});

app.get("/contact", (req,res) => {
    res.render("contact.ejs");
});

app.get("/form", (req, res) => {
    res.render("form.ejs");
});

app.post("/", (req, res) => {
    title.push(req.body["title"]);
    description.push(req.body["description"]);
    res.render("index.ejs", {title: title, description: description});
});

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}.`);
});