import { Request, Response } from "express";
import { IStudentService } from "../interfaces/student.service.interface";

export class StudentController {

  constructor(private readonly studentService: IStudentService) { }



  async createStudent(req: Request, res: Response): Promise<Response> {
    try {
      const student = await this.studentService.createStudent(req.body);
      return res.status(201).json(student);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }




  async getAllStudents(req: Request, res: Response): Promise<Response> {
    try {
      const page = req.query.page ? parseInt(req.query.page as string) : 1;
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 5;

      const result = await this.studentService.getAllStudents(page, limit);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }




  async getStudentById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      if (typeof id !== "string") {
        return res.status(400).json({ message: "Invalid student id" });
      }

      const student = await this.studentService.getStudentById(id);

      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      return res.status(200).json(student);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }



  async updateStudent(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      if (typeof id !== "string") {
        return res.status(400).json({ message: "Invalid student id" });
      }

      const student = await this.studentService.updateStudent(id, req.body);

      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      return res.status(200).json(student);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }




  async deleteStudent(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      if (typeof id !== "string") {
        return res.status(400).json({ message: "Invalid student id" });
      }

      const deleted = await this.studentService.deleteStudent(id);

      if (!deleted) {
        return res.status(404).json({ message: "Student not found" });
      }

      return res
        .status(200)
        .json({ message: "Student deleted successfully" });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }


}
