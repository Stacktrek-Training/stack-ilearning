const express = require("express");
const cors = require("cors");
const pool = require("./database");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/addUser", (req, res) => {
  const username = req.body["USERNAME"];
  const email = req.body["EMAIL"];
  const password = req.body["PASSWORD"];
  //const firstName = req.body["FIRST_NAME"];
  //const lastName = req.body["LAST_NAME"];

  console.log("Username: " + username);
  console.log("Password: " + password);
  console.log("Email: " + email);
  //console.log("First Name: " + firstName);
  //console.log("Last Name: " + lastName);

  const insertSTMT = `INSERT INTO Users (USERNAME, EMAIL, PASSWORD, CREATED_AT, UPDATED_WHEN)
    VALUES ('${username}', '${email}', '${password}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`;

  pool
    .query(insertSTMT)
    .then((response) => {
      console.log("Data Saved");
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(req.body);
  res.send("Response Received: " + JSON.stringify(req.body));
});

app.post("/addCourse", (req, res) => {
  const courseName = req.body["courseName"];
  const courseDescription = req.body["courseDescription"];
  const isCompleted = req.body["isCompleted"];

  console.log("Course Name: " + courseName);
  console.log("Course Description: " + courseDescription);
  console.log("Is Completed: " + isCompleted);

  const insertSTMT = `INSERT INTO Course (COURSE_NAME, COURSE_DESCRIPTION, isCompleted)
    VALUES ('${courseName}', '${courseDescription}', ${isCompleted});`;

  pool
    .query(insertSTMT)
    .then((response) => {
      console.log("Data Saved");
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(req.body);
  res.send("Response Received: " + JSON.stringify(req.body));
});

app.post("/addLesson", (req, res) => {
  const courseId = req.body["courseId"];
  const lessonTitle = req.body["lessonTitle"];
  const lessonContent = req.body["lessonContent"];

  console.log("Course ID: " + courseId);
  console.log("Lesson Title: " + lessonTitle);
  console.log("Lesson Content: " + lessonContent);

  const insertSTMT = `INSERT INTO Lesson (COURSE_ID, LESSON_TITLE, LESSON_CONTENT)
    VALUES (${courseId}, '${lessonTitle}', '${lessonContent}');`;

  pool
    .query(insertSTMT)
    .then((response) => {
      console.log("Data Saved");
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(req.body);
  res.send("Response Received: " + JSON.stringify(req.body));
});

app.delete("/deleteUser/:username", (req, res) => {
  const username = req.params.username;

  const deleteSTMT = `DELETE FROM Users WHERE USERNAME = '${username}'`;

  pool
    .query(deleteSTMT)
    .then((response) => {
      console.log("User deleted");
      console.log(response);
      res.send("User deleted");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error deleting user");
    });
});

app.listen(4000, () => console.log("Server on localhost:4000"));
