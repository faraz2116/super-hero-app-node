const express = require('express');
const app = express();
const port = 3000;

var cors = require("cors");
var config = require("./config");
var validation = require("./validation")();
var cntrl = require("./controller")(config);

app.use(cors({
    origin: true,
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding, Accept-Language, Host, Referer, User-Agent, Set-Cookie, set-cookie, X-XSRF-TOKEN",
    exposedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding, Accept-Language, Host, Referer, User-Agent, Set-Cookie, set-cookie",
    credentials: true
}));


app.post('/callHero/:code', validation.doCheckCode, cntrl.getDecodedValue, (req, res) => {  
    res.send(res.result)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))