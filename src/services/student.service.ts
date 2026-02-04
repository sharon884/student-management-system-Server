import StudentModel, { IStudent } from "../models/student.model";
import { IStudentService } from "../interfaces/student.service.interface";

export class StudentService implements IStudentService {

  async createStudent(data: {
    name: string;
    age: number;
    email: string;
    course: string;
  }): Promise<IStudent> {
    try {
      const student = await StudentModel.create(data);
      return student;
    } catch (error) {
      throw error;
    }
  }

  async getAllStudents(): Promise<IStudent[]> {
    return await StudentModel.find();
  }

  async getStudentById(id: string): Promise<IStudent | null> {
    return await StudentModel.findById(id);
  }

  async updateStudent(
    id: string,
    data: Partial<{
      name: string;
      age: number;
      email: string;
      course: string;
    }>
  ): Promise<IStudent | null> {
    return await StudentModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  }

  async deleteStudent(id: string): Promise<boolean> {
    const result = await StudentModel.findByIdAndDelete(id);
    return result !== null;
  }
}
