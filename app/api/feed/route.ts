import { PrismaClient } from "@prisma/client/extension";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function GET (){
    const allContent = await client.feed.findMany({});
    return NextResponse.json({allContent})
}

export async function POST (req:NextRequest){
    const body = await req.json();
    await client.feed.create({
        data:{
            content:body.content
        }
    })
    return NextResponse.json({
        content:body.content
    })
}