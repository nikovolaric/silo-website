import { cloudinary } from "@/app/_config/cloudinary";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { id } = await req.json();

  cloudinary.uploader.destroy(id).then((result) => console.log(result));

  return NextResponse.json({
    status: "success",
  });
}
