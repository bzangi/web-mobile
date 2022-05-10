import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teacher } from './teacher.model';

@Injectable()
export class TeacherService {
  constructor(
    @InjectModel('Teacher') private readonly teacherModel: Model<Teacher>,
  ) {}

  async createTeacher(teacher: Teacher) {
    const teacherModel = new this.teacherModel({
      name: teacher.name,
      tia: teacher.tia,
      disciplines: teacher.disciplines,
    });
    const result = await teacherModel.save();
    return result.id as string;
  }

  async readTeachers() {
    const teachers = await this.teacherModel.find().exec();
    return teachers;
  }

  async updateTeacher(teacher: Teacher) {
    const updatedTeacher = await this.teacherModel.findOne({
      tia: teacher.tia,
    });
    if (!updatedTeacher) {
      throw new NotFoundException('Teacher not found');
    }
    if (teacher.name) {
      updatedTeacher.name = teacher.name;
    }
    if (teacher.disciplines) {
      updatedTeacher.disciplines = teacher.disciplines;
    }
    updatedTeacher.save();
  }

  async deleteTeacher(tia: number) {
    await this.teacherModel.deleteOne({ tia: tia }).exec();
  }
}
