import express, { Request, Response } from "express";
import cors from "cors";
import pool from "./database";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/addUser", (req: Request, res: Response) => {
  const username = req.body["USERNAME"];
  const email = req.body["EMAIL"];
  const password = req.body["PASSWORD"];

  console.log("Username: " + username);
  console.log("Password: " + password);
  console.log("Email: " + email);

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

app.post("/addCourse", (req: Request, res: Response) => {
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

app.post("/addLesson", (req: Request, res: Response) => {
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

app.post("/addData", (req: Request, res: Response) => {
  const gameId = req.body["gameId"];
  const gameName = req.body["gameName"];
  const username = req.body["username"];
  const score = req.body["score"];
  const timeSpent = req.body["timeSpent"];
  const dateTime = new Date().toISOString();

  console.log("Game ID: " + gameId);
  console.log("Game Name: " + gameName);
  console.log("Username: " + username);
  console.log("Score: " + score);
  console.log("Time Spent: " + timeSpent);
  console.log("Date & Time: " + dateTime);

  const insertSTMT = `INSERT INTO GAMEDATA (GAME_ID, GAME_NAME, USERNAME, SCORE, TIMESPENT, DATE_TIME)
    VALUES (${gameId}, '${gameName}', '${username}', ${score}, ${timeSpent}, '${dateTime}');`;

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

app.delete("/deleteUser/:username", (req: Request, res: Response) => {
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

app.get("/getData", (req: Request, res: Response) => {
  const selectSTMT = "SELECT * FROM GameData";

  pool
    .query(selectSTMT)
    .then((result) => {
      const gameData = result.rows;
      res.send(gameData);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving game data");
    });
});

app.listen(4000, () => console.log("Server on localhost:4000"));
