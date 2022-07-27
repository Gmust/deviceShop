require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db')


const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;


const appStart = async ()=> {
    try {
        await sequelize.authenticate();
        app.listen(PORT, () => `Serer started on port ${PORT}`)
    } catch (e) {
        console.log(e);
    }
}

appStart();
