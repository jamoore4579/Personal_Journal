// app.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// MySQL Database Connection
const db = mysql.createConnection({
    host: 'your_mysql_host',
    user: 'your_mysql_username',
    password: 'your_mysql_password',
    database: 'journal'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Middleware to parse JSON and url-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Express route for handling new post submissions
app.post('/save-post', (req, res) => {
    const title = req.body.title;
    const content = req.body.content;

    const sql = 'INSERT INTO posts (title, content) VALUES (?, ?)';
    db.query(sql, [title, content], (err, result) => {
        if (err) {
            console.error('Error saving post:', err);
            res.status(500).send('Error saving post');
        } else {
            console.log('Post saved successfully');
            res.send('Post saved successfully');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
