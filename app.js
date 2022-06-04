const express = require('express');
require('dotenv').config();
const routes = require('./routes/routes')
const db = require('./db/index');
const cors = require('cors')
const path = require('path');
const { initUsersDB } = require('./modules/users.repository');
const { deleteAllUsers } = require('./services/user.service');

const app = express();
app.use(express.json())
app.use(routes);

app.use(cors());

app.use('/', express.static(path.join(__dirname, 'public')));

const port = process.env.SERVER_PORT || 8000;

app.listen(port, async () => {
    await db.connect();
    deleteAllUsers();
    initUsersDB();
    console.log(`server open at http://localhost:${port}`);
})
