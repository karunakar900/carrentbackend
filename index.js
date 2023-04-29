const express = require('express');
const mongoose = require('mongoose');
const datarouter = require('../backend/routes/bookingroute');
const cors = require('cors');
const app = express();

mongoose.connect("mongodb+srv://karunakarkoyada234:ta2uu2z5HhNSxZOe@cluster0.fonmon2.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => {
        console.log("connected to database");
    })
    .catch(error => {
        console.log(error);
    })

app.use(express.json());
app.use(cors());
app.use("/", datarouter);



app.listen(3000, () => {
    console.log("Server started on port 3000");
});