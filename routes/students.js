import express from "express";

import {
  createStudent,
  getStudent,
  getStudentById,
  deleteStudents,
  updateStudentInfo,
} from "../controllers/students.js";

const router = express.Router();

router.get("/", getStudent);

router.post("/", createStudent);

// => req.params
router.get("/:id", getStudentById);

router.delete("/:id", deleteStudents);

router.patch("/:id", updateStudentInfo);

export default router;
