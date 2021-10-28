import mongoose from "mongoose";

export interface QuestionDocument extends mongoose.Document {
  title: string;
  message: string;
  isApproved: boolean;
}

const QuestionSchema = new mongoose.Schema({
  title: { type: String },
  message: { type: String },
  isApproved: { type: Boolean, default: false },
});

const Question = mongoose.model<QuestionDocument>("Question", QuestionSchema);

export default Question;
