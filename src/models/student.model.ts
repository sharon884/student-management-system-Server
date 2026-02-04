import mongoose, { Document, Schema } from "mongoose";


 // interface (what a Student looks like)

export interface IStudent extends Document {
  name: string;
  age: number;
  email: string;
  course: string;
  createdAt: Date;
  updatedAt: Date;
}


const StudentSchema: Schema<IStudent> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    age: {
      type: Number,
      required: true,
      min: [1, "Age must be greater than 0"],
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },

    course: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, 
  }
);



const StudentModel = mongoose.model<IStudent>("Student", StudentSchema);

export default StudentModel;
