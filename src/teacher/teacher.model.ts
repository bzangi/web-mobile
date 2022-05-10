import * as mongoose from 'mongoose';

export const TeacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tia: { type: String, required: true },
  disciplines: { type: Array, required: true },
});

export interface Teacher extends mongoose.Document {
  id: string;
  name: string;
  tia: string;
  disciplines: string[];
}
