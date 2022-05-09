import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.model';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  readAllStudents(): Promise<any> {
    return this.studentService.readStudents();
  }

  @Post()
  async createStudent(@Body() student: Student): Promise<any> {
    const response = await this.studentService.createStudent(student);
    return { id: response };
  }

  @Patch()
  async updateStudent(@Body() student: Student) {
    await this.studentService.updateStudent(student);
  }

  @Delete(':tia')
  async deleteStudent(@Param('tia') tia: number) {
    await this.studentService.deleteStudent(tia);
    return null;
  }
}
