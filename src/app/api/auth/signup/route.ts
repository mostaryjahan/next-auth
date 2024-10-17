import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/database/mongo.config";
import { User } from "@/model/User";
import bcrypt from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Log the new user before saving
    console.log("Creating new user:", newUser);

    // Save the new user to the database
    await newUser.save();

    console.log("User saved successfully");

    return NextResponse.json(
      { message: "User signed up successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during sign up:", error);
    return NextResponse.json(
      { message: "An error occurred during sign up", error },
      { status: 500 }
    );
  }
}
