const express = require('express');
const app = new express();
const port = 8080;
const {async_p_info,
    async_contacts,
    async_competences,
    async_education,
    async_languages,
    async_profexperience} = require("./dbInfo");

app.get("/", (req,res) => {
    return res.send("Hello World!");
});

let server = app.listen(port, () => {
    console.log("listening at http://localhost:"+ port)
})

//--------------------------------------
async_competences().then(f_competences => {
    // test the output of one of them
    console.log(f_competences[0].skill);
    console.log(f_competences[1].skill);
});