const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

app.use(express.json());

// Implementasi Cors
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);

// Implementasi body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Koneksi ke database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'log-regDB',
});



// Proses register ke database
app.post("/register", (req, res) => {
    // mengambil data yang dikirim dari frontend
    const username = req.body.username;
    const password = req.body.password;
    const nama = req.body.nama;

    console.log(username, password, nama);

    bcrypt.hash(password, 10, (err, hash) => {
        db.query("INSERT INTO users(username, password,nama) VALUES (?,?,?)",
            [username, hash, nama],
            (err, result) => {
                console.log(err);
            }
        );
    });

});







// Proses Login
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ?;",
        username,
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            console.log(result[0].password);
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        let token = jwt.sign(
                            { userId: result[0].id, username: result[0].username },
                            "secretkeyappearshere",
                            { expiresIn: "1h" }
                        );
                        res.send(token);
                        console.log(token);
                    }
                    else {
                        res.send({ message: "Kombinasi username atau password salah" });
                    }
                });
            }
            else {
                res.send({ message: "User tidak ditemukan" });
            }
        }
    );
});

app.listen('3001', () => {
    console.log("server running");
});