import { NextRequest, NextResponse, userAgent } from "next/server";
import prisma from "@/lib/db";
// import { PrismaClient } from "../../../../generated/prisma";

// const psClient = new PrismaClient();
export async function POST(req : NextRequest){
    console.log("backend hitted")
    const data =  await req.json()
    console.log(data)
    await prisma.user.create({
  data: {
    username: data.username,
    password: data.password
  }
});
    return NextResponse.json({
        messege :"you have been signed up"
    })

}