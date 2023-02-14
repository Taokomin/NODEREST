require("dotenv").config();
const express = require("express");
const app = express();


app.use(express.json());


let books =[
    {
        id:1,
        title: "Book 1",
        author: "Author 1"
    },
    {
        id:1,
        title: "Book 2",
        author: "Author 2"
    },
    {
        id:1,
        title: "Book 3",
        author: "Author 3"
    }
];


app.get("/books", (req, res) => {
    res.json(books);
});


app.get("/books", (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if(!book) res.status(404).send("Book not found");
    res.json(book);
});


app.get("/books", (req, res) => {
   const book = {
    id: book.length + 1,
    title: req.body.title,
    author: req.body.author
   };
   books.push(book);
   res.send(book);
});


app.get("/books/:id", (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if(!book) res.status(404).send("Book not found");
    book.title = req.body.title;
    book.author = req.body.author;
    res.json(book);
});


app.get("/books/:id", (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if(!book) res.status(404).send("Book not found");
    const index = books.indexOf(book);
    books.splice(index, 1);
    res.json(book);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));