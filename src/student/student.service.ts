import { Injectable, NotFoundException } from '@nestjs/common';
import { Student } from './student.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel('Student') private readonly studentModel: Model<Student>,
  ) {}

  async createStudent(student: Student) {
    const studentModel = new this.studentModel({
      name: student.name,
      tia: student.tia,
      course: student.course,
    });
    const result = await studentModel.save();
    return result.id as string;
  }

  async readStudents() {
    const students = await this.studentModel.find().exec();
    return students;
  }

  async updateStudent(student: Student) {
    const updatedStudent = await this.studentModel.findOne({
      tia: student.tia,
    });
    if (!updatedStudent) {
      throw new NotFoundException('Student not found');
    }
    if (student.name) {
      updatedStudent.name = student.name;
    }
    if (student.course) {
      updatedStudent.course = student.course;
    }
    updatedStudent.save();
  }

  async deleteStudent(tia: number) {
    await this.studentModel.deleteOne({ tia: tia }).exec();
  }
}
