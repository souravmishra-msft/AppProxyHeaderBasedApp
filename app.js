const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const ejs = require('ejs');
const cors = require('cors');

dotenv.config({ path: './config/main.env' });

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(cors());

app.use(express.static(path.join(__dirname, "/public")));
app.use('/', require('./routes/routes'));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});