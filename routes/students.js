import express from "express";

import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let students = [];

router.get("/", (req, res) => {
  res.send(students);
});

router.post("/", (req, res) => {
  const student = req.body;
  students.push({ ...student, id: uuidv4() });
  res.send(
    `Student with the name ${student.firstName} has been successfully added`
  );
});

// => req.params
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundStudent = students.find((student) => student.id === id);
  res.send(foundStudent);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  students = students.filter((student) => student.id !== id);

  res.send(`Student with the id ${id} deleted from the database`);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const student = students.find((student) => student.id === id);

  if (firstName) {
    student.firstName = firstName;
  }
  if (lastName) {
    student.lastName = lastName;
  }
  if (age) {
    student.age = age;
  }

  res.send(`User with the id ${id} has been updated`);
});

export default router;
