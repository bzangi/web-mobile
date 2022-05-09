import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Teacher } from './teacher.model';
import { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  readAllTeachers(): Promise<any> {
    return this.teacherService.readTeachers();
  }

  @Post()
  async createTeacher(@Body() teacher: Teacher): Promise<any> {
    const response = await this.teacherService.createTeacher(teacher);
    return { id: response };
  }

  @Patch()
  async updateTeacher(@Body() teacher: Teacher) {
    await this.teacherService.updateTeacher(teacher);
  }

  @Delete(':tia')
  async deleteTeacher(@Param('tia') tia: number) {
    await this.teacherService.deleteTeacher(tia);
    return null;
  }
}
