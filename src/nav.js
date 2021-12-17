const express = require("express");
const app = express();
const port = 8000;

//app.get(root,callback)
app.get("/", (req, res) => {
    //res.send("Hello world");
    res.write("<h2>Hello world1</h2>");
    res.send();
});

app.get("/about", (req, res) => {
    res.status(200).send("Hello about");
});

//with json data
// app.get("/temp", (req, res) => {
//     res.send([
//         {
//             id: 1,
//             name: 'santoo'
//         },
//         {
//             id: 2,
//             name: 'mohit'
//         }

//     ]);
// });


//res.json and res.send both are identical, the difference is that res.send can convert the non-objects such as null and undefined, which are no a valid json


app.get("/temp", (req, res) => {
    res.json([
        {
            id: 1,
            name: 'santoo'
        },
        {
            id: 2,
            name: 'mohit'
        }

    ]);
});


app.listen(port, () => {
    console.log(`listening to port ${port}`)
});
