const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
//to set the view engine
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

//template engine root
app.get("/", (req, res) => {
    res.render('index', {
        myname: "santoo",
    });
});

app.get("/about", (req, res) => {
    res.render('about');
})
//built in middleware
app.use(express.static(staticPath));
//app.get(root,callback)
app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/about", (req, res) => {
    res.send("Hello about");
});


app.get("/about/*", (req, res) => {
    res.render("404", {
        errorcomment: "this is about page not found"
    });
})

app.get("*", (req, res) => {
    res.render("404", {
        errorcomment: "this is 404"
    });
})


app.listen(8000, () => {
    console.log("listeng ")
});
