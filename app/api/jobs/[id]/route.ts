import connectDB from "@/app/_config/database";
import Job from "@/app/_models/jobModel";
import User from "@/app/_models/userModel";
import { jwtDecode } from "jwt-decode";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    await connectDB();

    const { id } = context.params;

    const job = await Job.findById(id);

    return NextResponse.json({
      status: "success",
      job,
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    await connectDB();

    let token;

    const authHeader = headers().get("authorization");
    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
    }

    if (!token) {
      return NextResponse.json(
        { error: "You are not logged in. Please log in to get access!" },
        { status: 401 }
      );
    }

    const decoded: { id: string } = jwtDecode(token);

    const { id: decodedId } = decoded;

    const currentUser = await User.findById(decodedId);

    if (!currentUser) {
      return NextResponse.json(
        { error: "The user no longer exists" },
        { status: 401 }
      );
    }

    if (currentUser.role !== "admin")
      return NextResponse.json(
        { error: "You are not authorized to access this route" },
        { status: 401 }
      );

    const { id } = context.params;

    const data = await req.json();

    const job = await Job.findByIdAndUpdate(id, data);

    return NextResponse.json({
      status: "success",
      job,
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    await connectDB();

    let token;

    const authHeader = headers().get("authorization");
    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
    }

    if (!token) {
      return NextResponse.json(
        { error: "You are not logged in. Please log in to get access!" },
        { status: 401 }
      );
    }

    const decoded: { id: string } = jwtDecode(token);

    const { id: decodedId } = decoded;

    const currentUser = await User.findById(decodedId);

    if (!currentUser) {
      return NextResponse.json(
        { error: "The user no longer exists" },
        { status: 401 }
      );
    }

    if (currentUser.role !== "admin")
      return NextResponse.json(
        { error: "You are not authorized to access this route" },
        { status: 401 }
      );

    const { id } = context.params;

    await Job.findByIdAndDelete(id);

    return NextResponse.json({
      status: "success",
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
