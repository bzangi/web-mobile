import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [
    StudentModule,
    MongooseModule.forRoot(
      'mongodb+srv://postgres:postgres@cluster0.vdy1b.mongodb.net/webMobile?retryWrites=true&w=majority',
    ),
    TeacherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
