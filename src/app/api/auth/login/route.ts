import { NextRequest, NextResponse } from "next/server";
import { User } from "@/model/User"; 
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Check if password matches
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // Return success response or create a session
    return NextResponse.json({ message: "Login successful", user }, { status: 200 });
    
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "An error occurred during login" }, { status: 500 });
  }
}
