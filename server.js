require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT;

const { generateJWT } = require('./helpers/generate-jwt');
const { validateJWT } = require('./helpers/validate-jwt');

app.use(express.static('public'));

app.get('/SignIn', generateJWT);
app.get('/Dashboard', validateJWT);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public", "404.html"));
});

app.listen(port, () => console.log(`Server initialized at port ${port}.`));