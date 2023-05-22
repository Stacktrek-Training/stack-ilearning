import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import pool from "../../../server/database";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Render login form
app.get("/login", (req: Request, res: Response) => {
  res.render("login");
});

// Handle login form submission
app.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE username = $1 AND password = $2",
      [username, password]
    );

    if (result.rowCount > 0) {
      // Successful login
      res.redirect("/dashboard"); // Redirect to the dashboard page
    } else {
      // Invalid credentials
      res.render("login", { error: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.render("login", { error: "An error occurred" });
  }
});

// Render dashboard page
app.get("/dashboard", (req: Request, res: Response) => {
  res.render("dashboard");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
