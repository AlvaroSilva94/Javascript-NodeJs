const express = require('express');
const app = new express();
const port = 8080;

app.get("/", (req,res) => {
    return res.send("Hello World!");
});

let server = app.listen(port, () => {
    console.log("listening at http://localhost:"+ port)
})

//Possibilidade de permitir, quando correr o server, dar update ou não há informação.
//Em caso negativo, ir buscar à db.
//Em caso positivo, ir buscar à CVinfoToConst, colocar na db e usar essa info.

