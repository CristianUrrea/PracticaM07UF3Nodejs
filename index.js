const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const userService = require('./services/userService');

//const mongoose = require('mongoose');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//DATABASE ERROR Aseguar que la carpeta Data db esta creada y eecutar el mongod
userService.createConnection();

app.use('/api/v1/user', require('./routes/userRoutes'));
app.use('/api/v1/media', require('./routes/mediaRoutes'));
app.use('/api/v1/capitol', require('./routes/capitolRoutes'));


// app.post('/', function (req, res) {
//     mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, err => {
//         if(err) {
//             res.send(`error: ${err}`);
//         } else {
//             res.send(`Success: ${req.query.id} // ${req.body.name}`);
//         }
//     });
// });

app.listen(process.env.PORT);
