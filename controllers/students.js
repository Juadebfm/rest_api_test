import { v4 as uuidv4 } from "uuid";

let students = [];

export const createStudent = (req, res) => {
  const student = req.body;
  students.push({ ...student, id: uuidv4() });
  res.send(
    `Student with the name ${student.firstName} has been successfully added`
  );
};

export const getStudent = (req, res) => {
  res.send(students);
};

export const getStudentById = (req, res) => {
  const { id } = req.params;

  const foundStudent = students.find((student) => student.id === id);
  res.send(foundStudent);
};

export const deleteStudents = (req, res) => {
  const { id } = req.params;

  students = students.filter((student) => student.id !== id);

  res.send(`Student with the id ${id} deleted from the database`);
};

export const updateStudentInfo = (req, res) => {
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
};
