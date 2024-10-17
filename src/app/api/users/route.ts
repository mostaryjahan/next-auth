import { NextResponse } from "next/server";
import { User } from "@/model/User"; // Make sure the User model is correctly imported
import { connect } from "@/database/mongo.config";

// Connect to the MongoDB database
connect();

export async function GET() {
  try {
    // Find all users in the 'users' collection
    const users = await User.find();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error fetching users", error },
      { status: 500 }
    );
  }
}
