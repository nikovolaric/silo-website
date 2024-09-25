import { cloudinary } from "@/app/_config/cloudinary";
import connectDB from "@/app/_config/database";
import Download from "@/app/_models/DownloadModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    await connectDB();

    const { id } = context.params;

    const download = await Download.findById(id);

    return NextResponse.json({
      status: "success",
      download,
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

    const { id } = context.params;

    const data = await req.json();

    const download = await Download.findByIdAndUpdate(id, data);

    return NextResponse.json({
      status: "success",
      download,
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

    const { id } = context.params;

    const download = await Download.findByIdAndDelete(id);

    cloudinary.uploader.destroy(download.downloadLink);

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
