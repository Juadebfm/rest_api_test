import express from "express";

// takes incoming post request body
import bodyParser from "body-parser";

import studentRoutes from "./routes/students.js";

// initilaize express app
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/students', studentRoutes)

//routes
app.get("/", (req, res) => {
  res.send("Hello from homepage");
});

app.listen(PORT, () =>
  console.log(`Server is Running on port: http://localhost:${PORT}`)
);
