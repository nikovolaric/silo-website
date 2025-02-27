import connectDB from "@/app/_config/database";
import Download from "@/app/_models/DownloadModel";
import User from "@/app/_models/userModel";
import { jwtDecode } from "jwt-decode";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    let token;

    const headerStore = await headers();

    const authHeader = headerStore.get("authorization");
    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
    }

    if (!token) {
      return NextResponse.json(
        { error: "You are not logged in. Please log in to get access!" },
        { status: 401 },
      );
    }

    const decoded: { id: string } = jwtDecode(token);

    const { id: decodedId } = decoded;

    const currentUser = await User.findById(decodedId);

    if (!currentUser) {
      return NextResponse.json(
        { error: "The user no longer exists" },
        { status: 401 },
      );
    }

    if (currentUser.role !== "admin")
      return NextResponse.json(
        { error: "You are not authorized to access this route" },
        { status: 401 },
      );

    const data = await req.json();

    const download = await Download.create(data);

    return NextResponse.json(
      {
        status: "success",
        download,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: (error as Error).message,
      },
      {
        status: 500,
      },
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = req.nextUrl;

    const query = Object.fromEntries(searchParams);

    const downloads = await Download.find(query).sort({ site: 1 });

    return NextResponse.json({
      status: "success",
      results: downloads.length,
      downloads,
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: (error as Error).message,
      },
      {
        status: 500,
      },
    );
  }
}
