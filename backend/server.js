const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise");
const cors = require("cors");
const { exec } = require("child_process");
const { log } = require("console");
const fs = require("fs");
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.json());

// Set up MySQL connection pool
const pool = mysql.createPool({
  host: "containers-us-west-120.railway.app",
  port: "7711",
  user: "root",
  password: "iIUzLn412eZj0HXZxook",
  database: "railway",
  //   waitForConnections: true,
  //   connectionLimit: 10,
  //   queueLimit: 0,
});

// Get all users
app.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.get("/exe", (req, res) => {
  exec(
    'C:/"Program Files (x86)"/"BlueStacks X"/"BlueStacks X".exe',
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    }
  );
});

const currentDir = process.cwd();
console.log(currentDir, "sdgd");

app.get("/start", (req, res) => {
  exec(`${currentDir}/CV2/start.bat`, (error) => {
    if (error) {
      console.error(`Error: ${error}`);
      return;
    }

    const filePath = `${currentDir}/CV2/output.txt`;

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error reading file");
      } else {
        res.send(data);
        console.log("success");
      }
    });
  });
});

//save resource type
app.post("/save", (req, res) => {
  const filePath = "./resource_type.txt";
  const fileContent = req.body.save;

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error writing file");
    } else {
      res.send("File written successfully");
      // exec("E:/task/CV2/bot.bat", (error) => {
      //   if (error) {
      //     console.error(`Error: ${error}`);
      //     return;
      //   }
      // });
    }
  });
});

//search value
app.post("/search", async (req, res) => {
  try {
    const searchQuery = req.body;
    const [rows] = await pool.execute("SELECT * FROM users WHERE columns = ?", [
      `${searchQuery.search}`,
    ]);

    console.log(searchQuery);
    console.log(rows);

    // If no matches were found, return the original rows
    if (!rows.length) {
      res.status(404).send("false");
      return;
    }

    // Delete the matching row(s)
    await pool.execute("DELETE FROM users WHERE columns LIKE ?", [
      `${searchQuery.search}`,
    ]);

    // Get the remaining rows
    const [remainingRows] = await pool.execute(
      "SELECT * FROM users order by id"
    );

    res.status(200).json(remainingRows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
