import { Router } from "express";
import { StudentController } from "../controllers/student.controller";
import { StudentService } from "../services/student.service";

const router = Router();

// Dependency Injection
const studentService = new StudentService();
const studentController = new StudentController(studentService);

// Routes
router.post("/", (req, res) => studentController.createStudent(req, res));
router.get("/", (req, res) => studentController.getAllStudents(req, res));
router.get("/:id", (req, res) => studentController.getStudentById(req, res));
router.put("/:id", (req, res) => studentController.updateStudent(req, res));
router.delete("/:id", (req, res) => studentController.deleteStudent(req, res));

export default router;
