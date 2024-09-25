import connectDB from "@/app/_config/database";
import Download from "@/app/_models/DownloadModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const data = await req.json();

    const download = await Download.create(data);

    return NextResponse.json(
      {
        status: "success",
        download,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: (error as Error).message,
      },
      {
        status: 500,
      }
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
      }
    );
  }
}
