import { IStudent } from "../models/student.model";

/**
 * Student service abstraction
 * Defines what operations are allowed on students
 */
export interface IStudentService {
  createStudent(data: {
    name: string;
    age: number;
    email: string;
    course: string;
  }): Promise<IStudent>;

  getAllStudents(page: number, limit: number): Promise<{
    data: IStudent[];
    total: number;
    page: number;
    totalPages: number;
  }>;

  getStudentById(id: string): Promise<IStudent | null>;

  updateStudent(
    id: string,
    data: Partial<{
      name: string;
      age: number;
      email: string;
      course: string;
    }>
  ): Promise<IStudent | null>;

  deleteStudent(id: string): Promise<boolean>;
}
