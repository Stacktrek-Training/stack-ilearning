const express = require("express");
const cors = require("cors");
const pool = require("./database");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/addUser", (req, res) => {
  const firstName = req.body["firstName"];
  const lastName = req.body["lastName"];
  const email = req.body["email"];
  const age = req.body["age"];
  const userType = req.body["userType"];

  console.log("First Name: " + firstName);
  console.log("Last Name: " + lastName);
  console.log("Email: " + email);
  console.log("Age: " + age);
  console.log("User Type: " + userType);

  const insertSTMT = `INSERT INTO Users (FIRST_NAME, LAST_NAME, EMAIL, AGE, USER_TYPE, CREATED_AT, UPDATED_WHEN)
    VALUES ('${firstName}', '${lastName}', '${email}', ${age}, '${userType}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`;

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

app.listen(4000, () => console.log("Server on localhost:4000"));
