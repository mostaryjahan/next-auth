import mongoose, { Schema, Document } from "mongoose";

// User Interface
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

// User Schema
const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

// Export the User model
export const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
