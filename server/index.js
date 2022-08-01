require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db')
const models = require('./models/models')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./error/ApiError')
const path = require('path')

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/api', router);

const PORT = process.env.PORT;


const appStart = async ()=> {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => `Serer started on port ${PORT}`)
    } catch (e) {
        console.log(e);
    }
}

appStart();
